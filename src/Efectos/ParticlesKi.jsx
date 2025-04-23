import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./Particles.css";

const ParticlesKi = () => {
  const [height, setHeight] = useState("100vh");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(`${document.body.scrollHeight}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  // Leer variables CSS desde el :root
  const getVar = (name) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const colors = [
    getVar("--particles-color1"),
    getVar("--particles-color2"),
    getVar("--particles-color3"),
    getVar("--particles-color4"),
  ];

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="particles-ki"
      style={{ height }}
      options={{
        fullScreen: { enable: false, zIndex: 0 },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: colors },
          shape: { type: "circle" },
          opacity: {
            value: parseFloat(getVar("--particles-opacity")) || 0.5,
            random: true,
          },
          size: {
            value: {
              min: parseFloat(getVar("--particles-size-min")) || 1,
              max: parseFloat(getVar("--particles-size-max")) || 6,
            },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.5,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: parseFloat(getVar("--particles-speed")) || 1.2,
            direction: "top",
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesKi;
