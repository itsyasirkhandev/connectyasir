Project guidelines:

- use pnpm for the package manager
- when installing new packages, use 'pnpm add' instead of manually editing the package.json file
- use modern react and nextjs patterns and primitives
- avoid 'as any' at all costs, try to infer types from functions as much as possible
- use tailwindcss for styling whenever possible, only resort to custom css if needed
- I am on windows so use powershell 5 for commands
- run 'pnpm lint' to check for linting errors, 'pnpm format', and 'pnpm check' to check for errors after making changes

## UI Rules

For all UI work, read `DESIGN_RULES.md` and validate with `DESIGN_CHECKLIST.md`.

Before coding, define: primary goal, primary action, focal point, and layout.

Avoid generic/template-like/AI-looking UI. Prefer intentional hierarchy, restraint, spacing, semantic tokens, accessibility, and required states (empty/loading/error/validation).

If it feels generic, over-carded, over-decorated, or default-symmetrical, revise it.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
