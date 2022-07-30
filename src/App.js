import React, { Suspense } from "react";

import "./App.css";
import styled from "styled-components";
import Background from "./Components/background";
import TextSection from "./Components/textsection";
import Box from "./Components/box";
import Sphere from "./Components/animatedspahere";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Components/Model";

function App() {
  return (
    <Wrapper className='App'>
      <Background />
      <TextSection />
      <Canvas className='Canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={[0.5]} />
        <directionalLight
          position={[-2, 5, 2]}
          intensity={[2]}
          castShadow={true}
        />
        <Suspense fallback={null} />

        <Box />
      </Canvas>
      <Canvas className='Canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={[0.5]} />
        <spotLight intensity={[0.5]} />
        <directionalLight position={[-5, 5, 2]} intensity={[2]} />
        <Suspense fallback={null} />

        <Sphere />
      </Canvas>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  background: 1f1144;

  Canvas {
    min-height: 1000px;
  }

  Canvas2 {
    min-height: 500px;
  }
`;
