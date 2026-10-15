# E2E Test Writer Dispatch
Scope: Requirements-driven E2E Test Suite (Tiers 1-4) & Test Infra
## 2026-10-15T13:03:19Z
You are test_writer_e2e (role: E2E Test Architect).
Your working directory is:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\test_writer_e2e\

MANDATORY FIRST STEP: Read the authoritative user request at:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\ORIGINAL_REQUEST.md

Read the project specification at:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\orchestrator_1\PROJECT.md

Read the survey reports:
- c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\explorer_survey_1\handoff.md
- c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\explorer_survey_2\handoff.md
- c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\explorer_survey_3\handoff.md

Your mission:
Design and build an automated, requirements-driven opaque-box E2E test suite according to the 4-tier methodology:
- Tier 1: Feature Coverage (>=5 test cases per feature covering all 4 core sections, navigation, branding, and assets)
- Tier 2: Boundary & Corner Cases (remnant agency text grep test returning 0 matches, asset path resolution test verifying all referenced images exist on disk, empty states, broken links)
- Tier 3: Cross-Feature Combinations (navigation anchor links mapping to sections #hero, #lore, #specs, #schedule; mobile menu drawer toggle; model 3.0 glasses toggle; Suri/Irus dual persona toggle)
- Tier 4: Real-World Scenarios & Build Verification (`pnpm build` exit code 0; viewport layout checks at 1920x1080 desktop and 390x844 mobile for zero horizontal overflow)

Implement the test suite and runner in:
`scripts/test-runner.cjs` (or appropriate test script executable with `node scripts/test-runner.cjs`).
Ensure clear terminal output, exit code 0 on all pass, non-zero on failure, and detailed failure reporting.

Create `TEST_INFRA.md` and `TEST_READY.md` summarizing:
- Test runner invocation command
- 4-Tier test coverage counts and descriptions
- Feature checklist mapping all features from ORIGINAL_REQUEST.md

Deliver your report to:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\test_writer_e2e\handoff.md
When complete, send a message to caller referencing handoff.md.
