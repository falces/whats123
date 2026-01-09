# Whats123 Firefox Extension

## Overview
Whats123 is a simple Firefox extension that allows users to quickly start a WhatsApp chat with any phone number. By entering a number, the extension automatically opens a WhatsApp chat window, streamlining communication without needing to save contacts first.

## Features
- Enter any phone number to start a WhatsApp chat instantly.
- User-friendly popup interface.
- No need to save contacts in your phone.
- Lightweight and fast.

## Installation (For Development)
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   ```
2. **Open Firefox and go to `about:debugging`**
3. **Click on "This Firefox"**
4. **Click "Load Temporary Add-on"**
5. **Select the `manifest.json` file from the `src` folder**

## Usage
1. Click the Whats123 icon in your Firefox toolbar.
2. Enter the phone number (with country code, e.g., +1234567890).
3. Click the button to open a WhatsApp chat with the entered number.

## Folder Structure
```
assets/           # Images and icons
src/
  manifest.json   # Extension manifest
  popup.html      # Popup UI
  styles.css      # Popup styles
  icons/          # Extension icons
  scripts/
    script.js     # Main extension logic
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

## Support
For questions or issues, please open an issue in the repository.
