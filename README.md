# CI/CD with GitHub Actions

An end-to-end practical demonstration of Continuous Integration, Continuous Delivery, automated code quality checks, dependency vulnerability scanning, and repository bot automation built with GitHub Actions.

---

## Architecture Overview

This repository demonstrates five core automated DevOps capabilities:

1. **Continuous Integration (CI)**
   - Automatically executes the unit test suite on every pull request and push to the `main` branch.
   - Built using Node.js native test runner (`node:test` and `node:assert`).

2. **Code Quality Enforcement**
   - Runs ESLint across all source and test files to detect syntax issues, unused variables, and styling discrepancies before code can be merged.

3. **Dependency Management & Security**
   - Automatically audits package dependencies on every pull request using `npm audit`.
   - Automated weekly scanning and dependency update pull requests configured via Dependabot (`.github/dependabot.yml`).

4. **Continuous Deployment (CD)**
   - Automatically publishes the application in `public/` to GitHub Pages whenever changes pass all checks and are merged into `main`.

5. **Event Automation (Issue Bot)**
   - Automatically detects when a new issue is opened and replies with a personalized comment thanking the author and confirming receipt.

---

## Project Structure

```text
github-actions-cicd-demo/
|-- .github/
|   |-- dependabot.yml              # Dependabot configuration for npm and Actions
|   `-- workflows/
|       |-- ci-cd.yml               # CI tests, linting, auditing, and Pages deployment
|       `-- issue-greeter.yml       # Issue event bot automation
|-- public/
|   `-- index.html                  # Production web application
|-- src/
|   `-- calculator.js               # Core application logic
|-- tests/
|   `-- calculator.test.js          # Unit tests
|-- .gitignore                      # Git ignored files and directories
|-- eslint.config.mjs               # ESLint configuration
|-- package.json                    # Project configuration and npm scripts
|-- package-lock.json               # Locked dependency tree
`-- README.md                       # Project documentation
```

---

## Local Development and Verification

### Prerequisites

- Node.js (v20 LTS or higher recommended)
- npm (v10 or higher)

### Setup

```bash
git clone https://github.com/Chiranth-Janardhan-moger/github-actions-cicd-demo.git
cd github-actions-cicd-demo
npm ci
```

### Available Scripts

Run unit tests:
```bash
npm test
```

Run code quality linter:
```bash
npm run lint
```

Run dependency security audit:
```bash
npm run audit
```

---

## Educational Walkthrough: Learning by Breaking

To demonstrate the power of CI/CD to a learner:

### Exercise 1: Triggering the Happy Path (Green Checkmark)
1. Make a minor modification to `public/index.html` (e.g., update header text).
2. Commit and push directly to `main` (or via PR).
3. Navigate to the GitHub **Actions** tab to observe the pipeline steps turn green sequentially.
4. Visit the live GitHub Pages URL to verify the change appears without manual deployment.

### Exercise 2: Catching a Broken Unit Test (Red Cross)
1. Create a feature branch:
   ```bash
   git checkout -b break-test
   ```
2. Edit `src/calculator.js` to introduce an intentional arithmetic bug:
   ```javascript
   function add(a, b) {
     return a - b; // Bug: subtracted instead of added
   }
   ```
3. Commit and push the branch, then open a Pull Request on GitHub.
4. Observe the CI job fail. The test step stops the pipeline and blocks merging into `main`.

### Exercise 3: Catching a Code Quality Error (Linter Failure)
1. Add an unused variable or missing semicolon in `src/calculator.js`:
   ```javascript
   const unusedVariable = 42;
   ```
2. Push to the branch.
3. Observe ESLint flag `no-unused-vars` and fail the build before tests even run.

### Exercise 4: Testing the Issue Bot
1. Navigate to the **Issues** tab on GitHub.
2. Click **New issue**, give it a title, and submit it.
3. Within 10 to 15 seconds, GitHub Actions executes `issue-greeter.yml` and posts an automated reply.

---

## License

This project is open-source and available under the MIT License.
