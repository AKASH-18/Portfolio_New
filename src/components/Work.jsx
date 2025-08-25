import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./partials/ProjectCard";

export default function Work() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="section" id="work">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Work
        </motion.h2>

        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A selection of projects—from games to utilities—built to learn.
        </motion.p>

        <div className="cards">
          <AnimatePresence>
            {projects.slice(0, visibleCount).map((p, i) => (
              <motion.div
                key={p.slug}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < projects.length && (
          <motion.div
            style={{ textAlign: "center", marginTop: "24px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              className="btn glow"
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Load More
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
