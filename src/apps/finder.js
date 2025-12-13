import { getSelectedFinderItems } from "@raycast/api";

/**
 * Get selected files from Finder.
 * 
 * Uses Raycast's native API to retrieve selected items from Finder.
 * 
 * @returns {Promise<import("@raycast/api").FileSystemItem[]>} Array of file system items
 */
export async function getFinderSelection() {
  return await getSelectedFinderItems();
}
