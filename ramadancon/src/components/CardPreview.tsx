import { useRef, forwardRef, useImperativeHandle, useState, useEffect } from "react";
import { TemplateConfig, CARD_WIDTH, CARD_HEIGHT } from "@/config/templates";

interface CardPreviewProps {
  template: TemplateConfig;
  name: string;
}

export interface CardPreviewHandle {
  getCardElement: () => HTMLDivElement | null;
}

const CardPreview = forwardRef<CardPreviewHandle, CardPreviewProps>(
  ({ template, name }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(0.3);

    useImperativeHandle(ref, () => ({
      getCardElement: () => cardRef.current,
    }));

    useEffect(() => {
      const updateScale = () => {
        if (wrapperRef.current) {
          const w = wrapperRef.current.offsetWidth;
          setScale(w / CARD_WIDTH);
        }
      };
      updateScale();
      window.addEventListener("resize", updateScale);
      return () => window.removeEventListener("resize", updateScale);
    }, []);

    return (
      <div className="w-full flex justify-center">
        <div
          ref={wrapperRef}
          className="relative overflow-hidden w-full"
          style={{
            maxWidth: "600px",
            aspectRatio: `${CARD_WIDTH} / ${CARD_HEIGHT}`,
          }}
        >
          <div
            ref={cardRef}
            className="absolute top-0 left-0 origin-top-left"
            style={{
              width: `${CARD_WIDTH}px`,
              height: `${CARD_HEIGHT}px`,
              transform: `scale(${scale})`,
            }}
          >
            <img
              src={template.path}
              alt={template.name}
              crossOrigin="anonymous"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div
              className="absolute font-cairo font-bold text-center"
              style={{
                top: `${template.namePosition.y}px`,
                left: `${template.namePosition.x}px`,
                width: `${template.namePosition.width}px`,
                transform: "translateX(-50%)",
                fontSize: `${template.nameStyle.fontSize}px`,
                color: template.nameStyle.color,
                lineHeight: "1.6",
                direction: "rtl",
              }}
            >
              {name}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CardPreview.displayName = "CardPreview";
export default CardPreview;
