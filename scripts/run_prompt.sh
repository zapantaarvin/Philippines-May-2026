#!/bin/bash

set -e

ENV_NAME="prompt-workspace"

if [ "$#" -lt 2 ]; then
  echo "Usage: bash scripts/run_prompt.sh <template> <request-file>"
  echo "Example: bash scripts/run_prompt.sh website_update requests/website/sample_website_change.md"
  exit 1
fi

if command -v conda >/dev/null 2>&1; then
  if conda env list | awk '{print $1}' | grep -qx "$ENV_NAME"; then
    conda run -n "$ENV_NAME" python scripts/run_prompt.py "$1" --request-file "$2"
    exit 0
  fi
fi

python3 scripts/run_prompt.py "$1" --request-file "$2"
