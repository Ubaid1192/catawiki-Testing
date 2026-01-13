# Catawiki Testing

End-to-end testing framework for Catawiki using Playwright with Page Object Model (POM) pattern.

## Overview

This project contains automated UI tests for the Catawiki platform, covering key user flows including login, product filtering, and shortlist functionality.

## Technologies

- **Playwright** - Modern end-to-end testing framework
- **playwright-extra** - Extended Playwright with additional plugins
- **playwright-extra-plugin-stealth** - Stealth plugin to avoid detection
- **Node.js** - JavaScript runtime (ES modules)

## Project Structure

```
catawiki-Testing/
├── Pages/              # Page Object Model classes
│   ├── Login.js        # Login page interactions
│   ├── filter.js       # Filter page interactions
│   └── shortlist.js    # Shortlist page interactions
├── UI/                 # Test specifications
│   ├── Login.spec.js   # Login tests
│   ├── filter.spec.js  # Filter tests
│   └── shortlist.spec.js # Shortlist tests
├── support/            # Helper utilities
│   └── credentials.helper.js # Credentials loader
├── fixtures/           # Test data
│   └── credentials.json # User credentials (not in repo)
├── playwright.config.js # Playwright configuration
└── package.json        # Project dependencies
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd catawiki-Testing
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Configuration

### Credentials Setup

Create a `credentials.json` file in the `fixtures/` directory with the following structure:

```json
[
  {
    "email": "your-email@example.com",
    "password": "your-password"
  }
]
```

**Important:** The `credentials.json` file should be added to `.gitignore` to avoid committing sensitive information.

## Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run tests in headed mode (visible browser):
Edit `playwright.config.js` and set `headless: false` in the `use` section.

### Run a specific test file:
```bash
npx playwright test UI/Login.spec.js
```

### Run tests in debug mode:
```bash
npx playwright test --debug
```

### View test report:
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Test Configuration

The project is configured in `playwright.config.js` with the following settings:

- **Test Directory:** `./UI`
- **Timeout:** 120 seconds
- **Headless Mode:** Enabled by default
- **Parallel Execution:** Enabled
- **Retries:** Disabled (0)
- **Reporter:** HTML reporter
- **Browser:** Chromium (Desktop Chrome)

## Page Object Model

The project follows the Page Object Model pattern, where each page has its own class in the `Pages/` directory:

- **Login.js** - Handles login page interactions including cookie handling, email/password input, and sign-in
- **filter.js** - Manages product filtering functionality
- **shortlist.js** - Handles shortlist operations

## Test Coverage

Current test scenarios include:

1. **Login Tests** (`UI/Login.spec.js`)
   - User login functionality

2. **Filter Tests** (`UI/filter.spec.js`)
   - Product category selection
   - Sub-category navigation
   - Price filter application

3. **Shortlist Tests** (`UI/shortlist.spec.js`)
   - Shortlist functionality

## Notes

- Tests use stealth mode to avoid bot detection
- Cookie consent dialogs are automatically handled
- Slow typing is implemented for form inputs to mimic human behavior
- Network idle state is waited for after key actions

## Troubleshooting

### Tests fail with timeout errors:
- Increase the timeout in `playwright.config.js`
- Check network connectivity
- Verify the Catawiki website is accessible

### Credentials not loading:
- Ensure `fixtures/credentials.json` exists and has valid JSON structure
- Check file path and permissions

### Browser not found:
- Run `npx playwright install` to install required browsers

## License

ISC

