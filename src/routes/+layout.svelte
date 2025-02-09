<script>
  import "../app.css";
  // No JavaScript needed.
</script>

<!-- Hidden toggles -->
<input id="menu-toggle" type="checkbox" class="hidden peer" />
<input id="dark-toggle" type="checkbox" class="hidden" />

<div
  class="wrapper flex min-h-screen font-sans transition-colors duration-300"
  style="background-color: var(--bg-color); color: var(--text-color);"
>
  <!-- Sidebar Navigation -->
  <nav
    class="sidebar p-4 fixed inset-y-0 left-0 w-64 border-r transition-transform duration-300
              -translate-x-full peer-checked:translate-x-0 md:translate-x-0 md:static"
  >
    <h1
      class="text-2xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300"
    >
      Site Name
    </h1>
    <ul class="space-y-4">
      <li>
        <a
          href="/"
          class="hover:underline hover:text-blue-600 transition-colors duration-300"
          >Home</a
        >
      </li>
      <li>
        <details class="group">
          <summary
            class="cursor-pointer hover:underline hover:text-blue-600 transition-colors duration-300"
            >Blog</summary
          >
          <ul class="ml-4 mt-2 space-y-2">
            <li>
              <a
                href="/blog/page/1"
                class="hover:underline hover:text-blue-600 transition-colors duration-300"
                >All Posts</a
              >
            </li>
            <li>
              <a
                href="/blog/tag"
                class="hover:underline hover:text-blue-600 transition-colors duration-300"
                >Tags</a
              >
            </li>
            <li>
              <a
                href="/blog/category"
                class="hover:underline hover:text-blue-600 transition-colors duration-300"
                >Categories</a
              >
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a
          href="/poetry"
          class="hover:underline hover:text-blue-600 transition-colors duration-300"
          >Poetry</a
        >
      </li>
      <li>
        <a
          href="/search"
          class="hover:underline hover:text-blue-600 transition-colors duration-300"
          >Search</a
        >
      </li>
    </ul>
  </nav>

  <!-- Main Content Area -->
  <div class="flex-1 ml-0 md:ml-64 transition-all duration-300">
    <!-- Mobile Header -->
    <header
      class="main-header md:hidden flex items-center justify-between p-4 border-b transition-colors duration-300"
    >
      <h1
        class="text-xl font-bold hover:text-blue-600 transition-colors duration-300"
      >
        Site Name
      </h1>
      <div class="flex items-center space-x-4">
        <!-- Dark Mode Toggle with Sun/Moon Icon Swap -->
        <label for="dark-toggle" class="cursor-pointer p-2">
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
        <label for="menu-toggle" class="cursor-pointer">
          <div class="hamburger space-y-1">
            <span
              class="block w-6 h-0.5 bg-slate-800 transition-transform duration-300"
            ></span>
            <span
              class="block w-6 h-0.5 bg-slate-800 transition-opacity duration-300"
            ></span>
            <span
              class="block w-6 h-0.5 bg-slate-800 transition-transform duration-300"
            ></span>
          </div>
        </label>
      </div>
    </header>

    <!-- Desktop Header -->
    <header
      class="hidden md:flex items-center justify-between p-4 border-b transition-colors duration-300"
    >
      <h1
        class="text-xl font-bold hover:text-blue-600 transition-colors duration-300"
      >
        Site Name
      </h1>
      <div class="flex items-center space-x-4">
        <label for="dark-toggle" class="cursor-pointer p-2">
          <div class="relative w-6 h-6">
            <svg
              id="sun-icon-desktop"
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
              id="moon-icon-desktop"
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
      </div>
    </header>

    <!-- Page Content -->
    <main class="p-4">
      <slot />
    </main>
  </div>
</div>

<style>
  :root {
    --bg-color: #ffffff;
    --text-color: #1e293b;
  }
  #dark-toggle:checked ~ .wrapper {
    --bg-color: #1e293b;
    --text-color: #ffffff;
  }
  #menu-toggle:checked
    ~ .wrapper
    .main-header
    label
    .hamburger
    span:nth-child(1) {
    transform: translateY(0.25rem) rotate(45deg);
  }
  #menu-toggle:checked
    ~ .wrapper
    .main-header
    label
    .hamburger
    span:nth-child(2) {
    opacity: 0;
  }
  #menu-toggle:checked
    ~ .wrapper
    .main-header
    label
    .hamburger
    span:nth-child(3) {
    transform: translateY(-0.25rem) rotate(-45deg);
  }
  #dark-toggle:checked ~ .wrapper header label svg#sun-icon,
  #dark-toggle:checked ~ .wrapper header label svg#sun-icon-desktop {
    opacity: 0;
  }
  #dark-toggle:checked ~ .wrapper header label svg#moon-icon,
  #dark-toggle:checked ~ .wrapper header label svg#moon-icon-desktop {
    opacity: 1;
  }
  .sidebar a {
    transition: color 0.3s;
  }
  .sidebar a:hover {
    color: #2563eb;
  }
  @media (min-width: 768px) {
    .sidebar {
      transition: transform 0.3s ease-in-out;
    }
  }
</style>
