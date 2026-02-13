import { TemplateConfig } from "@/config/templates";

interface TemplateSelectorProps {
  templates: TemplateConfig[];
  selected: string;
  onSelect: (id: string) => void;
}

const TemplateSelector = ({ templates, selected, onSelect }: TemplateSelectorProps) => {
  return (
    <div className="flex gap-4 justify-center">
      {templates.map((t) => (
        <button
          key={t.id}
          onClick={() => onSelect(t.id)}
          className={`relative rounded-lg overflow-hidden transition-all duration-300 border-2 ${
            selected === t.id
              ? "border-primary gold-border-glow scale-105"
              : "border-border opacity-60 hover:opacity-90 hover:border-muted-foreground"
          }`}
          style={{ width: "80px", aspectRatio: "9 / 16" }}
        >
          <img
            src={t.path}
            alt={t.name}
            className="w-full h-full object-cover"
          />
          {selected === t.id && (
            <div className="absolute inset-0 bg-primary/10" />
          )}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
