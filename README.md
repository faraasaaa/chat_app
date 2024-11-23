# Temporary Chat App

A real-time chat application with temporary message storage and image sharing capabilities. Messages automatically expire after 3 days.

## Features

- 🔐 User authentication (signup/login)
- 💬 Real-time messaging
- 📸 Image sharing support
- ⏳ Messages auto-expire after 3 days
- 🌙 Dark mode UI
- 📱 Responsive design
- 🎨 iOS-like animations

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/faraasaaa/chat_app.git
cd chat_app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the provided local URL (usually `http://localhost:5173`)

## Usage

1. **Create an Account**
   - Click "Don't have an account? Sign up"
   - Enter your desired username and password
   - Click "Sign Up"

2. **Login**
   - Enter your username and password
   - Click "Sign In"

3. **Send Messages**
   - Type your message in the input field
   - Click the send button or press Enter

4. **Share Images**
   - Click the image icon
   - Select an image from your device
   - Or drag and drop an image into the chat

5. **Logout**
   - Click the logout icon in the top-right corner

## Technical Details

- Built with React + TypeScript
- Styled with Tailwind CSS
- State management with Zustand
- File handling with react-dropzone
- Date formatting with date-fns
- Icons from lucide-react

## Important Notes

- Messages and images are stored locally and will expire after 3 days
- All data is stored in the browser's localStorage
- This is a demo version using local storage; in production, use MongoDB for persistent storage

## Development

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## License

MIT
