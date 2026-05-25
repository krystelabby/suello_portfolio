import profileDefault from "./PROFILE PIC.png";
import profileHover from "./Profile pic 2.jpg";
import cvPdf from "./CV.pdf";

import projectLay1 from "./projects/lay1.jpg";
import projectLay2 from "./projects/lay2.jpg";
import projectLay3 from "./projects/lay3.jpg";
import projectLay4 from "./projects/lay4.jpg";
import projectLay5 from "./projects/lay5.jpg";
import projectLay6 from "./projects/lay6.jpg";
import projectLay7 from "./projects/lay7.jpg";

export const assets = {
  profileDefault,
  profileHover,
  cvPdf,
};

const certificateModules = import.meta.glob<string>(
  "./certificates/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

/** Uploaded certificate filename (no extension) → portfolio imageKey */
const certificateFilenameToKey: Record<string, string> = {
  "CISCO Introduction to Packet Tracer": "cisco-packet-tracer",
  "Social and Professional Issues I": "social-professional-issues",
  "Final Pitching Competition Level App 2.0": "final-pitching",
  "Advance Seminar - PT Interpretation": "advance-seminar-pt",
  "Advance Seminar – PT Interpretation": "advance-seminar-pt",
  "Advance Seminar Series Day 1": "advance-seminar-day1",
  "Advance Seminar Series Day 2": "advance-seminar-day2",
  "Tree Planting Cert": "tree-planting",
};

export const certificateImages: Record<string, string> = {};
for (const [path, url] of Object.entries(certificateModules)) {
  const filename = path.split("/").pop() ?? "";
  const baseName = filename.replace(/\.[^.]+$/i, "");
  const key = certificateFilenameToKey[baseName];
  if (key) {
    certificateImages[key] = url;
  }
}

/** Project images lay1–lay7 mapped to portfolio project order */
export const projectImages: Record<string, string> = {
  "sudoku-bloom": projectLay1,
  "asf-maptrack": projectLay2,
  "pacific-northwest-xray": projectLay3,
  "convenience-pos": projectLay4,
  hushspace: projectLay5,
  "mobile-flutter": projectLay6,
  "medicine-ims": projectLay7,
};

export function getCertificateImage(imageKey: string): string | undefined {
  return certificateImages[imageKey];
}

export function getProjectImage(imageKey: string): string | undefined {
  return projectImages[imageKey];
}
