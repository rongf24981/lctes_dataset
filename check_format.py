"""
Check that dataset files are correctly formatted for Coconut.
Does not require GPU or model loading.
"""
import json
import os

def check_dataset(path):
    print(f"\n=== {path} ===")
    if not os.path.exists(path):
        print("  ERROR: file not found")
        return

    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    if not isinstance(data, list):
        print(f"  ERROR: expected list, got {type(data)}")
        return

    print(f"  Total examples: {len(data)}")

    for i, ex in enumerate(data):
        errors = []

        # Check required keys
        for key in ['question', 'answer', 'steps']:
            if key not in ex:
                errors.append(f"missing key '{key}'")

        if 'question' in ex:
            if not isinstance(ex['question'], str) or len(ex['question']) == 0:
                errors.append("'question' is empty or not a string")

        if 'answer' in ex:
            if not isinstance(ex['answer'], str) or len(ex['answer']) == 0:
                errors.append("'answer' is empty or not a string")

        if 'steps' in ex:
            if not isinstance(ex['steps'], list):
                errors.append("'steps' is not a list")
            elif len(ex['steps']) == 0:
                errors.append("'steps' is empty")
            else:
                for j, step in enumerate(ex['steps']):
                    if not isinstance(step, str) or len(step) == 0:
                        errors.append(f"step[{j}] is empty or not a string")

        if errors:
            print(f"  ex{i}: FAILED — {', '.join(errors)}")
        else:
            n_steps = len(ex['steps'])
            print(f"  ex{i}: OK — {n_steps} steps, question={len(ex['question'])} chars, answer={len(ex['answer'])} chars")

    print(f"  Format check complete.")

check_dataset('small_dataset/train.json')
check_dataset('small_dataset/val.json')
check_dataset('small_dataset/test.json')
