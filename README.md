# www.toffeenutdesign.com

Portfolio site for Angela Salud Chua, built with [Astro](https://astro.build) and published on GitHub Pages.

## Changing the words

Every line of copy lives in **`src/data/site.js`**: homepage text, About story, brand list, stats and the photo descriptions. Edit it on github.com (open the file, click the pencil icon, commit) and the site rebuilds itself within a couple of minutes.

`public/llms.txt` is the plain-text summary for AI tools. Update it when the About story changes.

## Adding or swapping a photo

1. Put the image in `src/assets/work/` with a descriptive file name, like `brand-project-name.jpg`.
2. Add a line for it in the `work` list in `src/data/site.js`, in the position you want, with a one-sentence `alt` description.

Wide images (landscape) automatically span the full column; tall ones alternate left and right.

## Running it on your computer (optional)

```
npm install
npm run dev
```

Then open http://localhost:4321.

## How publishing works

`.github/workflows/deploy.yml` builds the site and publishes it on every push to `master`. `public/CNAME` tells GitHub Pages to serve it at www.toffeenutdesign.com.
