import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id="home"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          {/* Lighting */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[0, 0, 2]} intensity={1} />

          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut scale={0.35} position={[0.8, -1.5, 0]} />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>

      {/* Social Icons with label */}
      <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-4 z-50 text-white">
        <p className="font-semibold text-lg">Connect with me</p>
        <div className="flex flex-row space-x-6">
          <a
            href="https://www.linkedin.com/in/shiv-kumar-jha-91106955"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-600 hover:text-blue-800 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SHIV167"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="/assets/Shiv_Kumar_Jha_Full_Stack_Developer.pdf"
            download
            className="text-3xl text-green-500 hover:text-green-700 transition"
            aria-label="Download Resume"
          >
            <HiOutlineDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
