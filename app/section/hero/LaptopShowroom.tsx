"use client";

import React from "react";
import Laptop from "./Laptop";
import { Canvas } from "@react-three/fiber";

export default function LaptopShowroom() {
  return (
    <div className="absolute w-full h-full left-0 top-32 mix-blend-exclusion">
      <Canvas style={{ width: "100%", height: "100vh" }} camera={{ fov: 45 }}>
        <Laptop />
      </Canvas>
    </div>
  );
}
