import { chromium } from '@playwright/test'
import fs from 'fs'

const execPath = chromium.executablePath()
if (!fs.existsSync(execPath)) {
  console.error('\nChromium is not installed. Run: npx playwright install chromium\n')
  process.exit(1)
}
