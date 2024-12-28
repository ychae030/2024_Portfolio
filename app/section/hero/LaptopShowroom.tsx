"use client";

import React from "react";
import Laptop from "./Laptop";
import { Canvas } from "@react-three/fiber";
import ScrollCamera from "./ScrollCamera";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import Loading from "../../components/Loading";
import { useLoading } from "@/hooks/useLoading";

export default function LaptopShowroom() {
  const glb = useLoader(GLTFLoader, "/models/laptop.glb"); // GLTF 파일 로드
  const isLoading = useLoading(glb); // 로딩 상태 관리

  if (isLoading) {
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
