from __future__ import annotations

import argparse
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PROMPTS_DIR = ROOT / "prompts"
CONTEXT_FILE = ROOT / "context" / "project_context.md"
OUTPUTS_DIR = ROOT / "outputs"


def read_text(path: Path) -> str:
    if not path.exists():
        return ""
    return path.read_text(encoding="utf-8").strip()


def build_prompt(template_name: str, request_text: str) -> str:
    template_path = PROMPTS_DIR / f"{template_name}.md"
    template_text = read_text(template_path)
    context_text = read_text(CONTEXT_FILE)

    if not template_text:
        raise FileNotFoundError(f"Prompt template not found: {template_path}")

    if not request_text.strip():
        raise ValueError("Request text is empty.")

    return f"""# Generated Prompt

## Template

{template_name}

## Instructions

{template_text}

## Project Context

{context_text or "No project context added yet."}

## Current Request

{request_text.strip()}
"""


def save_output(prompt_text: str) -> Path:
    OUTPUTS_DIR.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_path = OUTPUTS_DIR / f"generated_{timestamp}.md"
    output_path.write_text(prompt_text, encoding="utf-8")
    return output_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate a reusable website prompt.")
    parser.add_argument(
        "template",
        help="Prompt template name, like website_update, feature_brief, or content_refresh.",
    )
    parser.add_argument("--request", help="Task request as plain text.")
    parser.add_argument("--request-file", help="Path to a markdown file containing the request.")
    args = parser.parse_args()

    request_text = ""
    if args.request:
        request_text = args.request
    elif args.request_file:
        request_text = read_text(Path(args.request_file))

    prompt_text = build_prompt(args.template, request_text)
    output_path = save_output(prompt_text)
    print(f"Generated prompt: {output_path}")


if __name__ == "__main__":
    main()
