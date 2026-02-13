Ramadan Congrats Card GeneratorA modern web application built to generate personalized Ramadan greeting cards. Users can enter their names, select from a variety of artistically designed templates, and download a high-quality image to share with friends and family.🚀 FeaturesReal-time Preview: See exactly how your name looks on the card as you type.Template Selection: Choose from multiple elegant Ramadan themes (e.g., Classic Black, Luxury Gold).High-Quality Downloads: Export cards as high-resolution PNG images (1080x1920) optimized for social media sharing.Responsive Design: Fully optimized for Desktop, Tablet, and Mobile devices.Modern Tech Stack: Built with React, TypeScript, and Tailwind CSS for a fast and reliable experience.🛠️ Tech StackFramework: React with ViteLanguage: TypeScriptStyling: Tailwind CSS & Shadcn UIImage Generation: html2canvasIcons: Lucide React📂 Project StructurePlaintextramadancon/
├── src/
│   ├── components/       # UI components (CardPreview, TemplateSelector)
│   ├── config/           # Template definitions and coordinates
│   ├── hooks/            # Custom hooks for logic and downloading
│   ├── pages/            # Application pages (Index, NotFound)
│   └── lib/              # Utility functions
├── public/               # Static assets and card templates
└── tailwind.config.ts    # Styling configuration
⚙️ Installation & SetupClone the repository:Bashgit clone https://github.com/saraaya6/Ramadancongrats.git
cd Ramadancongrats/ramadancon
Install dependencies:Bashnpm install
Run the development server:Bashnpm run dev
Build for production:Bashnpm run build
🎨 Adding New TemplatesTo add a new greeting card template:Place your image in public/templates/.Update the TEMPLATES array in src/config/templates.ts with the new image path and the $(x, y)$ coordinates for the name placement.📄 LicenseThis project is created for personal and educational use during the holy month of Ramadan.Developed by Sara.
