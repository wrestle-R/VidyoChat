# VidyoChat

A modern video calling application built with React and powered by Digital Samba's video conferencing platform.

## Features

- 🎥 High-quality video calls
- 🔐 Google Authentication
- 🎨 Modern, responsive UI with particle animations
- 🌐 Cloudflare Workers backend
- 📱 Mobile-friendly design
- 🎛️ Room creation and joining with simple codes
- 🎙️ Screen sharing and recording capabilities

## Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Firebase** - Authentication

### Backend
- **Cloudflare Workers** - Serverless backend
- **Digital Samba API** - Video conferencing platform
- **JWT** - Token authentication
- **Express** - as an alternate backedn for testing

## Project Structure

```
vidyo/
├── video_call/          # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── config/      # Firebase configuration
│   │   └── lib/         # Utility functions
│   └── package.json
├── serverless/          # Cloudflare Workers backend
│   ├── src/
│   │   └── index.js     # Main worker file
│   └── wrangler.jsonc   # Cloudflare configuration
└── server/              # Express.js server (alternative backend)
    └── server.js
```

