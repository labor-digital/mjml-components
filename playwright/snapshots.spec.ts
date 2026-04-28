import { test, expect } from '@playwright/test';
import { join } from 'path';
import { readdirSync, readFileSync, existsSync } from 'fs';
import prettier from 'prettier';

test.describe('Preview Snapshots', () => {
  const previewsDir = join(process.cwd(), 'previews');
  
  // Get all HTML files from previews directory, excluding index.html
  const htmlFiles = readdirSync(previewsDir)
    .filter(file => file.endsWith('.html') && file !== 'index.html')
    .sort();

  // Generate a test for each HTML file
  for (const fileName of htmlFiles) {
    test(fileName, async ({ page }, testInfo) => {
      const filePath = join(previewsDir, fileName);
      await page.goto(`file://${filePath}`);
      await page.waitForLoadState('networkidle');
      
      const snapshotName = `${fileName.replace('.html', '')}-${testInfo.project.name}.png`;
      await expect(page).toHaveScreenshot(snapshotName, { fullPage: true });
    });
  }
});

test.describe('Validation Snapshots', () => {
  const validationDir = join(process.cwd(), 'validation-errors');

  if (!existsSync(validationDir)) {
    console.warn(`\nWarning: validation-errors/ directory not found — Validation Snapshots will be skipped. Run "npm run preview:validation" first.\n`);
  }

  const jsonFiles = existsSync(validationDir)
    ? readdirSync(validationDir).filter(file => file.endsWith('.json')).sort()
    : [];

  for (const fileName of jsonFiles) {
    test(fileName, ({}, testInfo) => {
      // Validation output is not browser-based — skip the redundant project
      test.skip(testInfo.project.name !== 'chromium-lg');
      const content = readFileSync(join(validationDir, fileName), 'utf8');
      expect(content).toMatchSnapshot(fileName);
    });
  }
});

test.describe('HTML Snapshots', () => {
  const previewsDir = join(process.cwd(), 'previews');

  const htmlFiles = readdirSync(previewsDir)
    .filter(file => file.endsWith('.html') && file !== 'index.html')
    .sort();

  for (const fileName of htmlFiles) {
    test(fileName, async ({ page }, testInfo) => {
      // HTML content is viewport-independent — no need to run on both projects
      test.skip(testInfo.project.name !== 'chromium-lg');
      const filePath = join(previewsDir, fileName);
      await page.goto(`file://${filePath}`);
      await page.waitForLoadState('networkidle');

      const html = await page.content();
      // prettier normalizes whitespace so insignificant formatting differences don't cause false failures
      const normalized = await prettier.format(html, { parser: 'html', printWidth: 120 });
      expect(normalized).toMatchSnapshot(fileName);
    });
  }
});
