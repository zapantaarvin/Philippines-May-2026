# Prompt Workspace Starter

This is a beginner-friendly workspace for:

- saving reusable prompts
- keeping project context in one place
- generating a clean prompt file when you need to work on your site
- tracking changes with Git and GitHub

## Folder structure

- `prompts/`: reusable prompt templates
- `context/`: notes about your website, brand, pages, stack, and goals
- `requests/`: one-off tasks you want done
- `outputs/`: generated prompt files
- `scripts/`: small helpers you can run from Terminal
- `notebooks/`: optional notebook workflow

## Quick start

Open Terminal and run:

```bash
cd /Users/arvinzapanta/Documents/Codex/2026-04-18-i-need-you-to-help-me
python3 scripts/run_prompt.py website_update --request-file requests/sample_website_change.md
```

That will generate a prompt file inside `outputs/`.

## How to use this

### 1. Update your website context once

Edit:

- `context/project_context.md`

Put in things like:

- what your website does
- your brand voice
- pages you have
- colors and style
- tech stack if you know it
- links to assets or copy

### 2. Add a task request

Create or edit a file in:

- `requests/`

Example requests:

- "Change the hero headline"
- "Add a pricing section"
- "Update the contact page"
- "Make the mobile menu cleaner"

### 3. Generate a ready-to-use prompt

Run:

```bash
python3 scripts/run_prompt.py website_update --request-file requests/sample_website_change.md
```

Or with plain text:

```bash
python3 scripts/run_prompt.py website_update --request "Update the homepage hero and make the CTA stronger."
```

### 4. Use the generated prompt

Open the newest file in `outputs/` and paste it into ChatGPT or use it as your working brief.

## Beginner Git workflow

If you want this connected to GitHub:

```bash
cd /Users/arvinzapanta/Documents/Codex/2026-04-18-i-need-you-to-help-me
git init
git add .
git commit -m "Initial prompt workspace"
```

Then create an empty GitHub repo under your account and connect it:

```bash
git remote add origin https://github.com/zapantaarvin/prompt-workspace.git
git branch -M main
git push -u origin main
```

## Suggested workflow for website updates

1. Keep the lasting facts about your website in `context/project_context.md`.
2. Write each new task in `requests/`.
3. Generate a prompt.
4. Use that prompt to make the change.
5. Save your edits with Git so you can go back if needed.

## When you are ready

We can also turn this into:

- a real website repo connected to GitHub
- a prompt library for different tasks
- a notebook that stores your favorite prompt runs
- a one-command script that opens your project and runs checks
