Project guidelines:

- use pnpm for the package manager
- when installing new packages, use 'pnpm add' instead of manually editing the package.json file
- use modern react and nextjs patterns and primitives
- avoid 'as any' at all costs, try to infer types from functions as much as possible
- use tailwindcss for styling whenever possible, only resort to custom css if needed
- I am on windows so use powershell 5 for commands
- run 'pnpm lint' to check for linting errors, 'pnpm format', and 'pnpm check' to check for errors after making changes
- **when writing ANY UI/component/page code, you MUST first read `DESIGN_RULES.md`** in the project root and follow every rule in it. This is non-negotiable and applies to all design and redesign tasks. and finally verify it using `DESIGN_CHECKLIST.md`

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
