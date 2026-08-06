# 🚀 Portfolio Update Guide for Priyam Kumar

This guide explains how to easily add projects, update skills, add certifications/experience, change your resume, and customize your AI assistant.

---

## 1. 📂 How to Add New Projects
**File to edit**: [`components/Portfolio.tsx`](file:///c:/Users/acer/Desktop/portfolio/components/Portfolio.tsx#L26)

Open `components/Portfolio.tsx` and find `export const PROJECTS: Project[] = [`.  
Uncomment the array and add your project objects:

```typescript
export const PROJECTS: Project[] = [
  {
    id: 1,
    icon: "🌐", // Or image path: "/images/myicon.png"
    name: "My Awesome Project",
    description: "Full stack web application built with Spring Boot and React.",
    techs: ["Java", "Spring Boot", "React.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Codewithpriyam/my-awesome-project",
    live: "https://my-awesome-project.vercel.app/",
  },
  {
    id: 2,
    icon: "⚡",
    name: "E-Commerce Backend API",
    description: "Scalable REST APIs for order management and authentication.",
    techs: ["Java", "Spring Boot", "MySQL", "Postman"],
    github: "https://github.com/Codewithpriyam/ecommerce-backend",
    live: "https://api.myproject.com",
  }
];
```

### ✨ Automatic Features:
- **Desktop Shortcut**: The project will **AUTOMATICALLY** appear as a draggable desktop icon on your main screen! Clicking it opens your live project or GitHub link.
- **Portfolio Card**: The project will **AUTOMATICALLY** display as a styled card in your Portfolio window.

---

## 2. ⚡ How to Update Skills & Tech Stack

Skills are displayed in 3 areas:

1. **Portfolio Window Tags**:
   - File: [`components/Portfolio.tsx`](file:///c:/Users/acer/Desktop/portfolio/components/Portfolio.tsx#L260)
   - Edit the skills array:
     ```tsx
     {["Java", "Spring Boot", "React.js", "REST APIs", "MongoDB", "MySQL", "Postman", "New Skill"].map(...)
     ```

2. **Terminal Window Tech Stack**:
   - File: [`components/TerminalWindow.tsx`](file:///c:/Users/acer/Desktop/portfolio/components/TerminalWindow.tsx#L40)
   - Edit the table rows under `<tbody>`.

3. **AI Chatbot Knowledge**:
   - File: [`app/api/chat/route.ts`](file:///c:/Users/acer/Desktop/portfolio/app/api/chat/route.ts#L22)
   - Update the `#Skills:` list in `systemPrompt`.

---

## 3. 📜 How to Add Experience & Certifications
**File to edit**: [`components/Portfolio.tsx`](file:///c:/Users/acer/Desktop/portfolio/components/Portfolio.tsx#L38)

Find `const EXPERIENCE: Experience[] = [];` and add your certifications or work experience:

```typescript
const EXPERIENCE: Experience[] = [
  {
    company: "AWS Certified Developer",
    role: "Amazon Web Services Certification",
    period: "2026",
    location: "Online · Certified",
    badge: "active",
  },
  {
    company: "Tech Storm '26",
    role: "Hackathon Lead Coordinator",
    period: "2026",
    location: "Kolkata, India",
    badge: "active",
  }
];
```

---

## 4. 📄 How to Update Your Resume PDF
**File location**: [`public/files/resume.pdf`](file:///c:/Users/acer/Desktop/portfolio/public/files/resume.pdf)

1. Replace the file at `public/files/resume.pdf` with your new PDF resume.
2. Keep the exact filename `resume.pdf`.
3. Clicking **Resume.pdf** on the desktop or **Resume** in the top navigation bar will open your new PDF in a new tab.

---

## 5. 🖼️ Profile Photo (DP) & Wallpaper
- **Profile Avatar**: Replace [`public/images/dp.jpeg`](file:///c:/Users/acer/Desktop/portfolio/public/images/dp.jpeg).
- **Desktop Wallpaper**: Replace [`public/images/wallpaper.png`](file:///c:/Users/acer/Desktop/portfolio/public/images/wallpaper.png).

---

## 6. 🤖 Update AI Assistant Memory
**File to edit**: [`app/api/chat/route.ts`](file:///c:/Users/acer/Desktop/portfolio/app/api/chat/route.ts#L8)

Update the `systemPrompt` text to add new information about your projects, skills, or achievements for the **Ask AI** assistant.

---

## 7. 🖥️ How to Run Locally

Open terminal in `c:\Users\acer\Desktop\portfolio`:

```powershell
$env:Path += ";C:\Program Files\nodejs"
npm run dev
```

Open your browser at **`http://localhost:3000/`**.
