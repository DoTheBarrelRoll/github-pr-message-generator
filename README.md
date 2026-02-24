# Create PR Message Button Chrome Extension

This Chrome extension adds a button to GitHub Pull Request pages to generate a formatted Pull Request message.

## Installation

1. **Download or Clone the Repository**
   - Download this repository as a ZIP file and extract it, or clone it using:
     ```sh
     git clone <repository-url>
     ```

2. **Open Chrome Extensions Page**
   - Go to `chrome://extensions/` in your Chrome browser.
   - Enable **Developer mode** (toggle in the top right corner).

3. **Load the Unpacked Extension**
   - Click **Load unpacked**.
   - Select the folder where you extracted or cloned this repository.

4. **Done!**
   - The extension will now be active on GitHub Pull Request pages.

## Permissions

- `activeTab`
- `scripting`
- Host: `https://github.com/*/pull/*`

## How it Works

- Injects a button into GitHub PR pages.
- Clicking the button generates a formatted PR message and copies it to the clipboard.

## Support

For issues or feature requests, please open an issue in this repository.
