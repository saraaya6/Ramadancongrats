export interface TemplateConfig {
  id: string;
  name: string;
  path: string;
  namePosition: {
    x: number;
    y: number;
    width: number;
  };
  nameStyle: {
    fontSize: number;
    color: string;
  };
}
// في ملف ramadancon/src/config/templates.ts

export const TEMPLATES: TemplateConfig[] = [
  {
    id: "template1",
    name: "كلاسيكي أسود",
    path: "/templates/template1.png",
    namePosition: {
      x: 540,      // المنتصف أفقيًا
      y: 1505,     // قمنا بتقليل الرقم من 1522 إلى 1480 لرفعه داخل المربع الزجاجي
      width: 900,  
    },
    nameStyle: {
      fontSize: 85, 
      color: "#333333",
    },
  },
  {
    id: "template2",
    name: "ذهبي فاخر",
    path: "/templates/template2.png",
    namePosition: {
      x: 540,
      y: 1505,     // نفس التعديل لرفع النص للأعلى قليلاً
      width: 900,
    },
    nameStyle: {
      fontSize: 85,
      color: "#6B5B3E",
    },
  },
];

export const CARD_WIDTH = 1080;
export const CARD_HEIGHT = 1920;
export const DEFAULT_NAME = "الاسم هنا";