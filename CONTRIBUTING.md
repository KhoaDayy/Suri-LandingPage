# Contributing to Suri Mukeki Showcase

Thank you for your interest in contributing to the **Suri Mukeki VTuber Showcase Landing Page**!

## Code of Conduct

Please be respectful, collaborative, and considerate when interacting with contributors, maintainers, and community members.

## Development Workflow

1. **Fork and Clone**
   ```bash
   git clone https://github.com/<your-username>/Suri-LandingPage.git
   cd Suri-LandingPage
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

4. **Run the Development Server**
   ```bash
   pnpm dev
   ```

5. **Run Quality & Verification Checks**
   Ensure all tests pass and TypeScript emits no errors before submitting:
   ```bash
   # Run full 4-tier automated test suite (55 tests)
   npm test

   # Run TypeScript compilation check
   npx tsc --noEmit

   # Verify production build
   pnpm build
   ```

6. **Commit with Conventional Commits**
   Follow conventional commit conventions:
   - `feat(...)`: New user-facing features
   - `fix(...)`: Bug fixes
   - `refactor(...)`: Code refactoring without behavioral change
   - `docs(...)`: Documentation changes
   - `test(...)`: Adding or modifying tests
   - `chore(...)`: Tooling, configuration, or dependency updates

7. **Submit a Pull Request**
   Open a pull request targeting the `master` branch with a clear description of your changes and reference any related issues.

## Testing Guidelines

The test suite is located in `scripts/test-runner.cjs`. All UI assertions must be verifiable against visible DOM elements or canonical data contracts in `src/data/suriData.ts`. Deceptive test-spoofing elements (such as `div.hidden`) are strictly prohibited.
