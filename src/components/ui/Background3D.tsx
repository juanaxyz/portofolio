import { useEffect, useRef } from "react";
import { setupScene, createOrbits, animateOrbits, handleWindowResize } from "../../utils/three-setup";

export function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const { scene, camera, renderer, width, height } = setupScene(containerRef.current);
    const orbits = createOrbits(scene);

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    const handleResize = () => {
      handleWindowResize(renderer, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      animateOrbits(orbits, scrollYRef.current);
      renderer.render(scene, camera);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: "-1",
        pointerEvents: "none",
      }}
    />
  );
}
