import { getSelectedFinderItems } from "@raycast/api";

/**
 * Get selected files from Finder.
 * 
 * Uses Raycast's native API to retrieve selected items from Finder.
 * 
 * @returns {Promise<string[]>} Array of absolute file paths selected in Finder
 */
export async function getFinderSelection() {
  const items = await getSelectedFinderItems();
  return items.map(item => item.path);
}
