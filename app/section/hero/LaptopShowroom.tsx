"use client";

import React, { useEffect, useState } from "react";
import Laptop from "./Laptop";
import { Canvas } from "@react-three/fiber";
import ScrollCamera from "./ScrollCamera";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Loading from "../../components/Loading";
import { useLoading } from "@/hooks/useLoading";

export default function LaptopShowroom() {
  const [glb, setGlb] = useState<GLTF | null>(null); // GLTF 상태 관리
  const isLoading = useLoading(glb); // 로딩 상태 관리

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/laptop.glb",
      (data: GLTF) => {
        setGlb(data); // GLTF 데이터 설정
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF:", error);
      }
    );
  }, []);

  if (isLoading || !glb) {
    return <Loading />;
  }

  return (
    <div className="absolute w-full h-full left-0 top-32 mix-blend-exclusion">
      <Canvas style={{ width: "100%", height: "100vh" }} camera={{ fov: 45 }}>
        <ScrollCamera />
        <Laptop glb={glb} />
      </Canvas>
    </div>
  );
}
