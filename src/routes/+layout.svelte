<script>
  import "../app.css";
  import MobileHeader from "../components/MobileHeader.svelte";
  import DesktopHeader from "../components/DesktopHeader.svelte";
  // No JavaScript needed.
</script>

<!-- Hidden toggles -->
<input id="dark-toggle" type="checkbox" class="hidden" />

<div
  class="min-h-screen font-sans transition-colors duration-300"
  style="background-color: var(--bg-color); color: var(--text-color);"
>
  <input id="menu-toggle" type="checkbox" class="hidden peer" />

  <!-- Main Content Area -->
  <div class="flex-1 transition-all duration-300">
    <MobileHeader />
    <DesktopHeader />

    <!-- Page Content -->
    <main class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
      <slot />
    </main>
  </div>
</div>

<style>
  :root {
    --bg-color: #ffffff;
    --text-color: #1e293b;
  }
  #dark-toggle:checked ~ div {
    --bg-color: #1e293b;
    --text-color: #ffffff;
  }
  :global(
      #menu-toggle:checked
        ~ .flex-1
        header.main-header
        label[for="menu-toggle"]
        .hamburger
        span:nth-child(1)
    ) {
    transform: translateY(0.4rem) rotate(45deg);
  }
  :global(
      #menu-toggle:checked
        ~ .flex-1
        header.main-header
        label[for="menu-toggle"]
        .hamburger
        span:nth-child(2)
    ) {
    opacity: 0;
  }
  :global(
      #menu-toggle:checked
        ~ .flex-1
        header.main-header
        label[for="menu-toggle"]
        .hamburger
        span:nth-child(3)
    ) {
    transform: translateY(-0.4rem) rotate(-45deg);
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
