import Lottie from "lottie-react";
import "./Hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex" id="about">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./portfolio-modified.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Frontend Developer{" / "}
          <span style={{ color: "rgb(93, 188, 252)" }}>React.Js</span>.
        </motion.h1>

        <p className="sub-title">
          Junior React Frontend Developer with a passion for building responsive
          web applications. ProficientinReact.js, HTML, CSS, and JavaScript.
          Eager to learn and contribute in a collaborative
          teamenvironment,dedicated to staying updated on industry best
          practices and emerging technologies tocontinuouslyimprove skills and
          deliver innovative solutions.
        </p>

        <div className="all-icons flex">
          <a href="https://github.com/Kareembatisha" target="_blank">
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/kareem-batisha-545b65239/"
            target="_blank"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
