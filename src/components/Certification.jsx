import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const certificationsData = [
  {
    id: 1,
    title: "The Complete JavaScript Course 2024",
    provider: "Udemy",
    year: "2023",
  },
  {
    id: 2,
    title: "Python Development Intern",
    provider: "LearnFlow",
    year: "2023",
  },
  {
    id: 3,
    title: "Introduction to Cybersecurity",
    provider: "CISCO",
    year: "2023",
  },
  {
    id: 4,
    title: "Linux File Systems Basics",
    provider: "CYBRARY",
    year: "2024",
  },
  {
    id: 5,
    title: "Postman API Fundamentals Student Expert",
    provider: "Postman",
    year: "2024",
  },
];

const certifications = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl"
      >
        Certifications
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {certificationsData.map((cert) => (
          <motion.div
            key={cert.id}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            className="rounded-lg bg-neutral-900 border border-neutral-800 p-6 shadow-lg text-center"
          >
            <h2 className="text-lg font-bold text-white">{cert.title}</h2>
            <p className="text-sm text-gray-400">{cert.provider}</p>
            <span className="text-xs text-gray-500">{cert.year}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default certifications;
