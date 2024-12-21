import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Laptop() {
  const glb = useLoader(GLTFLoader, "/models/laptop.glb");
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={5} />
      <primitive object={glb.scene} scale={[7, 7, 7]} position={[-5, 0, 0]} />
    </>
  );
}
