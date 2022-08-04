import { motion } from "framer-motion";
import { useState } from "react";

function Box2() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        style={{
          opacity: 1,
          background: "blue",
        }}
        drag //drag="x" will allow to drag only x direction.
        dragConstraints={{
          //this will restric the drag area.
          right: 20,
          top: 5,
          bottom: 5,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 1.2,
        }}
      ></motion.div>
    </div>
  );
}

export default Box2;
