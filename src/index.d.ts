/**
 * Get selected files from the frontmost file manager application.
 * 
 * Supported applications:
 * - Finder (com.apple.finder)
 * - Bloom (com.asiafu.Bloom)
 * 
 * @returns Promise that resolves to an array of file paths
 * @throws Error if the frontmost application is not supported or bundle ID cannot be determined
 * 
 * @example
 * ```typescript
 * import { getSelectedFiles } from "universal-selection";
 * 
 * const files = await getSelectedFiles();
 * console.log(files); // ["/path/to/file1.txt", "/path/to/file2.png"]
 * ```
 */
export function getSelectedFiles(): Promise<string[]>;
