# FI$Hmrkt brand release checklist

## Published source assets
- `index.html`: responsive static brand portal.
- `assets/fishmrkt-dual-color.svg`: lightweight simplified vector interpretation.
- `lighthouserc.json`: automated performance/accessibility assertions.
- `../../packages/brand/tokens.json`: application design tokens.

## Original binary masters — pending GitHub synchronization
The original approved dual-color PNG and two PDF guides were created in the local release bundle, but are **not present in GitHub** yet. Do not substitute the simplified SVG for the approved master in print production.

Expected destination paths:
- `docs/brand/assets/FISHmrkt-dual-color-logo.png`
- `docs/brand/release/FIShmrkt_visual_branding_page.pdf`
- `docs/brand/release/FIShmrkt_branding_guide.pdf`

Upload those exact files via GitHub's **Add file → Upload files** UI (or a git push), then confirm their raw URLs load. The GitHub text-file connector does not accept binary file attachments.

## Deployment verification
1. In repository Settings → Pages, set **Source: GitHub Actions**.
2. Trigger the `brand-pages.yml` workflow from Actions.
3. Confirm the deployment job succeeds and https://bzenny.github.io/fish_mrkt/ returns the portal.
4. Confirm `brand-quality.yml` Lighthouse checks succeed.
5. Verify the PNG and PDF links after uploading binaries.

The site is static and uses no JavaScript bundles or external runtime dependencies.
