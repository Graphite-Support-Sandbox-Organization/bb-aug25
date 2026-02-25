# Putting up pull requests for review
Unless explicitly asked otherwise, use the 'gt' CLI for interacting with PRs and create stacks. Stacks are easier to review because each PR is smaller and logically focused.
Instead of 'git commit', use 'gt create. This will create a commit and a branch with the current changes.
Instead of 'git push, use gt submit —no-interactive. This will submit the current branch & all downstack branches to Graphite.

Before writing any code, present the user with the structure of the stack that you intend to submit and ask for confirmation before proceeding.
