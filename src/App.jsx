import { Canvas } from '@react-three/fiber'
import React from 'react';
import './style.css';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Scene from './Scene';
import { Bloom, ToneMapping } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';


const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 45 }}>
        <OrbitControls enableZoom={false}/>
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={2.0} // The bloom intensity.
            luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas >
      <div className="w-full bg-black py-5 flex justify-center">
        <h1
          className="text-white text-4xl font-bold"
          style={{
            textShadow: "0 0 10px #a855f7, 0 0 20px #9333ea, 0 0 30px #c084fc, 0 0 40px #a855f7",
          }}
        >
          Strongest Anime Characters
        </h1>
      </div>

    </>
  );
};

export default App;