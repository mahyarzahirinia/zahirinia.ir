import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Mohammad Zahirinia portfolio shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Mohammad Zahirinia/i);
  assert.match(html, /Senior Frontend Engineer/i);
  assert.match(html, /View Projects/i);
  assert.match(html, /Download Resume/i);
  assert.match(html, /Enterprise UI/i);
  assert.match(html, /Customized TipTap Editor/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Building your site/i);
});

test("keeps resume content centralized in the data file", async () => {
  const [data, page, app, hero, skills, experience, projects, spec, workflow] =
    await Promise.all([
      readFile(new URL("../src/data/resume.ts", import.meta.url), "utf8"),
      readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
      readFile(
        new URL("../src/components/ResumeApp.tsx", import.meta.url),
        "utf8",
      ),
      readFile(
        new URL("../src/components/sections/HeroSection.tsx", import.meta.url),
        "utf8",
      ),
      readFile(
        new URL("../src/components/sections/SkillsSection.tsx", import.meta.url),
        "utf8",
      ),
      readFile(
        new URL(
          "../src/components/sections/ExperienceSection.tsx",
          import.meta.url,
        ),
        "utf8",
      ),
      readFile(
        new URL(
          "../src/components/sections/ProjectsSection.tsx",
          import.meta.url,
        ),
        "utf8",
      ),
      readFile(new URL("../SPEC.md", import.meta.url), "utf8"),
      readFile(
        new URL("../.github/workflows/pages.yml", import.meta.url),
        "utf8",
      ),
    ]);

  assert.match(data, /export const resume/);
  assert.match(data, /export const resumes/);
  assert.match(data, /zahiriniamahyar@gmail\.com/);
  assert.match(data, /customized-tiptap-editor/);
  assert.match(data, /فارسی/);
  assert.match(page, /<ResumeApp \/>/);
  assert.match(app, /setLocale/);
  assert.match(app, /document\.documentElement\.dir/);
  assert.match(hero, /resumeData\.personal/);
  assert.match(skills, /resumeData\.skillGroups/);
  assert.match(experience, /resumeData\.experience/);
  assert.match(projects, /resumeData\.projects/);
  assert.match(spec, /All resume content must live in `src\/data\/resume\.ts`/);
  assert.match(spec, /English\/Persian i18n/);
  assert.match(workflow, /actions\/deploy-pages/);
});
