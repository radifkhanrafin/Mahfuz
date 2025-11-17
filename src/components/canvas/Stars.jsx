import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1200), { radius: 1.2 }) // optimized: 1200 points
  );

  const isVisible = useRef(false);

  // ⭐ Freeze animation when not visible for smooth scroll
  const handleVisibility = () => {
    const rect = ref.current?.parentNode?.getBoundingClientRect();
    isVisible.current = rect && rect.top < window.innerHeight && rect.bottom > 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    handleVisibility();
    return () => window.removeEventListener("scroll", handleVisibility);
  }, []);

  useFrame((state, delta) => {
    if (!isVisible.current) return;
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 40;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // optimize retina rendering
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
