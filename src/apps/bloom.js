import { runAppleScript } from "@raycast/utils";

/**
 * Get selected files from Bloom file manager.
 * 
 * Uses AppleScript to retrieve selected files from Bloom and converts
 * file URLs to POSIX paths.
 * 
 * @returns {Promise<string[]>} Array of absolute file paths selected in Bloom
 */
export async function getBloomSelection() {
  const script = `
    tell application "Bloom"
      set selectedFiles to get selected files
      if (count of selectedFiles) is 0 then
        return ""
      end if
      
      set outputList to {}
      repeat with fileURL in selectedFiles
        set end of outputList to POSIX path of fileURL
      end repeat
      
      set AppleScript's text item delimiters to linefeed
      return outputList as text
    end tell
  `;

  const result = await runAppleScript(script);
  
  if (!result.trim()) {
    return [];
  }

  return result.trim().split("\n");
}
