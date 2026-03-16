"""
Generate one-shot fine-tuning dataset for comparison against Coconut.
Same 20 programs and same 12/4/4 split as final_final_ready.
question = system prompt + fully obfuscated code (data_1)
answer   = fully clean code (data_5)
steps    = [] (no intermediate steps)
"""

import os
import json

# Same 20 programs and same split order as final_final_ready
TRAIN = [
    "codenet_p00018_1",
    "codenet_p02859_1",
    "codenet_p00020_1",
    "codenet_p02327_1",
    "codenet_p00046_1",
    "codenet_p02552_1",
    "codenet_p00271_1",
    "codenet_p00375_1",
    "codenet_p00050_1",
    "codenet_p00387_1",
    "codenet_p02137_1",
    "codenet_p02969_1",
]
VAL = [
    "codenet_p02723_1",
    "codenet_p03473_1",
    "codenet_p03533_1",
    "codenet_p00330_1",
]
TEST = [
    "codenet_p03643_1",
    "codenet_p00376_1",
    "codenet_p03737_1",
    "codenet_p02786_1",
]

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

AST_DIR = "ast"
OUT_DIR = "oneshot_dataset"


def read_file(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def make_example(program_id):
    snapshot_dir = os.path.join(AST_DIR, f"{program_id}.obf.js.new.snapshots")
    obfuscated = read_file(os.path.join(snapshot_dir, "data_1.txt.js"))
    clean      = read_file(os.path.join(snapshot_dir, "data_5.txt.js"))

    question = SYSTEM_PROMPT + obfuscated
    answer   = clean

    return {
        "question": question,
        "answer": answer,
        "steps": [],
        "idx_to_symbol": [],
        "edges": [],
        "root": 0,
        "target": 0,
        "neg_target": 0,
    }


def write_split(name, programs):
    examples = []
    for pid in programs:
        try:
            examples.append(make_example(pid))
        except FileNotFoundError as e:
            print(f"  WARNING: {e}")

    os.makedirs(OUT_DIR, exist_ok=True)
    out_path = os.path.join(OUT_DIR, f"{name}.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(examples, f, indent=4, ensure_ascii=False)
    print(f"{name}.json: {len(examples)} examples written to {out_path}")


if __name__ == "__main__":
    write_split("train", TRAIN)
    write_split("val",   VAL)
    write_split("test",  TEST)
    print("Done.")
