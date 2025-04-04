import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Box } from "@mui/material";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec2 resolution;
  uniform float u_time;
  varying vec2 vUv;

  vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263, 0.416, 0.557);

    return a + b*cos(6.283185 * (c*t+d));
  }
  
  void main() {

    // Centering Coordinates
    vec2 uv = (vUv * 2.0 - 1.0);

    // Original Distance From center
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);

    for(float i = 0.0; i < 3.0; ++i){
        uv *= 1.5;
        uv = fract(uv);
        uv -= 0.5;

        float d = length(uv) * exp(-length(uv0));
        vec3 color = palette(length(uv0) + i * .4 + u_time * 0.4);

        d = sin(d * 8. + u_time) / 8.;
        d = abs(d);
        d = pow(0.01 / d, 1.3);

        finalColor += color * d;
    }

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function ShaderPlane() {
  const materialRef = useRef();
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = clock.elapsedTime;
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          u_time: { value: 0.0 },
          resolution: {
            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
          },
        }}
      />
    </mesh>
  );
}

export default function ShaderCanvas1() {
  return (
    <Box
      sx={{
        width: { xs: "90vw", sm: "60vw", md: "47vw", lg: "36vw", xl: "30vw" },
        height: { xs: "90vw", sm: "60vw", md: "47vw", lg: "36vw", xl: "30vw" },
      }}
    >
      <Canvas
        resize={{ scroll: false }}
        orthographic
        camera={{ position: [0, 0, 5], zoom: 100 }}
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "1 / 1",
          borderRadius: "14px",
        }}
        frameloop="always"
      >
        <ShaderPlane />
      </Canvas>
    </Box>
  );
}
