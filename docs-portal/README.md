# SimpleSphere LMS Documentation Portal

Welcome to the **SimpleSphere LMS Documentation Portal**. This is a highly customized, fully interactive documentation website built with Next.js 15, React 19, and MDX. 

It provides detailed, role-based guides for Students, Mentors, and Administrators using the SimpleSphere platform.

![SimpleSphere Logo](/public/logo/simplespherelearning.png)

## 🌟 Key Features

- **MDX Powered:** Write documentation in standard Markdown while effortlessly embedding interactive React components (like custom Sidebars, Callout boxes, and Code Highlighters).
- **Beautiful UI:** Styled with Tailwind CSS v4 and animated using Framer Motion, featuring a completely custom responsive sidebar that auto-tracks your active page.
- **Dark Mode Ready:** Built-in seamless toggling between Light and Dark themes.
- **Lightning Fast Search:** Client-side document search integrated directly into the header navigation.
- **Role-Based Categories:** Content organized beautifully into Getting Started, Student Guide, Mentor Guide, and Admin Guide.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Content:** [MDX](https://mdxjs.com/) (`@next/mdx`)
- **Syntax Highlighting:** [Shiki](https://shiki.style/) + Rehype Plugins
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion](https://motion.dev/)

---

## 🚀 How to Run the Code Locally

### Prerequisites
Make sure you have installed on your computer:
- **Node.js:** version `18.17.0` or higher
- **npm:** version `9.0.0` or higher
- **Git**

### 1. Clone the Repository
Open your terminal and clone this project from GitHub:
```bash
git clone https://github.com/Harshal-Avate/LMS_Documentation.git
cd LMS_Documentation/docs-portal
```

### 2. Install Dependencies
Run npm install to download all the required packages (this may take a minute):
```bash
npm install
```

### 3. Start Development Server (For Making Edits)
If you are actively writing new documentation or changing code, use the development server. It provides "Hot Reloading", meaning your changes appear instantly in the browser when you save a file.
```bash
npm run dev
```
👉 Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Production Build (For Testing Final Output)
If you want to test exactly how the site will run in production on the real server, you must "build" it first.
```bash
npm run build
npm start
```
👉 Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
docs-portal/
├── app/
│   ├── docs/                 # All your Markdown (.mdx) files live here!
│   │   ├── admin/            # Admin documentation folder
│   │   ├── mentor/           # Mentor documentation folder
│   │   ├── student/          # Student documentation folder
│   │   └── getting-started/  # Onboarding guides
│   ├── layout.tsx            # Root application layout
│   └── page.tsx              # Homepage redirect
├── components/
│   └── docs/                 # Custom React components used in the MDX
│       ├── Sidebar.tsx       # Left navigation tree
│       ├── Search.tsx        # Search bar logic
│       ├── MenuTree.tsx      # Visual folder tree UI
│       └── Callout.tsx       # Info/Warning/Success notification boxes
├── public/
│   └── images/               # All images and screenshots used in guides
├── mdx-components.tsx        # Injects React components into MDX files
├── requirements.txt          # Quick summary list of dependencies
└── next.config.mjs           # Next.js & MDX compiler configuration
```

---

## 📝 How to Add or Edit Documentation

1. **Find the Right Folder:** Navigate to `app/docs/` and choose the category (e.g., `student`).
2. **Create/Edit the File:** Create a new folder for your page and add a `page.mdx` inside it. 
   *(Example: `app/docs/student/my-new-page/page.mdx`)*
3. **Write Markdown:** Write your text using standard Markdown format (`#` for headers, `**bold**` for bold, etc).
4. **Use Custom Components:** You can use our custom React components right inside the text!
   
   *Example of adding an Info Box:*
   ```mdx
   <Info title="Did you know?">
     This is a custom callout box!
   </Info>
   ```
5. **Update Navigation:** If you created a completely new page, remember to add its link to `lib/navigation.ts` so it shows up in the Left Sidebar!

---

## ☁️ Deployment

When you push your code to the `main` branch on GitHub, you can connect the repository to a platform like **Vercel** or **Netlify** for instant, automatic deployments. 

The build command is simply:
```bash
npm run build
```
And the output directory is `.next`.
