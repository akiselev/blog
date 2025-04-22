Okay, here is a phased plan to restyle your SvelteKit blog based on the provided `home.html` and `post.html` templates, including creating reusable Svelte components:

**Analysis & Component Identification:**

1.  **Analyze Templates:** Review `home.html` and `post.html`. Note the common structure (header, footer, main container), styling conventions (Tailwind CSS classes like `dark:bg-black`, `prose`, etc.), and layout patterns.
2.  **Identify Reusable Components:** Based on the templates, these elements are good candidates for reusable Svelte components:
    - `Header.svelte`: Contains the avatar, navigation, and theme toggle.
    - `Footer.svelte`: Consistent across both templates.
    - `Navigation.svelte`: The main site navigation links within the header.
    - `ThemeToggle.svelte`: The light/dark mode switch button.
    - `Container.svelte`: Wraps the main content, providing padding and max-width.
    - `ArticleCard.svelte`: Displays article summaries on the homepage/blog index.
    - `ArticleProse.svelte`: Styles the main content of a blog post using Tailwind's `prose` classes.
    - `Avatar.svelte`: The user avatar image shown in the header.
    - `MobileMenu.svelte`: Handles the navigation toggle for smaller screens.

**Restyling Phases:**

**Phase 1: Core Layout & Global Styles**

1.  **Base HTML (`src/app.html`):** Update the `<html>` and `<body>` tags to include base classes (e.g., `h-full`, `bg-zinc-50 dark:bg-black`) found in the templates.
2.  **Global CSS (`src/app.css`):** Ensure necessary Tailwind directives (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`) are present. Verify font imports (`Inter`, `Mona Sans`) and dark mode variables (`:root[class~='dark']`) align with the template styles.
3.  **Main Layout (`src/routes/+layout.svelte`):**
    - Create this file if it doesn't exist.
    - Implement `Header.svelte` and `Footer.svelte` components based on the HTML structure and classes in the templates.
    - Implement the `Container.svelte` component.
    - Structure the layout file to include the `Header`, wrap the main content `<slot />` potentially with `Container`, and include the `Footer`.
    - Implement basic light/dark mode switching logic, perhaps using a store and updating the `<html>` class, referencing the script in the templates.

**Phase 2: Homepage (`src/routes/+page.svelte`)**

1.  **Structure:** Modify the existing `+page.svelte` to match the content structure of `home.html` (introductory text, photo grid, articles list, side content like newsletter signup/work history).
2.  **Implement `ArticleCard.svelte`:** Create this component based on the article structure within the `<div class="flex max-w-3xl flex-col space-y-16">` section of `home.html`.
3.  **Data Loading:** Use the existing `+page.server.js` or adapt logic from `src/routes/blog/+page.server.js` to load the necessary data (articles, etc.).
4.  **Integrate Components:** Use `ArticleCard.svelte` to render the list of articles fetched in the server load function.

**Phase 3: Blog Post Page (`src/routes/blog/[slug]/+page.svelte`)**

1.  **Structure:** Modify the existing `+page.svelte` file for blog posts.
2.  **Layout:** Replicate the article layout from `post.html`, including the back button, header section (title, date), and main content area.
3.  **Implement `ArticleProse.svelte`:** Create a component that wraps the main blog content (`{@html data.content}`) and applies the `prose dark:prose-invert` classes for styling.
4.  **Data Display:** Use the data loaded by `src/routes/blog/[slug]/+page.server.js` to display the title, date, and content within the new structure and `ArticleProse` component.

**Phase 4: Component Integration & Interactivity**

1.  **Implement `Navigation.svelte`:** Create this component using the structure in the templates. Use `src/lib/navigation.js` to dynamically generate links and potentially handle the active state logic. Integrate into `Header.svelte`.
2.  **Implement `ThemeToggle.svelte`:** Create the button component based on the templates. Add the JavaScript logic to toggle the theme (updating the `<html>` class and local storage). Integrate into `Header.svelte`.
3.  **Implement `MobileMenu.svelte`:** Create the component and logic for the mobile menu toggle and flyout/dropdown based on the template's structure and potentially headless UI usage indicated in the HTML. Integrate into `Header.svelte`.
4.  **Implement `Avatar.svelte`:** Create a simple component for the avatar image used in the header. Integrate into `Header.svelte`.

**Phase 5: Refinement & Other Pages**

1.  **Blog Index & Categories/Tags:** Restyle `src/routes/blog/+page.svelte`, `src/routes/blog/category/[category]/+page.svelte`, and `src/routes/blog/tag/[tag]/+page.svelte`. Reuse the `ArticleCard.svelte` component. Adapt the layout as needed (the templates don't show these pages specifically, so you might combine elements from `home.html` or create a simpler list view).
2.  **Other Sections:** Restyle other pages like `/poetry` using their respective server files and components developed.
3.  **Responsiveness & Styling:** Thoroughly test responsiveness and refine Tailwind CSS classes across all components and pages to ensure they match the template's appearance at different screen sizes.

This phased approach allows you to tackle the restyling incrementally, focusing on structure, then individual page types, and finally refining interactive components.
