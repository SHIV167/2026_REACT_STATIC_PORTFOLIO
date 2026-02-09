import { useRef } from "react";
import { motion } from "motion/react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Shiv Kumar Jha</p>
            <p className="subtext">
             Results-driven Full-Stack Web Developer with 8+ years of expertise in designing and deploying high-performance e-commerce solutions and digital platforms. Proven expertise across Magento 2.x, Shopify 2.0, React, and MERN stack technologies. Successfully managed 15+ live projects generating millions in e-commerce revenue.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
{/* Grid 2 */}
<div className="grid-default-color grid-2">
  <div
    ref={grid2Container}
    className="flex items-center justify-center w-full h-full"
  >
    <p className="flex items-end text-5xl text-gray-500">
      Full-Stack Development 
    </p>

    <Card
      style={{ rotate: "75deg", top: "30%", left: "20%" }}
      text="Frontend"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "-30deg", top: "60%", left: "45%" }}
      text="Backend"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
      text="E-Commerce"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "-45deg", top: "55%", left: "0%" }}
      text="APIs"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "20deg", top: "10%", left: "38%" }}
      text="Database"
      containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/html5.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/css3.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in New Delhi (Delhi-NCR), and open to remote and on-site work 
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <p className="text-center text-white text-lg">
              Email me at{" "}
              <CopyEmailButton email="jhashiv5@gmail.com" />
            </p>
          </div>
        </div>

{/* Grid 5 */}
<div className="grid-default-color grid-5 relative flex items-center px-4 md:px-6">
  <div className="relative rounded-lg flex items-center px-4 md:px-6">
    <div className="z-10 w-[60%] text-[0.8rem] leading-normal space-y-2 pr-4 text-white">
      <p className="text-[0.9rem] font-semibold">Technical Skillset:</p>
      <p>
        <strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript (ES6+), Responsive Design, UI/UX, Figma, Photoshop
      </p>
      <p>
        <strong>Backend & Frameworks:</strong> PHP (MVC), Node.js, Express.js, Laravel, MongoDB, RESTful APIs
      </p>
      <p>
        <strong>E-Commerce Platforms:</strong> Magento 2.x (Expert), Shopify 2.0 (Partner Certified), WooCommerce, WordPress, MERN Stack
      </p>
      <p>
        <strong>Cloud & Infrastructure:</strong> AWS, Google Cloud Platform, Docker, Render.com, Git/GitHub
      </p>
      <p>
        <strong>Additional Skills:</strong> Agile/Scrum, API Integration, Performance Optimization, SEO, Digital Marketing
      </p>
    </div>

    <div className="w-[40%] flex justify-center items-center scale-95 md:scale-100">
      <Frameworks />
    </div>
  </div>
</div>




      </div>
    </section>
  );
};

export default About;
