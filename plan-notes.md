## Phase 1: Core Layout & Global Styles Implementation Notes

- **`src/app.html`**: Updated `<html>` tag to include `class="h-full"`. Updated `<body>` tag to include `class="h-full bg-zinc-50 dark:bg-black"`.
- **`src/app.css`**: Verified presence of Tailwind directives (`@import "tailwindcss";`), font definitions (`Inter`, `Mona Sans`), and dark mode variables (`:root[class~='dark']`). No changes needed.
- **`src/lib/components/Container.svelte`**: Created component to wrap content with `mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-5xl lg:px-8` styling. Added optional `className` prop.
- **`src/lib/components/Header.svelte`**: Created placeholder component. Structure and interactivity (Navigation, ThemeToggle, etc.) deferred to Phase 4.
- **`src/lib/components/Footer.svelte`**: Created placeholder component with basic structure, including import of `Container`. Navigation links and content are placeholders.
- **`src/lib/stores/theme.js`**: Created a Svelte store to manage the theme ('light'/'dark'). Includes logic to read from/write to `localStorage`, check system preference (`prefers-color-scheme`), and update the `<html>` element's classlist.
- **`src/routes/+layout.svelte`**: Replaced previous layout structure. Imported `Header`, `Footer`, and `../app.css`. Added `onMount` logic to call `initializeTheme()` from the theme store. Structured the layout as `Header`, main `slot`, `Footer` within a flex container. The main slot is _not_ wrapped in `Container` to allow per-page control over containerization.
- **Linter Issue**: Noted a persistent linter error `Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@sveltejs/adapter-static'` originating from `svelte.config.js`. Declined to run `pnpm install` as per user instruction, proceeding with Phase 1 implementation despite the error.

## Phase 2: Homepage (`src/routes/+page.svelte`) Implementation Notes

- **`src/lib/components/ArticleCard.svelte`**: Created component based on `home.html` structure within the articles section. It displays post title, formatted date, description, and a link to the post. Uses `formatDate` utility and accepts a `post` prop.
- **`src/routes/+page.server.js`**: Adapted post loading logic from `src/routes/blog/+page.server.js`. Changed `import.meta.glob` path to `../posts/*.md`. Returns the filtered and sorted `posts` array. Currently loads all published posts.
- **`src/routes/+page.svelte`**: Replaced placeholder content. Imported `Container` and `ArticleCard`. Added `<svelte:head>` for title/meta description. Structured the page using `Container` components to roughly match `home.html` layout (intro, photo grid placeholder, articles list, side content placeholder). Iterates over `data.posts` using `ArticleCard` to display the loaded articles.
