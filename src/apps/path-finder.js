import { runAppleScript } from "@raycast/utils";

/**
 * Get selected files from Path Finder file manager.
 * 
 * Uses AppleScript to retrieve selected items from Path Finder.
 * 
 * @returns {Promise<import("@raycast/api").FileSystemItem[]>} Array of file system items
 */
export async function getPathFinderSelection() {
  const script = `
    tell application "Path Finder"
      set selectedItems to selection
      if (count of selectedItems) is 0 then
        return ""
      end if
      
      set outputList to {}
      repeat with anItem in selectedItems
        set end of outputList to POSIX path of anItem
      end repeat
      
      set AppleScript's text item delimiters to linefeed
      return outputList as text
    end tell
  `;

  const result = await runAppleScript(script);
  
  if (!result.trim()) {
    return [];
  }

  return result.trim().split("\n").map(path => ({ path }));
}
