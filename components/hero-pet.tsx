"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

function GoldenRetriever() {
  const dogRef = useRef<THREE.Group>(null)

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={dogRef}>
        {/* Body - larger and more realistic proportions */}
        <mesh position={[0, -0.3, 0]} castShadow>
          <capsuleGeometry args={[0.7, 1.8, 24, 48]} />
          <meshStandardMaterial color="#DAA520" roughness={0.8} metalness={0.1} />
        </mesh>

        {/* Chest - lighter color */}
        <mesh position={[0, -0.5, 0.5]} castShadow>
          <sphereGeometry args={[0.5, 24, 24]} />
          <meshStandardMaterial color="#F4E4C1" roughness={0.85} />
        </mesh>

        {/* Head */}
        <group position={[0, 1, 0.4]}>
          {/* Main head */}
          <mesh castShadow>
            <boxGeometry args={[0.7, 0.6, 0.8]} />
            <meshStandardMaterial color="#DAA520" roughness={0.8} />
          </mesh>

          {/* Forehead bump */}
          <mesh position={[0, 0.2, 0.2]} castShadow>
            <sphereGeometry args={[0.35, 24, 24]} />
            <meshStandardMaterial color="#DAA520" roughness={0.8} />
          </mesh>

          {/* Snout */}
          <mesh position={[0, -0.15, 0.5]} castShadow>
            <boxGeometry args={[0.4, 0.35, 0.5]} />
            <meshStandardMaterial color="#C8A060" roughness={0.7} />
          </mesh>

          {/* Nose */}
          <mesh position={[0, -0.15, 0.8]} castShadow>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
          </mesh>

          {/* Eyes */}
          <mesh position={[-0.2, 0.05, 0.5]} castShadow>
            <sphereGeometry args={[0.09, 20, 20]} />
            <meshStandardMaterial color="#2C1810" />
          </mesh>
          <mesh position={[0.2, 0.05, 0.5]} castShadow>
            <sphereGeometry args={[0.09, 20, 20]} />
            <meshStandardMaterial color="#2C1810" />
          </mesh>

          {/* Eye highlights */}
          <mesh position={[-0.18, 0.08, 0.55]} castShadow>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0.22, 0.08, 0.55]} castShadow>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </mesh>

          {/* Ears - floppy golden retriever style */}
          <mesh position={[-0.35, 0.25, 0.1]} rotation={[0.3, 0, -0.6]} castShadow>
            <boxGeometry args={[0.15, 0.7, 0.3]} />
            <meshStandardMaterial color="#B8860B" roughness={0.9} />
          </mesh>
          <mesh position={[0.35, 0.25, 0.1]} rotation={[0.3, 0, 0.6]} castShadow>
            <boxGeometry args={[0.15, 0.7, 0.3]} />
            <meshStandardMaterial color="#B8860B" roughness={0.9} />
          </mesh>
        </group>

        {/* Legs - more realistic golden retriever legs */}
        <mesh position={[-0.35, -1.5, 0.5]} castShadow>
          <cylinderGeometry args={[0.18, 0.15, 1.2, 16]} />
          <meshStandardMaterial color="#C8A060" roughness={0.8} />
        </mesh>
        <mesh position={[0.35, -1.5, 0.5]} castShadow>
          <cylinderGeometry args={[0.18, 0.15, 1.2, 16]} />
          <meshStandardMaterial color="#C8A060" roughness={0.8} />
        </mesh>
        <mesh position={[-0.35, -1.5, -0.5]} castShadow>
          <cylinderGeometry args={[0.18, 0.15, 1.2, 16]} />
          <meshStandardMaterial color="#C8A060" roughness={0.8} />
        </mesh>
        <mesh position={[0.35, -1.5, -0.5]} castShadow>
          <cylinderGeometry args={[0.18, 0.15, 1.2, 16]} />
          <meshStandardMaterial color="#C8A060" roughness={0.8} />
        </mesh>

        {/* Paws */}
        <mesh position={[-0.35, -2.15, 0.5]} castShadow>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#8B7355" roughness={0.9} />
        </mesh>
        <mesh position={[0.35, -2.15, 0.5]} castShadow>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#8B7355" roughness={0.9} />
        </mesh>
        <mesh position={[-0.35, -2.15, -0.5]} castShadow>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#8B7355" roughness={0.9} />
        </mesh>
        <mesh position={[0.35, -2.15, -0.5]} castShadow>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#8B7355" roughness={0.9} />
        </mesh>

        {/* Tail - fluffy and curved */}
        <group position={[0, -0.2, -1]} rotation={[0.6, 0, 0]}>
          <mesh castShadow>
            <coneGeometry args={[0.15, 0.9, 16]} />
            <meshStandardMaterial color="#DAA520" roughness={0.9} />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

export function HeroPet() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0.5, 8]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate
          autoRotateSpeed={0.8}
        />

        {/* Lighting - softer and more natural */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[8, 8, 5]} intensity={1.2} castShadow shadow-mapSize={[2048, 2048]} />
        <pointLight position={[-5, 3, -3]} intensity={0.4} color="#FFF8E7" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} castShadow />

        {/* Environment */}
        <Environment preset="apartment" />

        {/* Scene */}
        <GoldenRetriever />

        {/* Ground with subtle shadow */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.8, 0]} receiveShadow>
          <circleGeometry args={[5, 64]} />
          <meshStandardMaterial color="#fafafa" roughness={1} />
        </mesh>
      </Canvas>

      {/* Minimalist instruction */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <p className="text-xs text-zinc-400">拖动查看</p>
      </div>
    </div>
  )
}
