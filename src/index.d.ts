import { FileSystemItem } from "@raycast/api";

/**
 * Get selected files from the frontmost file manager application.
 * 
 * Supported applications:
 * - Finder (com.apple.finder)
 * - Bloom (com.asiafu.Bloom)
 * - QSpace (com.jinghaoshe.qspace)
 * - QSpace Pro (com.jinghaoshe.qspace.pro)
 * - Path Finder (com.cocoatech.PathFinder)
 * 
 * @returns Promise that resolves to an array of file system items
 * @throws Error if the frontmost application is not supported or bundle ID cannot be determined
 * 
 * @example
 * ```typescript
 * import { getSelectedItems } from "universal-selection";
 * 
 * const files = await getSelectedItems();
 * console.log(files); // [{ path: "/path/to/file1.txt" }, { path: "/path/to/file2.png" }]
 * ```
 */
export function getSelectedItems(): Promise<FileSystemItem[]>;
