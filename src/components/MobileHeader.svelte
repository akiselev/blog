<!-- Mobile Header -->
<script>
  import { page } from "$app/stores";
  import { navigationItems, isActive } from "$lib/navigation";
  import { writable } from "svelte/store";

  const isMenuOpen = writable(false);

  function toggleMenu() {
    isMenuOpen.update((value) => !value);
  }
</script>

<header
  class="main-header md:hidden flex items-center justify-between p-4 border-b transition-colors duration-300"
>
  <h1
    class="text-lg font-bold hover:text-blue-600 transition-colors duration-300 leading-tight max-w-[70%]"
  >
    <a href="/">A Blog of Dubious Significance</a>
  </h1>
  <div class="flex items-center space-x-2">
    <!-- Dark Mode Toggle with Sun/Moon Icon Swap -->
    <label for="dark-toggle" class="cursor-pointer p-1">
      <div class="relative w-6 h-6">
        <svg
          id="sun-icon"
          class="w-6 h-6 absolute transition-opacity duration-300"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <g stroke="currentColor" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
        <svg
          id="moon-icon"
          class="w-6 h-6 absolute opacity-0 transition-opacity duration-300"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79z"
          />
        </svg>
      </div>
    </label>
    <!-- Hamburger Menu Button with Animation -->
    <button on:click={toggleMenu} class="cursor-pointer">
      <div class="hamburger space-y-1">
        <span
          class="block w-6 h-0.5 transition-transform duration-300 {$isMenuOpen
            ? 'rotate-45 translate-y-1.5'
            : ''}"
          style="background-color: var(--text-color);"
        ></span>
        <span
          class="block w-6 h-0.5 transition-opacity duration-300 {$isMenuOpen
            ? 'opacity-0'
            : ''}"
          style="background-color: var(--text-color);"
        ></span>
        <span
          class="block w-6 h-0.5 transition-transform duration-300 {$isMenuOpen
            ? '-rotate-45 -translate-y-1.5'
            : ''}"
          style="background-color: var(--text-color);"
        ></span>
      </div>
    </button>
  </div>
</header>

<!-- Mobile Navigation Menu -->
<nav
  class="md:hidden fixed inset-0 w-full h-[calc(100vh-4rem)] top-[4rem] bg-white dark:bg-zinc-900 transform transition-transform duration-300 ease-in-out {$isMenuOpen
    ? 'translate-x-0'
    : 'translate-x-full'}"
>
  <ul class="p-4 space-y-2">
    {#each navigationItems as item}
      <li>
        <a
          href={item.path}
          on:click={() => ($isMenuOpen = false)}
          class="block py-2 px-4 text-lg transition-colors duration-300 {isActive(
            $page.url.pathname,
            item.path
          )
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400'}"
        >
          {item.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .hamburger span {
    transform-origin: center;
  }
</style>
