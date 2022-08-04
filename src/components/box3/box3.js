import { motion } from "framer-motion";

function Box3() {
  const boxVarient = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5, //deilay 0.5 second the animation
        when: "beforeChildren", // allow animation before its children (ie. <li>)
        staggerChildren: 0.2, //This will stagger its children (ie. the <li> motion will occur serially)
      },
    },
  };

  const listVarient = {
    hidden: {
      x: -25,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVarient}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((item) => (
          <motion.li className="boxItem" variants={listVarient}></motion.li>
        ))}
      </motion.div>
    </div>
  );
}

export default Box3;
