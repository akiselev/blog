<!-- Desktop Header -->
<script>
  import { page } from "$app/stores";
  import { navigationItems, isActive } from "$lib/navigation";
</script>

<header class="pointer-events-none relative z-50 flex flex-none flex-col">
  <div class="top-0 z-10 h-16 pt-6">
    <div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
      <div class="relative flex gap-4">
        <div class="flex flex-1">
          <a href="/" class="pointer-events-auto">
            <h1
              class="text-xl lg:text-2xl font-bold hover:text-blue-600 transition-colors duration-300 leading-tight"
            >
              A Blog of Dubious Significance
            </h1>
          </a>
        </div>
        <div class="flex flex-1 justify-end md:justify-center">
          <nav class="pointer-events-auto hidden md:block">
            <ul
              class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
            >
              {#each navigationItems as item}
                <li>
                  <a
                    href={item.path}
                    class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 {isActive(
                      $page.url.pathname,
                      item.path
                    )
                      ? 'text-teal-500 dark:text-teal-400'
                      : ''}"
                  >
                    {item.label}
                    {#if isActive($page.url.pathname, item.path)}
                      <span
                        class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
                      />
                    {/if}
                  </a>
                </li>
              {/each}
            </ul>
          </nav>
        </div>
        <div class="flex justify-end md:flex-1">
          <div class="pointer-events-auto">
            <label
              for="dark-toggle"
              class="group px-3 py-2 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer"
            >
              <svg
                id="sun-icon-desktop"
                class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" />
                <g stroke-width="2">
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
                id="moon-icon-desktop"
                class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500 dark:group-hover:stroke-zinc-400"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
