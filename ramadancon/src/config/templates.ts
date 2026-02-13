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
      x: 540,
      y: 1456,
      width: 648,
    },
    nameStyle: {
      fontSize: 48,
      color: "#333333",
    },
  },
  {
    id: "template2",
    name: "ذهبي فاخر",
    path: "/templates/template2.png",
    namePosition: {
      x: 540,
      y: 1456,
      width: 648,
    },
    nameStyle: {
      fontSize: 48,
      color: "#6B5B3E",
    },
  },
];

export const CARD_WIDTH = 1080;
export const CARD_HEIGHT = 1920;
export const DEFAULT_NAME = "الاسم هنا";
