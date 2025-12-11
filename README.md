# Universal Selection

A universal file selection getter for Raycast extensions. Automatically detects the frontmost file manager application and retrieves selected files.

## Features

- Support for multiple file managers
- Easy integration with Raycast extensions

## Installation

```bash
npm install universal-selection
```

## Usage

```javascript
import { getSelectedFiles } from "universal-selection";
import { showToast, Toast } from "@raycast/api";

export default async function Command() {
  try {
    const files = await getSelectedFiles();
    
    if (files.length === 0) {
      await showToast({
        style: Toast.Style.Failure,
        title: "No files selected",
      });
      return;
    }

    // Process your files
    console.log("Selected files:", files);
    // ["/Users/username/Documents/file.txt", "/Users/username/Pictures/image.png"]
    
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Error",
      message: error.message,
    });
  }
}
```

## API

### `getSelectedFiles()`

Returns a promise that resolves to an array of selected file paths.

**Returns:** `Promise<string[]>`

**Throws:**
- `Error` - If the frontmost application bundle ID cannot be determined
- `Error` - If the frontmost application is not supported

## Supported Applications

| Application | Bundle ID | Status |
|------------|-----------|--------|
| Finder | `com.apple.finder` | ✅ Supported |
| Bloom | `com.asiafu.Bloom` | ✅ Supported |
| QSpace | `com.jinghaoshe.qspace(.pro)` | ✅ Supported |
| Path Finder | `com.cocoatech.PathFinder` | ✅ Supported |

Want to add support for more file managers? [Open an issue](https://github.com/yourusername/universal-selection/issues) or submit a pull request!

## Development

### Adding Support for New File Managers

1. Create a new file in `src/apps/` (e.g., `my-app.js`)
2. Implement the selection getter function
3. Add the bundle ID case in `src/index.js`
4. Update the README

Example:

```javascript
// src/apps/my-app.js
import { runAppleScript } from "@raycast/utils";

export async function getMyAppSelection() {
  const script = `
    tell application "MyApp"
      -- Your AppleScript here
    end tell
  `;
  const result = await runAppleScript(script);
  return result.trim().split("\n");
}
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
