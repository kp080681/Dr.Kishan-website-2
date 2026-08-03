const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "qa-screenshots", "pass-home");
fs.mkdirSync(outDir, { recursive: true });

const widths = [1440, 1280, 1100, 1024, 900, 768, 430, 390, 375, 320];
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

(async () => {
  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PLAYWRIGHT_CHANNEL || "chrome",
  });
  const context = await browser.newContext({ deviceScaleFactor: 1 });
  const page = await context.newPage();

  const results = [];

  for (const w of widths) {
    const h = w <= 430 ? 844 : 900;
    await page.setViewportSize({ width: w, height: h });
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(600);

    const headerCheck = await page.evaluate(() => {
      const lockup = document.querySelector("header a[href='/#home']");
      const role = lockup?.querySelector("span span:last-child, span > span:nth-child(2)") ||
        Array.from(lockup?.querySelectorAll("span") || []).find((el) =>
          (el.textContent || "").includes("General, Laparoscopic"),
        );
      const roleEl = Array.from(document.querySelectorAll("header span")).find((el) =>
        (el.textContent || "").trim() === "General, Laparoscopic & LASER Surgeon",
      );
      if (!roleEl) return { ok: false, reason: "descriptor not found" };
      const style = getComputedStyle(roleEl);
      const truncated =
        style.textOverflow === "ellipsis" ||
        roleEl.scrollWidth > roleEl.clientWidth + 1;
      return {
        ok: !truncated && style.textOverflow !== "ellipsis",
        text: roleEl.textContent,
        textOverflow: style.textOverflow,
        scrollWidth: roleEl.scrollWidth,
        clientWidth: roleEl.clientWidth,
        overflowX: document.documentElement.scrollWidth > window.innerWidth + 1,
      };
    });

    const darkCta = await page.evaluate(() => {
      const h = document.querySelector("#cta-heading");
      if (!h) return { ok: false };
      const c = getComputedStyle(h).color;
      return { ok: true, color: c, text: h.textContent };
    });

    const wa = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="wa.me"]'));
      return links.map((a) => ({
        label: (a.textContent || "").replace(/\s+/g, " ").trim(),
        hasSvg: Boolean(a.querySelector("svg")),
      }));
    });

    const file = path.join(outDir, `home-${w}.png`);
    await page.screenshot({ path: file, fullPage: false });
    results.push({ width: w, headerCheck, darkCta, whatsapp: wa, screenshot: file });
  }

  // zoom checks at 1280
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const zoom of [1.25, 1.5]) {
    await page.evaluate((z) => {
      document.body.style.zoom = String(z);
    }, zoom);
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(400);
    const file = path.join(outDir, `home-1280-zoom-${Math.round(zoom * 100)}.png`);
    await page.screenshot({ path: file, fullPage: false });
    await page.evaluate(() => {
      document.body.style.zoom = "1";
    });
  }

  // mobile menu at 390
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.click('button[aria-controls="mobile-nav"]');
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(outDir, "home-390-menu-open.png"), fullPage: false });

  // dark CTA section
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.locator("#cta-heading").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, "dark-cta-1440.png"), fullPage: false });

  // blogs
  await page.goto(`${baseUrl}/blogs`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.screenshot({ path: path.join(outDir, "blogs-index-1440.png"), fullPage: false });

  // redirect check
  const redirect = await page.goto(
    `${baseUrl}/post/Understanding-Hernias-Causes-Symptoms-and-Treatment-Options`,
    { waitUntil: "domcontentloaded", timeout: 60000 },
  );
  const redirectUrl = page.url();

  fs.writeFileSync(path.join(outDir, "qa-report.json"), JSON.stringify({ results, redirectUrl, redirectStatus: redirect?.status() }, null, 2));
  console.log(JSON.stringify({ results: results.map((r) => ({ w: r.width, header: r.headerCheck, dark: r.darkCta, waCount: r.whatsapp.length, waMissingIcon: r.whatsapp.filter((x) => !x.hasSvg) })), redirectUrl }, null, 2));
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
