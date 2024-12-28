import React, { useState, useEffect } from "react";
import { GLTF } from "three/examples/jsm/Addons.js";

// Callback 타입 정의 (any 제거)
type Callback<T extends unknown[]> = (...args: T) => void;

export default function Laptop({ glb }: { glb: GLTF }) {
  const [transform, setTransform] = useState({
    scale: [7, 7, 7],
    position: [-5, 0, 0],
  });

  useEffect(() => {
    // Debounce 함수 정의
    const debounce = <T extends unknown[]>(
      func: Callback<T>,
      delay: number
    ): Callback<T> => {
      let timer: ReturnType<typeof setTimeout>;
      return (...args: T) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
      };
    };

    // 화면 크기에 따라 scale과 position 업데이트
    const updateTransform = () => {
      if (window.innerWidth < 768) {
        setTransform({ scale: [4, 4, 4], position: [-3.2, 0.6, 0] });
      } else {
        setTransform({ scale: [7, 7, 7], position: [-5, 0, 0] });
      }
    };

    // 디바운스된 함수 생성
    const handleResize = debounce(updateTransform, 200);

    updateTransform(); // 초기 호출
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // 이벤트 리스너 정리
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={5} />
      <primitive
        object={glb.scene}
        scale={transform.scale}
        position={transform.position}
      />
    </>
  );
}
