#!/bin/bash

set -e

if [ "$#" -lt 2 ]; then
  echo "Usage: bash scripts/run_prompt.sh <template> <request-file>"
  echo "Example: bash scripts/run_prompt.sh website_update requests/website/sample_website_change.md"
  exit 1
fi

python3 scripts/run_prompt.py "$1" --request-file "$2"
