import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Rotating geometric wireframe and core
function GeometricCluster({ isMobile }) {
  const meshRef = useRef();
  const innerRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    // Gentle rotation
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.25;

      // Mouse influence with gentle damping
      const targetX = state.pointer.y * 0.4;
      const targetY = state.pointer.x * 0.4;
      meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.05;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.3;
      innerRef.current.rotation.y -= delta * 0.35;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[isMobile ? 1.6 : 2.1, 1]} />
        <meshStandardMaterial
          wireframe
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[isMobile ? 0.9 : 1.2, 0]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#6366f1"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>

      {/* Orbital Tech Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[isMobile ? 2.3 : 2.9, 0.02, 16, 64]} />
        <meshBasicMaterial color="#34d399" opacity={0.6} transparent />
      </mesh>
    </group>
  );
}

// Subtle interactive particle constellation
function Particles({ count = 40, isMobile }) {
  const actualCount = isMobile ? 20 : count;
  const pointsRef = useRef();

  const [positions] = useMemo(() => {
    const pos = new Float32Array(actualCount * 3);
    for (let i = 0; i < actualCount; i++) {
      const radius = 3.5 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [pos];
  }, [actualCount]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.04 : 0.06}
        color="#38bdf8"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

// Error Boundary Fallback for WebGL
class SceneErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="hero-scene-fallback">
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)',
            border: '1px dashed rgba(56,189,248,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-sky)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem'
          }}>
            &lt;Dev Architecture /&gt;
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="hero-scene-container" aria-hidden="true">
      <SceneErrorBoundary>
        <Canvas
          className="hero-scene-canvas"
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, isMobile ? 1.5 : 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#38bdf8" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
            <GeometricCluster isMobile={isMobile} />
          </Float>

          <Particles isMobile={isMobile} />
        </Canvas>
      </SceneErrorBoundary>
    </div>
  );
}
