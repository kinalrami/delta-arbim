export type InsightCatStyle = "amber" | "cyan" | "purple" | "green";
export type InsightFilterCat =
  | "all"
  | "strategy"
  | "immersive"
  | "identity"
  | "engineering";

export type InsightFilterOption = {
  key: InsightFilterCat;
  label: string;
};

export type CodeLine = {
  type: "kw" | "fn" | "cm" | "plain";
  text: string;
};

export type InsightPost = {
  id: string;
  slug: string;
  cat: string;
  catKey: Exclude<InsightFilterCat, "all">;
  catStyle: InsightCatStyle;
  title: string;
  date: string; // yyyy-mm-dd
  dateLabel: string;
  read: string;
  publisher: string;
  excerpt: string;
  code: { lines: readonly CodeLine[] };
  color: string; // hex
  svgType: "circuit" | "blueprint" | "pulse";
};

