import { useCallback, useState } from "react";
import html2canvas from "html2canvas";
import { CARD_WIDTH, CARD_HEIGHT } from "@/config/templates";

export const useCardDownload = () => {
  const [downloading, setDownloading] = useState(false);

  const download = useCallback(async (element: HTMLDivElement | null) => {
    if (!element) return;
    setDownloading(true);

    try {
      // التأكد من جاهزية الخطوط تماماً قبل التصوير
      await document.fonts.ready;

      const canvas = await html2canvas(element, {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        scale: 1, // التقاط الصورة بمقاسها الأصلي 1080x1920
        useCORS: true,
        allowTaint: false,
        backgroundColor: null,
        // معالجة التمرير لضمان عدم وجود إزاحة
        scrollX: 0,
        scrollY: 0,
        x: 0,
        y: 0,
        onclone: (clonedDoc) => {
          // نبحث عن العنصر الذي يحمل الـ ref داخل النسخة المستنسخة
          // نستخدم الـ style selector للوصول للعنصر الذي يحتوي على الـ transform
          const clonedElement = clonedDoc.querySelector('[style*="transform"]') as HTMLElement;
          if (clonedElement) {
            clonedElement.style.transform = "none";
            clonedElement.style.top = "0";
            clonedElement.style.left = "0";
            clonedElement.style.position = "absolute";
            clonedElement.style.margin = "0";
            clonedElement.style.padding = "0";
          }
        },
      });

      const link = document.createElement("a");
      link.download = `ramadan-azal-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setDownloading(false);
    }
  }, []);

  return { download, downloading };
};