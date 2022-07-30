import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei/core";

const animatedspahere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color='#8352FD'
        attach='material'
        distort={0.3}
        speed={1}
        roughness={0}
      />
    </Sphere>
  );
};

export default animatedspahere;
