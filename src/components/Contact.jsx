import { motion } from 'framer-motion'

export default function Contact(){
  const field = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p 
          className="lead"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have a question or want to work together? Fill the form and I'll get back to you.
        </motion.p>

        <motion.form 
          className="card" 
          style={{padding:18}} 
          method="POST" 
          action="https://formspree.io/f/your-form-id"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="form-row" variants={field} initial="hidden" whileInView="show">
            <div>
              <label htmlFor="name">Name</label><br/>
              <input className="input" id="name" name="name" required placeholder="Your name"/>
            </div>
            <div>
              <label htmlFor="email">Email</label><br/>
              <input className="input" id="email" name="email" type="email" required placeholder="you@example.com"/>
            </div>
          </motion.div>

          <motion.div style={{marginTop:12}} variants={field} initial="hidden" whileInView="show">
            <label htmlFor="message">Message</label><br/>
            <textarea id="message" name="message" rows="5" className="input" placeholder="Tell me about your project..."></textarea>
          </motion.div>

          <motion.div 
            style={{display:'flex',gap:10,alignItems:'center',marginTop:14}} 
            variants={field} 
            initial="hidden" 
            whileInView="show"
          >
            <motion.button 
              className="btn glow" 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
            <span className="kbd">or email: <a href="mailto:akashakashbisht@gmail.com">akashakashbisht@gmail.com</a></span>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
