'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 800 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    // Nordeste palette: terracotta, sand, sky
    const palette = [
      new THREE.Color('#c8a97e'),
      new THREE.Color('#8fb3c8'),
      new THREE.Color('#e8d5a0'),
      new THREE.Color('#5b9cbf'),
    ]
    for (let i = 0; i < count; i++) {
      // Scatter particles across a wide field, slightly clustered
      pos[i * 3] = (Math.random() - 0.5) * 22
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14 - 1
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 4
      const c = palette[Math.floor(Math.random() * palette.length)]
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return { positions: pos, colors: col }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = t * 0.02 + mouseRef.current.x * 0.04
    mesh.current.rotation.x = mouseRef.current.y * 0.03
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.75} sizeAttenuation />
    </points>
  )
}

function TopoLines() {
  const group = useRef<THREE.Group>(null)

  const lines = useMemo(() => {
    const result: THREE.BufferGeometry[] = []
    // Create subtle topographic-style contour rings
    for (let ring = 0; ring < 6; ring++) {
      const radius = 3.5 + ring * 1.6
      const pts: THREE.Vector3[] = []
      const segments = 80 + ring * 10
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2
        const noise = Math.sin(angle * 3 + ring) * 0.3 + Math.cos(angle * 5) * 0.15
        const x = Math.cos(angle) * (radius + noise)
        const z = Math.sin(angle) * (radius + noise) * 0.4
        const y = -3.5 + ring * 0.5 + Math.sin(angle * 2) * 0.2
        pts.push(new THREE.Vector3(x, y, z))
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      result.push(geo)
    }
    return result
  }, [])

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.getElapsedTime() * 0.015
  })

  return (
    <group ref={group}>
      {lines.map((geo, i) => (
        // @ts-expect-error - R3F line element
        <line key={i} geometry={geo}>
          <lineBasicMaterial
            color={i % 2 === 0 ? '#c8a97e' : '#3b6e8f'}
            transparent
            opacity={0.08 + i * 0.012}
          />
        </line>
      ))}
    </group>
  )
}

function ConnectionNodes() {
  const group = useRef<THREE.Group>(null)
  // Two key nodes: origin points, connected
  const nodePositions = [
    new THREE.Vector3(-3, 0.5, -2),
    new THREE.Vector3(0, -0.5, -3),
    new THREE.Vector3(3, 0.8, -2),
  ]

  const lineGeo = useMemo(() => {
    const pts = nodePositions
    return new THREE.BufferGeometry().setFromPoints(pts)
  }, [])

  useFrame((state) => {
    if (!group.current) return
    group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1
  })

  return (
    <group ref={group}>
      {/* @ts-expect-error - R3F line */}
      <line geometry={lineGeo}>
        <lineBasicMaterial color="#c8a97e" transparent opacity={0.2} />
      </line>
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshBasicMaterial color={i === 1 ? '#e8c99e' : '#5b9cbf'} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

export function HeroScene() {
  const [mounted, setMounted] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    setMounted(true)
    setPrefersReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#c8a97e" />
        <pointLight position={[-5, -2, 3]} intensity={0.3} color="#5b9cbf" />
        {!prefersReduced && (
          <>
            <Particles count={600} />
            <TopoLines />
            <ConnectionNodes />
          </>
        )}
      </Canvas>
    </div>
  )
}
