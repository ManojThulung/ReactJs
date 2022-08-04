import { motion } from "framer-motion";
import { useState } from "react";

function Box1() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimating ? "75vw" : 0,
          opacity: isAnimating ? 1 : 0.4,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{ opacity: 0.4 }} //initial state of box before animation
        transition={{
          type: "spring",
          stiffness: 60, //speed of the box
          damping: 10, //spring motion
        }}
        onClick={() => setIsAnimating((prev) => !prev)}
      ></motion.div>
    </div>
  );
}

export default Box1;
