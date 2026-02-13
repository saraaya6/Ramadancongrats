import { useCallback, useState } from "react";
import html2canvas from "html2canvas";
import { CARD_WIDTH, CARD_HEIGHT } from "@/config/templates";

export const useCardDownload = () => {
  const [downloading, setDownloading] = useState(false);

  const download = useCallback(async (element: HTMLDivElement | null) => {
    if (!element) return;
    setDownloading(true);

    try {
      await document.fonts.ready;

      // الحل الجذري: نستخدم خيارات windowWidth و windowHeight لتثبيت بيئة الرسم
      const canvas = await html2canvas(element, {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        scale: 2, // لضمان دقة عالية جداً (4K تقريباً)
        useCORS: true,
        allowTaint: false,
        backgroundColor: null,
        logging: false,
        // إجبار المكتبة على اعتبار حجم النافذة مطابق لحجم الكرت
        windowWidth: CARD_WIDTH,
        windowHeight: CARD_HEIGHT,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById("card-to-capture") as HTMLElement;
          if (clonedElement) {
            // إلغاء أي تحويلات ناتجة عن الـ Scale في المعاينة
            clonedElement.style.transform = "none";
            clonedElement.style.width = `${CARD_WIDTH}px`;
            clonedElement.style.height = `${CARD_HEIGHT}px`;
            clonedElement.style.position = "fixed";
            clonedElement.style.top = "0";
            clonedElement.style.left = "0";
          }
        },
      });

      const link = document.createElement("a");
      link.download = `ramadan-B2b-${Date.now()}.png`;
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