import React, { useState, useEffect } from "react";
import { GLTF } from "three/examples/jsm/Addons.js";

type Callback = (...args: any[]) => void;

export default function Laptop({ glb }: { glb: GLTF }) {
  const [transform, setTransform] = useState({
    scale: [7, 7, 7],
    position: [-5, 0, 0],
  });

  useEffect(() => {
    // Debounce 함수 정의
    const debounce = (func: Callback, delay: number): Callback => {
      let timer: NodeJS.Timeout;
      return (...args: any[]) => {
        clearTimeout(timer); // 기존 타이머 제거
        timer = setTimeout(() => func(...args), delay); // 새로운 타이머 실행
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

    const handleResize = debounce(updateTransform, 200);

    updateTransform(); // 초기 호출
    window.addEventListener("resize", handleResize); // 디바운스된 함수 등록
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
