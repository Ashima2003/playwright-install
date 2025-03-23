import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.asyncapi.com/en');
  await page.getByTestId('Navbar-main').click();
  await page.getByTestId('Navbar-main').getByRole('link', { name: 'Community' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTestId('AnnouncementHero-main-div').getByTestId('Button-link').click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByTestId('Hero-first').getByTestId('Button-link').click();
  const page2 = await page2Promise;
  await page2.getByRole('link', { name: 'GSOC 2025 Java + Quarkus' }).click();
  await page2.getByRole('link', { name: 'GSOC 2025 Java + Quarkus' }).click();
});