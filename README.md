# Ramadan Congrats Card Generator

A modern web application built to generate personalized Ramadan greeting cards. Users can enter their names, select from a variety of artistically designed templates, and download a high-quality image to share with friends and family.

## 🚀 Features

* **Real-time Preview**: See exactly how your name looks on the card as you type.
* **Template Selection**: Choose from multiple elegant Ramadan themes (e.g., Classic Black, Luxury Gold).
* **High-Quality Downloads**: Export cards as high-resolution PNG images (1080x1920) optimized for social media sharing.
* **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.
* **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS for a fast and reliable experience.

## 🛠️ Tech Stack

* **Framework**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
* **Image Generation**: [html2canvas](https://html2canvas.hertzen.com/)
* **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
ramadancon/
├── src/
│   ├── components/       # UI components (CardPreview, TemplateSelector)
│   ├── config/           # Template definitions and coordinates
│   ├── hooks/            # Custom hooks for logic and downloading
│   ├── pages/            # Application pages (Index, NotFound)
│   └── lib/              # Utility functions
├── public/               # Static assets and card templates
└── tailwind.config.ts    # Styling configuration

```

## ⚙️ Installation & Setup

1. **Clone the repository**:
```bash
git clone https://github.com/saraaya6/Ramadancongrats.git
cd Ramadancongrats/ramadancon

```


2. **Install dependencies**:
```bash
npm install

```


3. **Run the development server**:
```bash
npm run dev

```


4. **Build for production**:
```bash
npm run build

```



## 🎨 Adding New Templates

To add a new greeting card template:

1. Place your image in `public/templates/`.
2. Update the `TEMPLATES` array in `src/config/templates.ts` with the new image path and the  coordinates for the name placement.

## 📄 License

This project is created for personal and educational use during the holy month of Ramadan.

---

*Developed by Sara.*
