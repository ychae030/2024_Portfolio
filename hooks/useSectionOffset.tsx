import { useEffect, useRef } from "react";

export type Section = {
  id: string;
  offsetTop: number;
  height: number;
};

export default function useSectionOffset(sectionIds: string[]) {
  const sectionsRef = useRef<Section[]>();
  useEffect(() => {
    const calculateSections = () => {
      sectionsRef.current = sectionIds.map((id) => {
        const section = document.getElementById(id);
        return {
          id,
          offsetTop: section ? section.offsetTop - 100 : 0,
          height: section ? section.offsetHeight : 0,
        };
      });
    };

    calculateSections();

    // 창 크기 변경 시 재계산
    window.addEventListener("resize", calculateSections);
    return () => window.removeEventListener("resize", calculateSections);
  }, [sectionIds]);

  return sectionsRef.current;
}
