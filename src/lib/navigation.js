export const navigationItems = [
  { label: "Blog", path: "/blog" },
  { label: "Poetry", path: "/poetry" },
  { label: "Music", path: "/music" },
  { label: "About", path: "/about" },
];

/**
 * Check if a navigation item is active based on the current path
 * @param {string} currentPath - The current page path
 * @param {string} itemPath - The navigation item path to check
 * @returns {boolean} - Whether the item is active
 */
export function isActive(currentPath, itemPath) {
  // Handle root path specially
  if (itemPath === "/") {
    return currentPath === "/";
  }
  // Check if the current path starts with the item path
  return currentPath.startsWith(itemPath);
}
