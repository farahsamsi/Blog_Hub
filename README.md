# 📝 Blog Hub – AI-Powered Blog Platform

A full-stack blog platform built with **Next.js**, **RTK Query**, and **Gemini AI API** that enables users to write, manage, and explore blog posts with intelligent features like tag suggestions and auto-summaries.

## 🚀 Features

- ✨ **Next.js Full-Stack**: Frontend and backend powered by Next.js (API Routes).
- 🔐 **User Authentication**: Sign up, login, logout using [NextAuth].
- ✍️ **CRUD Blog Posts**: Users can create, read, update, and delete blog posts.
- 🧠 **AI Integration**: Generate summaries, suggest tags, or assist writing blogs using Gemini API.
- ⚡ **RTK Query**: Robust data fetching and caching for smooth client interactions.
- 💬 **Comments**: Allow users to comment on posts.
- ❤️ **Likes**: Engage with blog content.
- 🔍 **Search**: Filter posts by title or tags.
- 👤 **User Profiles**: View bios and authored posts.

---

## 🛠 Tech Stack

| Tech       | Role                           |
| ---------- | ------------------------------ |
| Next.js    | Frontend & API Backend         |
| React      | UI Components                  |
| RTK Query  | State Management + API Caching |
| MongoDB    | Database                       |
| Gemini API | AI-based content enhancement   |
| NextAuth   | Authentication                 |

---

## 📦 Installation

```bash
git clone https://github.com/farahsamsi/Blog_Hub.git
cd blog_hub
npm install
```

Create a `.env.local` file and add:

```env
MONGODB_URI=<your-mongodb-uri>
NEXTAUTH_SECRET=<your-secret>
NEXTAUTH_URL=http://localhost:3000
GEMINI_API_KEY=<your-gemini-api-key>
```

---

## 🧪 Running the Project

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to access the platform.

---

## 🧠 AI Integration Options

Choose one or more:

- `🪄 Auto Summary`: Generate a TL;DR of your blog post.
- `🏷️ Tag Suggester`: Get tag suggestions from the AI.
- `✍️ Blog Assistant`: Give a topic, get an article draft!

---

## ✨ Optional Stretch Goals

- ✅ Server-Side Rendering (SSR)
- ✅ Pagination for posts
- ✅ Rich Text Editor (e.g., TipTap, React Quill)
- ✅ Admin Panel & User Roles

---

---

## 🌐 Live Demo

🔗 [Live Site](https://your-live-site-url.com)

---

## 🌟 Star This Repo

If you found this project useful, feel free to ⭐ it on GitHub!
