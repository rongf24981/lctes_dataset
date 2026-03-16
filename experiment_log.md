# Coconut Experiment Log
## Project: Training LLMs to Reason in Continuous Latent Space (CodeNet JS Deobfuscation)

---

## 1. Research Overview

**Base Framework**: Facebook Research "Coconut" — replaces chain-of-thought text reasoning with continuous latent vectors (hidden states) during training.

**Task**: JavaScript deobfuscation — given an obfuscated JS program, progressively deobfuscate it across multiple stages.

**Dataset Source**: CodeNet (IBM) — competitive programming problems compiled to JavaScript and obfuscated.

---

## 2. Dataset Preparation

### 2.1 Raw Data
- Source: `final_dataset1/` — 1,301 JSON files, one per CodeNet program
- Each file contains one training example with fields:
  - `question`: system prompt + obfuscated JS code
  - `steps`: list of intermediate deobfuscation stages
  - `answer`: final deobfuscated code

### 2.2 Token Length Analysis
- Sequences are extremely long: **27,000–120,000 tokens per example**
- Breakdown: question (~6k tokens) + steps (~21k tokens) + answer (~600 tokens)
- This far exceeds typical LLM training context windows

### 2.3 Dataset Selection Strategy
- Selected the **20 smallest files** by file size to minimize sequence length
- Smallest examples still ~27,000–30,000 tokens total
- Split: **12 train / 4 val / 4 test** (60/20/20)
- Output: `final_dataset2_ready/train.json`, `val.json`, `test.json`

### 2.4 Format
Coconut-compatible JSON format:
```json
[
  {
    "question": "...",
    "steps": ["...", "...", "..."],
    "answer": "..."
  }
]
```

---

## 3. Model Selection

### 3.1 Constraints
- Coconut requires a causal LM with sufficient context window
- Default Coconut model (GPT-2) supports only **1,024 tokens** — insufficient
- Sequences are 27k–120k tokens

### 3.2 Model Chosen
**meta-llama/Llama-3.2-3B**
- Parameters: 3B
- Context window: 128k tokens
- Architecture: Llama (supported by Coconut codebase)
- Precision: bf16
- Access: gated (Meta license approval required)

---

## 4. Infrastructure

### 4.1 Local Machine
- GPU: NVIDIA RTX 3070 (8GB VRAM)
- OS: Windows 11
- Python: 3.12.8 venv
- PyTorch: 2.5.1+cu124
- Used for: development, dataset preparation, local testing

### 4.2 PSU Roar Collab Cluster
- Interface: Open OnDemand web portal
- Scheduler: SLURM
- Partition: `standard`
- GPU nodes: `p-gc-*` series
- GPU type: **NVIDIA A100 40GB** (2 per node)
- Note: Some nodes (e.g. p-gc-3005) use MIG slicing (~5GB per slice) — avoided by requesting `--gres=gpu:a100:2`

### 4.3 Storage Layout (Cluster)
```
~/scratch/coconut/          # code
~/scratch/final_dataset2_ready/  # dataset
/scratch/rjf5768/           # large files (HF cache, logs, wandb)
  .cache/huggingface/       # model weights cache
  coconut/logs/             # SLURM job logs
  wandb/                    # wandb run logs
```

---

## 5. Training Configuration

### 5.1 SLURM Job Script (`train.sh`)
```bash
#SBATCH --partition=standard
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=2
#SBATCH --gres=gpu:a100:2
#SBATCH --cpus-per-task=4
#SBATCH --mem=128GB
#SBATCH --time=24:00:00
```

### 5.2 Coconut Config (`codenet_coconut_3070.yaml`)
| Parameter | Value | Reason |
|---|---|---|
| `model_id` | meta-llama/Llama-3.2-3B | 128k context, Llama arch |
| `bf16` | True | A100 native support, halves VRAM |
| `batch_size_training` | 1 | Long sequences, VRAM limited |
| `gradient_accumulation_steps` | 8 | Effective batch = 16 |
| `coconut` | True | Latent reasoning mode |
| `c_thought` | 1 | Continuous thoughts per step |
| `max_latent_stage` | 6 | Max Coconut training stages |
| `epochs_per_stage` | 5 | Epochs per Coconut stage |
| `num_epochs` | 10 | Total training epochs |
| `lr` | 1e-4 | Standard fine-tuning LR |

### 5.3 Distributed Training
- Framework: PyTorch FSDP (Fully Sharded Data Parallel)
- Launch: `torchrun --nproc_per_node=2 run.py`
- FSDP shards model weights/gradients/optimizer states across 2 GPUs

---

## 6. Issues Encountered & Solutions

### 6.1 GPT-2 Context Limit
- **Problem**: Default Coconut uses GPT-2 (1,024 token limit), sequences are 27k–120k tokens → immediate CUDA index error
- **Solution**: Switched base model to Llama 3.2 3B (128k context)

### 6.2 wandb Authentication
- **Problem**: `wandb login` API key rejected (copied 86 chars instead of 40)
- **Solution**: Used copy icon on wandb.ai settings page instead of manual text selection

### 6.3 HuggingFace Gated Model
- **Problem**: Llama 3.2 3B requires Meta license approval, job crashed with 401 error
- **Solution**: Requested access at huggingface.co/meta-llama/Llama-3.2-3B, added `HUGGING_FACE_HUB_TOKEN` env var to `train.sh`

### 6.4 MIG GPU Slices
- **Problem**: Job assigned to MIG node (p-gc-3005) with only 4.75 GiB per slice
- **Solution**: Changed SLURM request from `--gres=gpu:2` to `--gres=gpu:a100:2` to request full A100 nodes

### 6.5 Home Directory Storage
- **Problem**: Home directory nearly full (10/16 GB), model weights would overflow it
- **Solution**: Redirected `HF_HOME`, `TRANSFORMERS_CACHE`, `WANDB_DIR` to `/scratch/` (50TB available)

### 6.6 Tilde Path Expansion
- **Problem**: `~/scratch/...` paths in YAML not expanded by Python's `open()`
- **Solution**: Used absolute paths `/storage/home/rjf5768/scratch/...`

### 6.7 Windows Line Endings
- **Problem**: `train.sh` created on Windows had `\r\n` line endings, SLURM rejected it
- **Solution**: `sed -i 's/\r//' ~/scratch/coconut/train.sh`

### 6.8 Out of Memory (OOM)
- **Problem**: 27k token sequences fill ~38GB activation memory per GPU, exceeding A100 40GB
- **Analysis**: FSDP splits weights/gradients/optimizer states across GPUs but NOT activations
- **Solution attempted**: `model.gradient_checkpointing_enable()` — recomputes activations during backward pass, reduces per-GPU activation memory from ~30GB to ~5GB at cost of ~25% slower training

---

## 7. VRAM Estimation

| Component | Normal | With FSDP (2 GPU) | With GC + FSDP |
|---|---|---|---|
| Model weights | ~6 GB | ~3 GB/GPU | ~3 GB/GPU |
| Gradients | ~6 GB | ~3 GB/GPU | ~3 GB/GPU |
| Optimizer states | ~12 GB | ~6 GB/GPU | ~6 GB/GPU |
| Activations (27k tokens) | ~30 GB | ~30 GB/GPU | ~3-5 GB/GPU |
| **Total** | **~54 GB** | **~42 GB/GPU** | **~15 GB/GPU** |

GC = Gradient Checkpointing

---

## 8. Monitoring

- **Job status**: `squeue -u rjf5768`
- **Live logs**: `tail -f /scratch/rjf5768/coconut/logs/<jobid>.out`
- **Errors**: `cat /scratch/rjf5768/coconut/logs/<jobid>.err`
- **Past jobs**: `sacct -j <jobid> --format=JobID,State,ExitCode,Start,End`
- **wandb**: wandb.ai → project "coconut" → run "codenet-coconut-llama3b"

---

## 9. Key Commands

```bash
# Activate environment
module load anaconda && conda activate coconut

# Submit job
sbatch ~/scratch/coconut/train.sh

# Check queue
squeue -u rjf5768
squeue --start -u rjf5768

# Cancel job
scancel <jobid>

# Check GPU type on a node
scontrol show node p-gc-3001 | grep -i gres

# Fix Windows line endings
sed -i 's/\r//' ~/scratch/coconut/train.sh
```

---

## 10. Dataset Analysis — AST Deobfuscation Pipeline

### 10.1 AST Folder Structure
- Location: `ast/` — one subfolder per program (e.g. `codenet_p00002_1.obf.js.new.snapshots/`)
- Each subfolder contains 5 files: `data_1.txt.js` through `data_5.txt.js`
- Verified across 3 programs: p00002, p00006, p00010 — pattern is fully consistent

### 10.2 Deobfuscation Stages (data_1 → data_5)

The pipeline applies a fixed sequence of AST-level transforms using official technique names:

| File | Transform | Description |
|---|---|---|
| **data_1** | *(original obfuscated)* | String array encoding, hex indices, `!![]`, decoder wrapper aliases, shuffler IIFE active |
| **data_2** | `inlineObjectProps` | Inlines object property lookups used to alias decoder calls; removes alias variables |
| **data_3** | `inlineDecoderWrappers` (one per decoder) | Inlines thin wrapper functions that delegate to the main string-array decoder |
| **data_4** | `inlineDecodedStrings` + Cleanup | Executes decoder in VM sandbox; replaces all encoded call-sites with actual string values; removes string array variable, array rotator, and all decoder function definitions |
| **data_5** | Post-decode cleanup | Applies `mergeStrings`, `deadCode`, `controlFlowObject`, `controlFlowSwitch` passes; identical to data_4 for simpler programs |

### 10.3 Obfuscation Techniques Identified
1. **String array encoding** — all string literals stored in an encoded array, accessed via decoder function
2. **String array rotation** — shuffler IIFE reorders the array at runtime to prevent static analysis
3. **Decoder wrapper aliasing** — main decoder assigned to thin wrapper functions to obscure call graph (`inlineDecoderWrappers` undoes this)
4. **Object property aliasing** — decoder calls routed through object property lookups (`inlineObjectProps` undoes this)
5. **Computed property access** — `process.stdin` written as `process["stdin"]` (persists to final output)

---

## 11. Small Dataset (Pipeline Verification)

- Source: `smallprompt/` — 1,302 files with shorter prompts (~2k–5k tokens vs 27k–120k in final_dataset1)
- Selected 6 smallest files, split 4/1/1 → `small_dataset/train.json`, `val.json`, `test.json`
- Format verified with `check_format.py` — all examples have correct `question`/`steps`/`answer` fields
- Token lengths: 1,811–2,360 tokens per example (fits within Llama 3.2 3B 128k context, still too long for GPT-2)
- Purpose: verify Coconut data pipeline without sequence length issues

---

## 12. Next Steps

- [ ] Upload `small_dataset/` to cluster, update yaml paths, resubmit with Llama 3.2 3B
- [ ] Confirm gradient checkpointing + smaller sequences resolves OOM
- [ ] Monitor first successful training run on wandb
- [ ] Evaluate on test set once training completes
- [ ] Scale up dataset once pipeline is validated
- [ ] Full dataset run with all 1,301 programs
