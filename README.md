# Personal website — deployment guide

## What's in this folder
- `index.html` — your entire website (one file, no build tools needed)
- Your CV: add a file named **`cv.pdf`** to the same folder (the site links to it)

## Publish on GitHub Pages (about 10 minutes)

1. **Create a GitHub account** at github.com if you don't have one. Choose your username carefully — your site address will be `username.github.io`.

2. **Create a new repository** named exactly `username.github.io` (replace `username` with your actual GitHub username). Set it to Public.

3. **Upload the files.** On the repository page, click "Add file" → "Upload files", then drag in `index.html` and your `cv.pdf`. Commit the changes.

4. **Wait 1–2 minutes**, then visit `https://username.github.io` — your site is live. (If it doesn't appear, check Settings → Pages and make sure the source is set to "Deploy from a branch" / main.)

## Updating the site later
Edit `index.html` directly on GitHub (click the file → pencil icon), or upload a new version. To update your CV, upload a new `cv.pdf` with the same name — the download link keeps working.

## Before publishing, replace:
- The two placeholder publications (marked "Placeholder — replace me")
- The email address in the Contact section
- The Google Scholar / GitHub / ORCID links (or delete the ones you don't use)
