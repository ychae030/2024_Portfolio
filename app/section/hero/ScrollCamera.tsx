import { calculateCameraPosition } from "@/helpers/calculateCameraPosition";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function ScrollCamera() {
  const { camera } = useThree();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const MIN_SCROLL = 0;
    const MAX_SCROLL = 500;
    const center = [0, 0, 0];

    if (scrollPosition >= MIN_SCROLL && scrollPosition <= MAX_SCROLL) {
      const progress =
        (scrollPosition - MIN_SCROLL) / (MAX_SCROLL - MIN_SCROLL); // 진행비율(0~1)

      // camera Position
      const { x, y, z } = calculateCameraPosition(progress);

      // camera Update
      camera.position.set(x, y, z);
      camera.lookAt(center[0], center[1], center[2]); // 물체 중심을 바라봄
      camera.updateProjectionMatrix();
    }
  }, [scrollPosition, camera]);

  return null;
}
