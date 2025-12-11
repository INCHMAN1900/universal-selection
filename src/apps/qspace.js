import { runAppleScript } from "@raycast/utils";

/**
 * Get selected files from QSpace or QSpace Pro file manager.
 * 
 * Uses AppleScript to retrieve selected items from QSpace/QSpace Pro.
 * 
 * @param {string} appName - The name of the application ("QSpace" or "QSpace Pro")
 * @returns {Promise<string[]>} Array of absolute file paths selected in QSpace
 */
export async function getQSpaceSelection(appName = "QSpace Pro") {
  const script = `
    tell application "${appName}"
      set selectedItems to selected items
      if (count of selectedItems) is 0 then
        return ""
      end if
      
      set outputList to {}
      repeat with anItem in selectedItems
        set end of outputList to urlstr of anItem
      end repeat
      
      set AppleScript's text item delimiters to linefeed
      return outputList as text
    end tell
  `;

  const result = await runAppleScript(script);
  
  if (!result.trim()) {
    return [];
  }

  // Convert file:// URLs to POSIX paths
  return result.trim().split("\n").map(url => {
    return decodeURIComponent(url.replace(/^file:\/\//, ""));
  });
}
