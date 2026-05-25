import { useEffect, useState } from "react";
import type { NavSectionId } from "../data/portfolio";

export function useScrollSpy(sectionIds: readonly NavSectionId[]) {
  const [activeId, setActiveId] = useState<NavSectionId>("home");

  useEffect(() => {
    const uniqueIds = [...new Set(sectionIds)];
    const sections = uniqueIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id as NavSectionId);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
