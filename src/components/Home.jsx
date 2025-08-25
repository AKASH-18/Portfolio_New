import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="hero container">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.span className="badge" variants={item}>
          HELLO, I'M
        </motion.span>
        <motion.h1 variants={item}>Akash Bisht</motion.h1>
        <motion.p variants={item}>
          I build fast, accessible websites and apps. Photography fan.
          Traveller. Always learning.
        </motion.p>

        <motion.div
          style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}
          variants={item}
        >
          <a className="btn" href="/Akash_Bisht_CV.pdf" download>
            Download CV
          </a>
          <Link className="btn ghost btn btn-glow" to="/work">
            See my work
          </Link>
        </motion.div>

        <motion.div
          style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}
          variants={item}
        >
          {[
            "React",
            "Tailwind",
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "Firebase",
            "Bootstrap",
          ].map((skill) => (
            <motion.span
              key={skill}
              className="badge"
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        src="https://github.com/AKASH-18/Portfolio-Data/blob/main/images/Heroimg1.jpeg?raw=true"
        alt="Developer desk"
        whileHover={{ scale: 1.05 }}
      />
    </section>
  );
}
