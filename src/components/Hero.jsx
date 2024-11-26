// import { HERO_CONTENT } from "../constants/index";
// import profilePic from "../assets/kishoreProfile.jpg";
// import { motion } from "framer-motion";

// const container = (delay) => ({
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 1, delay: delay },
//   },
// });

// const Hero = () => {
//   return (
//     <div className="bordeer-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap">
//         <div className="flex flex-col items-center lg:items-start">
//           <motion.h1
//             // initial={{ x: -100, opacity: 0 }}
//             // animate={{ x: 0, opacity: 1 }}
//             // transition={{ duration: 0.5, delay: 1 }}
//             variants={container(1)}
//             initial="hidden"
//             animate="visible"
//             className="pb-16 text-6xl  font-thin tracking-tight lg:mt-16 lg:text-8xl"
//           >
//             Kishore N
//           </motion.h1>
//           <motion.span
//             variants={container(1)}
//             initial="hidden"
//             animate="visible"
//             className="bg-gradient-to-r from-pink-300 via-slate-500 
//                 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
//           >
//             Full Stack Developer
//           </motion.span>
//           <motion.p
//             variants={container(1)}
//             initial="hidden"
//             animate="visible"
//             className="my-2 max-w-xl py-6 font-light tracking-tighter"
//           >
//             {HERO_CONTENT}
//           </motion.p>
//         </div>
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 3 }}
//           className="w-full lg:w-1/2 lg:p-8"
//         >
//           <div className="flex justify-center">
//             <img src={profilePic} alt="kishore" />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;








import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/kishoreProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, delay: delay }, // Increased duration for smoother motion
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0.5)} // Slight delay for a smooth entry
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
          >
            Kishore N
          </motion.h1>
          <motion.span
            variants={container(1)} // Delayed to follow the name animation
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 
                to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1.5)} // Additional delay for sequential animation
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5, delay: 1 }} // Matches duration and delay for consistency
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center">
            <img src={profilePic} alt="kishore" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

