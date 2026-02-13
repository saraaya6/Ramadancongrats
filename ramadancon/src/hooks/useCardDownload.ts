import { useCallback, useState } from "react";
import html2canvas from "html2canvas";
import { CARD_WIDTH, CARD_HEIGHT } from "@/config/templates";

export const useCardDownload = () => {
  const [downloading, setDownloading] = useState(false);

  const download = useCallback(async (element: HTMLDivElement | null) => {
    if (!element) return;
    setDownloading(true);

    try {
      const canvas = await html2canvas(element, {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        scale: 1,
        useCORS: true,
        allowTaint: false,
        backgroundColor: null,
      });

      const link = document.createElement("a");
      link.download = "ramadan-greeting-1080x1920.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setDownloading(false);
    }
  }, []);

  return { download, downloading };
};
