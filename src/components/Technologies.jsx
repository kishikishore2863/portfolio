import { RiReactjsLine } from "react-icons/ri";
import { BiLogoSpringBoot, BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import { SiMysql, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";

const inconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-29 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-10"
      >
        <motion.div
          variants={inconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-[#61DAFB]" />{" "}
          {/* React logo color */}
        </motion.div>
        <motion.div
          variants={inconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoSpringBoot className="text-7xl text-[#6DB33F]" />{" "}
          {/* Spring Boot logo color */}
        </motion.div>
        <motion.div
          variants={inconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoMongodb className="text-7xl text-[#47A248]" />{" "}
          {/* MongoDB logo color */}
        </motion.div>
        <motion.div
          variants={inconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-[#4479A1]" />{" "}
          {/* MySQL logo color */}
        </motion.div>
        <motion.div
          variants={inconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoNodejs className="text-7xl text-[#339933]" />{" "}
          {/* Node.js logo color */}
        </motion.div>
        <motion.div
          variants={inconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl text-[#336791]" />{" "}
          {/* PostgreSQL logo color */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;



