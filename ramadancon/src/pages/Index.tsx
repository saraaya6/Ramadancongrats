import { useState, useRef } from "react";
import { TEMPLATES, DEFAULT_NAME } from "@/config/templates";
import CardPreview, { CardPreviewHandle } from "@/components/CardPreview";
import TemplateSelector from "@/components/TemplateSelector";
import { useCardDownload } from "@/hooks/useCardDownload";
import { Download, Linkedin } from "lucide-react";

const Index = () => {
  const [name, setName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES[0].id);
  const cardRef = useRef<CardPreviewHandle>(null);
  const { download, downloading } = useCardDownload();

  const template = TEMPLATES.find((t) => t.id === selectedTemplate)!;
  const displayName = name.trim() || DEFAULT_NAME;

  const handleDownload = () => {
    const el = cardRef.current?.getCardElement();
    download(el);
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between border-b border-border/50">
        <div className="flex items-center gap-4">
          <img
            src="/images/azal-logo.png"
            alt="Azal United"
            className="h-10 md:h-12 object-contain"
          />
        </div>
        <div className="text-left">
          <h1 className="text-lg md:text-xl font-bold gold-text-gradient leading-relaxed">
            تهنئة رمضان
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground">
            أزال يونايتد
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-4 py-6 md:py-10 max-w-lg mx-auto w-full flex flex-col gap-6">
        {/* Name Input */}
        <div className="animate-fade-in">
          <label className="block text-sm font-semibold text-foreground mb-2">
            أدخل الاسم
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={DEFAULT_NAME}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-cairo text-base leading-relaxed"
          />
        </div>

        {/* Template Selector */}
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <label className="block text-sm font-semibold text-foreground mb-3">
            اختر القالب
          </label>
          <TemplateSelector
            templates={TEMPLATES}
            selected={selectedTemplate}
            onSelect={setSelectedTemplate}
          />
        </div>

        {/* Card Preview */}
        <div
          className="animate-fade-in card-shadow rounded-xl overflow-hidden"
          style={{ animationDelay: "0.2s" }}
        >
          <CardPreview ref={cardRef} template={template} name={displayName} />
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full py-4 rounded-lg gold-gradient text-primary-foreground font-bold text-base flex items-center justify-center gap-3 transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Download className="w-5 h-5" />
          {downloading
            ? "جاري التحميل..."
            : "تحميل التهنئة بجودة عالية (1080×1920)"}
        </button>
      </main>

      {/* Footer */}
      <footer className="px-6 py-5 border-t border-border/50 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <span>تم التطوير بكل ❤️ بواسطة سارة</span>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </footer>
    </div>
  );
};

export default Index;
