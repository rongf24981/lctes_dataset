"""
Randomly select 100 programs from final_final/, split 60/20/20,
and generate matching oneshot_dataset_100/ at the same time.
"""

import os
import json
import random

SEED        = 42
FINAL_DIR   = "final_final"
AST_DIR     = "ast"
OUT_COCONUT = "final_final_ready_100"
OUT_ONESHOT = "oneshot_dataset_100"

SYSTEM_PROMPT = """\
## JavaScript Deobfuscation

You are a JavaScript reverse-engineering model.
You will be given a fully obfuscated JavaScript program.
Your task is to produce the fully deobfuscated, clean version.

### Requirements
- Preserve exact runtime semantics (no behavioral changes)
- Remove all obfuscation: string encoding, hex literals, boolean obfuscation (!![]),
  alias variables, decoder functions, shuffler IIFEs, computed property access
- Output only the transformed JavaScript code
- No prose, no markers, no comments

### Training Input
"""

# ── helpers ──────────────────────────────────────────────────────────────────

def read_file(path):
    with open(path, encoding="utf-8") as f:
        return f.read()

def write_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

# ── select & split ────────────────────────────────────────────────────────────

all_files = sorted([f for f in os.listdir(FINAL_DIR) if f.endswith(".json")])

# select the 100 smallest files by size
sizes = [(f, os.path.getsize(os.path.join(FINAL_DIR, f))) for f in all_files]
sizes.sort(key=lambda x: x[1])
selected = [f for f, _ in sizes[:100]]
print(f"Largest of 100 smallest: {sizes[99][0]} = {sizes[99][1]/1024:.1f} KB")

random.seed(SEED)
random.shuffle(selected)

train = selected[:60]
val   = selected[60:80]
test  = selected[80:100]

print(f"Total available: {len(all_files)}")
print(f"Selected 100  ->  train={len(train)}  val={len(val)}  test={len(test)}")

# ── write Coconut dataset ─────────────────────────────────────────────────────

os.makedirs(OUT_COCONUT, exist_ok=True)

for split_name, split_files in [("train", train), ("val", val), ("test", test)]:
    combined = []
    for fname in split_files:
        with open(os.path.join(FINAL_DIR, fname), encoding="utf-8") as f:
            combined.extend(json.load(f))
    out_path = os.path.join(OUT_COCONUT, f"{split_name}.json")
    write_json(out_path, combined)
    size_kb = os.path.getsize(out_path) // 1024
    print(f"  coconut {split_name}.json : {len(combined)} examples  ({size_kb} KB)")

# ── write one-shot dataset ────────────────────────────────────────────────────

os.makedirs(OUT_ONESHOT, exist_ok=True)

def make_oneshot(fname):
    program_id = fname.replace(".json", "")
    snapshot_dir = os.path.join(AST_DIR, f"{program_id}.obf.js.new.snapshots")
    obfuscated = read_file(os.path.join(snapshot_dir, "data_1.txt.js"))
    clean      = read_file(os.path.join(snapshot_dir, "data_5.txt.js"))
    return {
        "question": SYSTEM_PROMPT + obfuscated,
        "answer":   clean,
        "steps":    [],
        "idx_to_symbol": [], "edges": [], "root": 0, "target": 0, "neg_target": 0,
    }

for split_name, split_files in [("train", train), ("val", val), ("test", test)]:
    examples = []
    missing  = []
    for fname in split_files:
        try:
            examples.append(make_oneshot(fname))
        except FileNotFoundError:
            missing.append(fname)
    out_path = os.path.join(OUT_ONESHOT, f"{split_name}.json")
    write_json(out_path, examples)
    size_kb = os.path.getsize(out_path) // 1024
    print(f"  oneshot  {split_name}.json : {len(examples)} examples  ({size_kb} KB)")
    if missing:
        print(f"    WARNING missing AST files: {missing}")

# ── record which files went where ─────────────────────────────────────────────

with open(os.path.join(OUT_COCONUT, "files.md"), "w", encoding="utf-8") as f:
    f.write("# final_final_ready_100 — file split\n\n")
    for split_name, split_files in [("train (60)", train), ("val (20)", val), ("test (20)", test)]:
        f.write(f"## {split_name}\n")
        for fn in split_files:
            f.write(f"- {fn}\n")
        f.write("\n")

print("\nDone. files.md written to", OUT_COCONUT)
