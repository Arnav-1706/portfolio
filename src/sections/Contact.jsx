import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = ({ setSection, isSoundEnabled, playClick, playHover }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 flex flex-col h-full min-h-[60vh]">

      <div className="mb-10 border-b-2 border-neon-blue pb-4">
        <h2 className="text-3xl font-pixel text-white tracking-widest">
          CONNECT_
        </h2>
      </div>


      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-8 font-light">
            I'm currently looking for new opportunities in Software Engineering,
            Machine Learning, and Web Development. Whether you have a question
            or just want to say hi, my inbox is always open!
          </p>


          <div className="space-y-6">

            {/* EMAIL */}
            <a
              href="mailto:kantarnav2@gmail.com"
              className="flex items-center text-gray-400 hover:text-neon-blue transition-colors group"
            >
              <Mail className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
              <span className="font-modern text-lg border-b border-transparent group-hover:border-neon-blue">
                kantarnav2@gmail.com
              </span>
            </a>


            {/* GITHUB */}
            <a
              href="https://github.com/Arnav-1706"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-neon-purple transition-colors group"
            >
              <Github className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
              <span className="font-modern text-lg border-b border-transparent group-hover:border-neon-purple">
                github.com/Arnav-1706
              </span>
            </a>


            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/arnavkant-2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-500 transition-colors group"
            >
              <Linkedin className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
              <span className="font-modern text-lg border-b border-transparent group-hover:border-blue-500">
                linkedin.com/in/arnavkant-2
              </span>
            </a>


            {/* LEETCODE */}
            <a
              href="https://leetcode.com/u/Arnav_Kant/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors group"
            >
              <span className="w-6 h-6 mr-4 flex items-center justify-center font-bold">
                LC
              </span>
              <span className="font-modern text-lg border-b border-transparent group-hover:border-yellow-400">
                leetcode.com/u/Arnav_Kant
              </span>
            </a>

          </div>
        </motion.div>



        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 bg-dark-800 p-6 border border-dark-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          <h3 className="font-pixel text-[12px] text-neon-blue mb-2">
            SEND_TRANSMISSION
          </h3>

          <input
            type="text"
            placeholder="NAME"
            className="bg-dark-900 border border-dark-600 p-3 text-white font-pixel text-[10px] focus:outline-none focus:border-neon-blue"
          />

          <input
            type="email"
            placeholder="EMAIL"
            className="bg-dark-900 border border-dark-600 p-3 text-white font-pixel text-[10px] focus:outline-none focus:border-neon-blue"
          />

          <textarea
            placeholder="MESSAGE_DATA"
            rows="4"
            className="bg-dark-900 border border-dark-600 p-3 text-white font-pixel text-[10px] focus:outline-none focus:border-neon-blue resize-none"
          />

          <button
            type="button"
            className="mt-2 bg-neon-purple/20 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all p-3 flex justify-center items-center font-pixel text-[10px] gap-2"
          >
            <Send className="w-4 h-4" /> TRANSMIT
          </button>
        </motion.form>

      </div>



      {/* FOOTER */}
      <div className="mt-auto pt-16 text-center">
        <p className="font-pixel text-[8px] text-gray-600 tracking-widest">
          DESIGNED & BUILT BY ARNAV KANT // {new Date().getFullYear()} // MERN + ML
        </p>
      </div>

    </div>
  );
};

export default Contact;