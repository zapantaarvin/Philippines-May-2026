# Project Workspace Starter

This is a beginner-friendly workspace for:

- saving reusable prompts
- planning your Philippines May 2026 trip
- keeping website context in one place
- generating clean prompts when you want to update a site
- tracking changes with Git and GitHub

## Folder structure

- `prompts/`: reusable prompt templates
- `context/website/`: lasting notes about your website
- `context/trip/`: lasting notes for your trip planning
- `requests/website/`: one-off website tasks
- `requests/trip/`: one-off trip tasks
- `outputs/`: generated prompt files
- `scripts/`: small helpers you can run from Terminal
- `notebooks/`: optional notebook workflow

## Quick start

Open Terminal and run:

```bash
cd /Users/arvinzapanta/Documents/Codex/2026-04-18-i-need-you-to-help-me
bash scripts/run_prompt.sh website_update requests/website/sample_website_change.md
```

That will generate a prompt file inside `outputs/`.

## Main ways to use this

### 1. Trip planning

Use this when you want help with:

- itinerary planning
- budget breakdowns
- dress codes
- restaurant comparisons
- cleanup of your activity list

Run:

```bash
bash scripts/run_prompt.sh trip_planner requests/trip/sample_trip_cleanup.md
```

### 2. Website updates

Use this when you want help with:

- homepage updates
- copy changes
- section redesign ideas
- new feature planning
- content refreshes

Run:

```bash
bash scripts/run_prompt.sh website_update requests/website/sample_website_change.md
```

### 3. Future website work

Later, when you have a real website codebase, you can keep this same repo for:

- notes and prompts only
- or prompts plus the website code itself

If you want, we can reorganize it either way.

## How to use the prompt system

### 1. Update your website context once

Edit:

- `context/website/project_context.md`

Put in things like:

- what your website does
- your brand voice
- pages you have
- colors and style
- tech stack if you know it
- links to assets or copy

### 2. Add a task request

Create or edit a file in:

- `requests/website/`

Example requests:

- "Change the hero headline"
- "Add a pricing section"
- "Update the contact page"
- "Make the mobile menu cleaner"

### 3. Generate a ready-to-use prompt

Run:

```bash
bash scripts/run_prompt.sh website_update requests/website/sample_website_change.md
```

Or with plain text:

```bash
python3 scripts/run_prompt.py website_update --request "Update the homepage hero and make the CTA stronger."
```

### 4. Use the generated prompt

Open the newest file in `outputs/` and paste it into ChatGPT or use it as your working brief.

## Beginner Git workflow

This repo is already connected to GitHub, so your normal flow is:

```bash
cd /Users/arvinzapanta/Documents/Codex/2026-04-18-i-need-you-to-help-me
git status
git add .
git commit -m "Describe what changed"
git push
```

## Suggested workflow for website updates

1. Keep the lasting facts about your website in `context/website/project_context.md`.
2. Write each new task in `requests/website/`.
3. Generate a prompt.
4. Use that prompt to make the change.
5. Save your edits with Git so you can go back if needed.

## Suggested workflow for trip planning

1. Keep your fixed trip notes in `context/trip/trip_context.md`.
2. Put each itinerary question or change request in `requests/trip/`.
3. Generate a trip-planning prompt.
4. Refine the plan until the schedule feels realistic.
5. Save the updates with Git.

## Beginner Terminal cheat sheet

- `pwd` shows your current folder
- `ls` shows files in the current folder
- `cd folder-name` moves into a folder
- `cd ..` goes up one level
- `open .` opens the current folder in Finder
- `python3 file.py` runs a Python file
- `bash file.sh` runs a shell script
- `git status` shows changed files
- `git add .` stages files
- `git commit -m "message"` saves a checkpoint
- `git push` uploads to GitHub

## One-command shortcuts

Website prompt:

```bash
cd /Users/arvinzapanta/Documents/Codex/2026-04-18-i-need-you-to-help-me
bash scripts/run_prompt.sh website_update requests/website/sample_website_change.md
```

Trip prompt:

```bash
cd /Users/arvinzapanta/Documents/Codex/2026-04-18-i-need-you-to-help-me
bash scripts/run_prompt.sh trip_planner requests/trip/sample_trip_cleanup.md
```

## When you are ready

We can also turn this into:

- a cleaner repo with your real website code
- a better prompt library for different tasks
- a notebook that stores your favorite prompt runs
- a one-command script for website work and checks
