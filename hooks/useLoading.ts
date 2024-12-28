import { useEffect, useState } from "react";
import { GLTF } from "three/examples/jsm/Addons.js";

export function useLoading(glb: GLTF | null) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minLoadingTime = 2000; // 최소로딩시간
    let loadingTimer: NodeJS.Timeout;

    const preventScroll = (e: TouchEvent) => e.preventDefault();

    const enableScroll = () => {
      document.body.style.overflow = "";
      window.removeEventListener("touchmove", preventScroll);
    };

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
      window.addEventListener("touchmove", preventScroll, { passive: false });
    };

    disableScroll(); // 스크롤 비활성화

    const minimumTimePromise = new Promise((resolve) => {
      loadingTimer = setTimeout(resolve, minLoadingTime); // 최소 로딩 시간
    });

    const glbLoadedPromise = new Promise((resolve) => {
      if (glb) resolve(true); // GLB 로드 완료
    });

    Promise.all([minimumTimePromise, glbLoadedPromise]).then(() => {
      setIsLoading(false);
      enableScroll();
    });

    // unmount
    return () => {
      clearTimeout(loadingTimer);
      enableScroll();
    };
  }, [glb]);

  return isLoading;
}
