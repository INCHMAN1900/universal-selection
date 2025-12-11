import { getFrontmostApplication } from "@raycast/api";
import { getFinderSelection } from "./apps/finder.js";
import { getBloomSelection } from "./apps/bloom.js";
import { getQSpaceSelection } from "./apps/qspace.js";
import { getPathFinderSelection } from "./apps/path-finder.js";

/**
 * Get selected files from the frontmost file manager application.
 * 
 * Automatically detects the active file manager and retrieves the selected files.
 * 
 * @returns {Promise<string[]>} Array of absolute file paths
 * @throws {Error} If the application bundle ID cannot be determined
 * @throws {Error} If the frontmost application is not supported
 * 
 * @example
 * const files = await getSelectedFiles();
 * console.log(files); // ["/Users/username/Documents/file.txt"]
 */
export async function getSelectedFiles() {
  const app = await getFrontmostApplication();
  const bundleId = app.bundleId;

  if (!bundleId) {
    throw new Error("Unable to get frontmost application bundle ID");
  }

  switch (bundleId) {
    case "com.apple.finder":
      return getFinderSelection();
    case "com.asiafu.Bloom":
      return getBloomSelection();
    case "com.jinghaoshe.qspace.pro":
      return getQSpaceSelection("QSpace Pro");
    case "com.jinghaoshe.qspace":
      return getQSpaceSelection("QSpace");
    case "com.cocoatech.PathFinder":
      return getPathFinderSelection();
    default:
      throw new Error(`Unsupported application: ${app.name} (${bundleId})`);
  }
}
