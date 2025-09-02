import { motion } from "framer-motion";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -10 },
    show: { opacity: 1, y: 0, rotateX: 0 },
  };

  const data = [
    {
      title: "Skills",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js,",
        "Tailwind",
        "Bootstrap",
      ],
      icon: "💻",
    },
    {
      title: "Experience",
      items: [
        "BSNL ",
        " (Networking & Cyber Security)",
        "Insergo Tech",
        "( Web Dev)",
        "Slog Solution ",
        "(Python Training)",
      ],
      icon: "🛠",
    },
    {
      title: "Education",
      items: [
        "G.B.P Institute of Engineering & Technology",
        "B.Tech (2018–2022) — ",
        "Intermediate & High School",
        "(Kendriya Vidyalaya Pithoragarh)",
      ],
      icon: "🎓",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          className="lead text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I’m a Computer Science graduate who loves crafting clean UIs and
          delightful UX. Outside of code, I enjoy photography and exploring new
          places 🌍.
        </motion.p>

        <div className="resume">
          {data.map((section, i) => (
            <motion.div
              key={section.title}
              className="about-card card"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="">{section.icon}</div>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
