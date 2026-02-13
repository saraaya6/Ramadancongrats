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

export const TEMPLATES: TemplateConfig[] = [
  {
    id: "template1",
    name: "كلاسيكي أسود",
    path: "/templates/template1.png",
    namePosition: {
      x: 540,      // المنتصف أفقيًا
      y: 1522,     // قمت بزيادة الرقم لخفض الاسم للأسفل قليلاً، عدليه حسب الحاجة
      width: 800,   // زدت العرض ليتناسب مع الأسماء الطويلة
    },
    nameStyle: {
      fontSize: 85, // كبرت الخط ليكون متناسباً مع أبعاد 1080x1920
      color: "#333333",
    },
  },
  {
    id: "template2",
    name: "ذهبي فاخر",
    path: "/templates/template2.png",
    namePosition: {
      x: 540,
      y: 1522,     // نفس الإحداثيات للقالب الثاني
      width: 800,
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