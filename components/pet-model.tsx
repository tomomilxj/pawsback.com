"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Box } from "@react-three/drei"
import type * as THREE from "three"

interface PetModelProps {
  species: "dog" | "cat"
  activeZone: "head" | "belly" | null
  onHeadClick: () => void
  onBellyClick: () => void
}

export default function PetModel({ species, activeZone, onHeadClick, onBellyClick }: PetModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [hoverZone, setHoverZone] = useState<"head" | "belly" | null>(null)

  // Breathing animation
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime()
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.1
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.05
    }
  })

  const color = species === "dog" ? "#d4a574" : "#e8e8e8"

  return (
    <group ref={groupRef}>
      {/* Body */}
      <Sphere args={[1, 32, 32]} position={[0, -0.5, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.8} metalness={0.2} />
      </Sphere>

      {/* Head - Clickable Zone */}
      <group
        position={[0, 0.8, 0.3]}
        onClick={onHeadClick}
        onPointerOver={() => setHoverZone("head")}
        onPointerOut={() => setHoverZone(null)}
      >
        <Sphere args={[0.6, 32, 32]} castShadow receiveShadow>
          <meshStandardMaterial
            color={color}
            roughness={0.8}
            metalness={0.2}
            emissive={hoverZone === "head" || activeZone === "head" ? "#ffffff" : "#000000"}
            emissiveIntensity={hoverZone === "head" || activeZone === "head" ? 0.2 : 0}
          />
        </Sphere>

        {/* Eyes */}
        <Sphere args={[0.1, 16, 16]} position={[-0.2, 0.1, 0.5]}>
          <meshStandardMaterial color="#000000" />
        </Sphere>
        <Sphere args={[0.1, 16, 16]} position={[0.2, 0.1, 0.5]}>
          <meshStandardMaterial color="#000000" />
        </Sphere>

        {/* Nose */}
        <Sphere args={[0.08, 16, 16]} position={[0, -0.1, 0.55]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Sphere>

        {/* Ears */}
        {species === "dog" ? (
          <>
            <Box args={[0.2, 0.5, 0.1]} position={[-0.4, 0.3, 0]} rotation={[0, 0, -0.3]}>
              <meshStandardMaterial color={color} />
            </Box>
            <Box args={[0.2, 0.5, 0.1]} position={[0.4, 0.3, 0]} rotation={[0, 0, 0.3]}>
              <meshStandardMaterial color={color} />
            </Box>
          </>
        ) : (
          <>
            <Box args={[0.2, 0.4, 0.1]} position={[-0.3, 0.4, 0]} rotation={[0, 0, -0.5]}>
              <meshStandardMaterial color={color} />
            </Box>
            <Box args={[0.2, 0.4, 0.1]} position={[0.3, 0.4, 0]} rotation={[0, 0, 0.5]}>
              <meshStandardMaterial color={color} />
            </Box>
          </>
        )}
      </group>

      {/* Belly - Clickable Zone */}
      <Sphere
        args={[0.7, 32, 32]}
        position={[0, -0.3, 0.5]}
        onClick={onBellyClick}
        onPointerOver={() => setHoverZone("belly")}
        onPointerOut={() => setHoverZone(null)}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={color}
          roughness={0.7}
          metalness={0.1}
          emissive={hoverZone === "belly" || activeZone === "belly" ? "#ffffff" : "#000000"}
          emissiveIntensity={hoverZone === "belly" || activeZone === "belly" ? 0.2 : 0}
        />
      </Sphere>

      {/* Legs */}
      <Box args={[0.2, 0.6, 0.2]} position={[-0.5, -1.3, 0.3]} castShadow>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.2, 0.6, 0.2]} position={[0.5, -1.3, 0.3]} castShadow>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.2, 0.6, 0.2]} position={[-0.5, -1.3, -0.3]} castShadow>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.2, 0.6, 0.2]} position={[0.5, -1.3, -0.3]} castShadow>
        <meshStandardMaterial color={color} />
      </Box>

      {/* Tail */}
      {species === "dog" ? (
        <Box args={[0.15, 0.8, 0.15]} position={[0, 0, -1]} rotation={[0.5, 0, 0]} castShadow>
          <meshStandardMaterial color={color} />
        </Box>
      ) : (
        <Box args={[0.1, 1, 0.1]} position={[0, 0.2, -0.8]} rotation={[1.2, 0, 0]} castShadow>
          <meshStandardMaterial color={color} />
        </Box>
      )}
    </group>
  )
}
