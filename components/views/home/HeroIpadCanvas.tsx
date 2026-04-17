"use client";

import type { ThreeEvent } from "@react-three/fiber";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { HeroLayerState } from "@/components/views/home/content";

function Pipe({
  p1,
  p2,
  radius,
  fill,
  edge,
  opacity,
  edgeOpacity,
}: {
  p1: readonly [number, number, number];
  p2: readonly [number, number, number];
  radius: number;
  fill: number;
  edge: number;
  opacity: number;
  edgeOpacity: number;
}) {
  const { pos, quat, length } = useMemo(() => {
    const v1 = new THREE.Vector3(...p1);
    const v2 = new THREE.Vector3(...p2);
    const dir = new THREE.Vector3().subVectors(v2, v1);
    const len = dir.length();
    const mid = new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5);
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize(),
    );
    return { pos: mid, quat: q, length: len };
  }, [p1, p2]);

  return (
    <group position={pos} quaternion={quat}>
      <mesh>
        <cylinderGeometry args={[radius, radius, length, 10]} />
        <meshBasicMaterial color={fill} transparent opacity={opacity} />
        <Edges color={edge} opacity={edgeOpacity} transparent />
      </mesh>
    </group>
  );
}

function ArScene({ layers }: { layers: HeroLayerState }) {
  const masterRef = useRef<THREE.Group>(null);
  const scanPlaneRef = useRef<THREE.Mesh>(null);
  const scanLineRef = useRef<THREE.LineLoop>(null);
  const clashOuterRef = useRef<THREE.Mesh[]>([]);
  const clashRingRef = useRef<THREE.LineSegments[]>([]);

  const gStructRef = useRef<THREE.Group>(null);
  const gWallRef = useRef<THREE.Group>(null);
  const gHVACRef = useRef<THREE.Group>(null);
  const gWaterRef = useRef<THREE.Group>(null);
  const gElecRef = useRef<THREE.Group>(null);
  const gClashRef = useRef<THREE.Group>(null);

  const rot = useRef({ x: 0.18, y: 0.35 });
  const drag = useRef({ active: false, lastX: 0, lastY: 0, auto: true });

  useEffect(() => {
    function onUp() {
      drag.current.active = false;
    }
    function onMove(e: PointerEvent) {
      if (!drag.current.active) return;
      const dx = e.clientX - drag.current.lastX;
      const dy = e.clientY - drag.current.lastY;
      rot.current.y += dx * 0.011;
      rot.current.x += dy * 0.008;
      rot.current.x = Math.max(-0.8, Math.min(0.8, rot.current.x));
      drag.current.lastX = e.clientX;
      drag.current.lastY = e.clientY;
    }
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  useEffect(() => {
    if (gStructRef.current) gStructRef.current.visible = layers.struct;
    if (gWallRef.current) gWallRef.current.visible = layers.wall;
    if (gHVACRef.current) gHVACRef.current.visible = layers.hvac;
    if (gWaterRef.current) gWaterRef.current.visible = layers.water;
    if (gElecRef.current) gElecRef.current.visible = layers.elec;
    if (gClashRef.current) gClashRef.current.visible = layers.clash;
  }, [layers]);

  const floorGridGeom = useMemo(() => {
    const pts: number[] = [];
    for (let i = -8; i <= 8; i++) {
      pts.push(i, 0, -8, i, 0, 8);
      pts.push(-8, 0, i, 8, 0, i);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  const scanLoopGeom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        [-4, 0, -4, 4, 0, -4, 4, 0, 4, -4, 0, 4, -4, 0, -4],
        3,
      ),
    );
    return g;
  }, []);

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    drag.current.active = true;
    drag.current.auto = false;
    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;
  };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (drag.current.auto) rot.current.y += 0.004;
    if (masterRef.current) {
      masterRef.current.rotation.y = rot.current.y;
      masterRef.current.rotation.x = rot.current.x;
    }

    const sy = 0.3 + 3.2 * ((t * 0.4) % 1);
    if (scanPlaneRef.current) {
      scanPlaneRef.current.position.y = sy;
      const m = scanPlaneRef.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.04 + 0.03 * Math.sin(t * 2);
    }
    if (scanLineRef.current) {
      scanLineRef.current.position.y = sy;
    }

    clashOuterRef.current.forEach((m, i) => {
      const ph = t * 2 + i * 0.8;
      const s = 1 + 0.35 * Math.sin(ph);
      m.scale.setScalar(s);
      const mat = m.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.1 + 0.2 * Math.abs(Math.sin(ph));
    });

    clashRingRef.current.forEach((m, i) => {
      m.rotation.y = t * 0.8 + i;
      m.rotation.x = Math.sin(t + i) * 0.3;
    });
  });

  const clashPoints = useMemo<[number, number, number][]>(() => {
    return [
      [0, 5, 0],
      [3, 5, -2.5],
      [-3, 5, 0],
      [0, 5, 2.5],
    ];
  }, []);

  const clashRingGeom = useMemo(() => {
    const torus = new THREE.TorusGeometry(0.25, 0.02, 8, 24);
    const edges = new THREE.EdgesGeometry(torus);
    torus.dispose();
    return edges;
  }, []);

  return (
    <>
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.05, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial color={0x0a0a0a} />
      </mesh>

      <lineSegments geometry={floorGridGeom}>
        <lineBasicMaterial color={0x1a1a1a} transparent opacity={0.8} />
      </lineSegments>

      <group ref={masterRef} onPointerDown={onPointerDown}>
        <group ref={gStructRef}>
          {[
            [-3, 3.25, -3],
            [-3, 3.25, 3],
            [3, 3.25, -3],
            [3, 3.25, 3],
            [0, 3.25, -3],
            [0, 3.25, 3],
            [-3, 3.25, 0],
            [3, 3.25, 0],
          ].map(([x, y, z]) => (
            <mesh key={`col-${x}-${z}`} position={[x, y, z]}>
              <boxGeometry args={[0.25, 6.5, 0.25]} />
              <meshBasicMaterial
                color={0x475569}
                transparent
                opacity={0.15}
                side={THREE.DoubleSide}
              />
              <Edges color={0x94a3b8} opacity={0.9} transparent />
            </mesh>
          ))}

          {[1.1, 2.2, 3.3, 4.4, 5.5, 6.5].map((y) => (
            <group key={`beam-${y}`}>
              <line>
                <bufferGeometry
                  attach="geometry"
                  onUpdate={(g) => {
                    const pts = [
                      new THREE.Vector3(-3, y, -3),
                      new THREE.Vector3(3, y, -3),
                      new THREE.Vector3(3, y, 3),
                      new THREE.Vector3(-3, y, 3),
                      new THREE.Vector3(-3, y, -3),
                    ];
                    g.setFromPoints(pts);
                  }}
                />
                <lineBasicMaterial
                  color={0x64748b}
                  transparent
                  opacity={0.5}
                />
              </line>

              {y < 6.5 ? (
                <mesh position={[0, y + 1.0, 0]}>
                  <boxGeometry args={[6.1, 0.1, 6.1]} />
                  <meshBasicMaterial
                    color={0x334155}
                    transparent
                    opacity={0.3}
                    side={THREE.DoubleSide}
                  />
                  <Edges color={0x94a3b8} opacity={0.25} transparent />
                </mesh>
              ) : null}
            </group>
          ))}
        </group>

        <group ref={gWallRef}>
          {([
            [6.1, 5.5, 0.12, 0, 2.75, -3],
            [6.1, 5.5, 0.12, 0, 2.75, 3],
            [0.12, 5.5, 6.1, -3, 2.75, 0],
            [0.12, 5.5, 6.1, 3, 2.75, 0],
          ] as const).map(([w, h, d, x, y, z]) => (
            <mesh key={`wall-${x}-${z}`} position={[x, y, z]}>
              <boxGeometry args={[w, h, d]} />
              <meshBasicMaterial
                color={0x3b82f6}
                transparent
                opacity={0.18}
                side={THREE.DoubleSide}
              />
              <Edges color={0x60a5fa} opacity={0.6} transparent />
            </mesh>
          ))}
        </group>

        <group ref={gHVACRef}>
          {(
            [
              [[-3, 5, -2.5], [3, 5, -2.5], 0.18],
              [[-3, 5, 2.5], [3, 5, 2.5], 0.18],
              [[0, 5, -3], [0, 5, 3], 0.22],
              [[-3, 5, 0], [3, 5, 0], 0.22],
              [[-2, 4, -2.5], [-2, 5, -2.5], 0.12],
              [[2, 4, 2.5], [2, 5, 2.5], 0.12],
            ] as const
          ).map(([a, b, r], idx) => (
            <Pipe
              key={`hvac-${idx}`}
              p1={a}
              p2={b}
              radius={r}
              fill={0xef4444}
              edge={0xf87171}
              opacity={0.8}
              edgeOpacity={0.95}
            />
          ))}
        </group>

        <group ref={gWaterRef}>
          {(
            [
              [[-3, 3.8, -2], [3, 3.8, -2], 0.08],
              [[-3, 3.8, 2], [3, 3.8, 2], 0.08],
              [[-2, 3.8, -3], [-2, 3.8, 3], 0.08],
              [[2, 3.8, -3], [2, 3.8, 3], 0.08],
              [[-2, 0, -2], [-2, 3.8, -2], 0.07],
              [[2, 0, 2], [2, 3.8, 2], 0.07],
            ] as const
          ).map(([a, b, r], idx) => (
            <Pipe
              key={`water-${idx}`}
              p1={a}
              p2={b}
              radius={r}
              fill={0x0ea5e9}
              edge={0x38bdf8}
              opacity={0.85}
              edgeOpacity={0.95}
            />
          ))}
        </group>

        <group ref={gElecRef}>
          {(
            [
              [[-3, 2.5, -1.5], [3, 2.5, -1.5], 0.055],
              [[-3, 2.5, 1.5], [3, 2.5, 1.5], 0.055],
              [[-1.5, 2.5, -3], [-1.5, 2.5, 3], 0.055],
              [[1.5, 2.5, -3], [1.5, 2.5, 3], 0.055],
              [[-3, 5.2, 0], [3, 5.2, 0], 0.05],
            ] as const
          ).map(([a, b, r], idx) => (
            <Pipe
              key={`elec-${idx}`}
              p1={a}
              p2={b}
              radius={r}
              fill={0x22c55e}
              edge={0x4ade80}
              opacity={0.85}
              edgeOpacity={0.95}
            />
          ))}
        </group>

        <group
          ref={(g) => {
            gClashRef.current = g;
            clashOuterRef.current = [];
            clashRingRef.current = [];
          }}
        >
          {clashPoints.map(([x, y, z], i) => (
            <group key={`clash-${i}`} position={[x, y, z]}>
              <mesh
                ref={(m) => {
                  if (m) clashOuterRef.current[i] = m;
                }}
              >
                <sphereGeometry args={[0.2, 12, 12]} />
                <meshBasicMaterial
                  color={0xf87171}
                  transparent
                  opacity={0.25}
                />
              </mesh>
              <mesh>
                <sphereGeometry args={[0.1, 10, 10]} />
                <meshBasicMaterial
                  color={0xf87171}
                  transparent
                  opacity={0.9}
                />
              </mesh>
              <lineSegments
                ref={(m) => {
                  if (m) clashRingRef.current[i] = m;
                }}
                geometry={clashRingGeom}
              >
                <lineBasicMaterial
                  color={0xff6666}
                  transparent
                  opacity={0.8}
                />
              </lineSegments>
            </group>
          ))}
        </group>

        {(
          [
            [-3, 6.5, -3],
            [-3, 6.5, 3],
            [3, 6.5, -3],
            [3, 6.5, 3],
            [0, 6.5, 0],
            [-3, 0, -3],
            [-3, 0, 3],
            [3, 0, -3],
            [3, 0, 3],
            [0, 3.3, -3],
            [0, 3.3, 3],
          ] as const
        ).map(([x, y, z]) => (
          <mesh key={`a-${x}-${y}-${z}`} position={[x, y, z]}>
            <sphereGeometry args={[0.07, 8, 8]} />
            <meshBasicMaterial color={0xff9933} />
          </mesh>
        ))}
      </group>

      <mesh
        ref={scanPlaneRef}
        rotation-x={-Math.PI / 2}
        position={[0, 0.3, 0]}
      >
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial
          color={0x1dcfcf}
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
      <lineLoop
        ref={scanLineRef}
        geometry={scanLoopGeom}
        position={[0, 0.3, 0]}
      >
        <lineBasicMaterial color={0x1dcfcf} transparent opacity={0.6} />
      </lineLoop>
    </>
  );
}

export function HeroIpadCanvas({ layers }: { layers: HeroLayerState }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 42, near: 0.1, far: 300, position: [9, 7, 14] }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 2, 0);
      }}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <color attach="background" args={["#000000"]} />
      <ArScene layers={layers} />
    </Canvas>
  );
}

