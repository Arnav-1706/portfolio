import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "DSA Problems Solved",
    count: 400,
    color: "border-neon-blue",
    text: "text-neon-blue",
  },
  {
    id: 2,
    title: "Day Coding Streak",
    count: 130,
    color: "border-orange-500",
    text: "text-orange-500",
  },
  {
    id: 3,
    title: "Full Stack Projects",
    count: 7,
    color: "border-neon-purple",
    text: "text-neon-purple",
  },
];

const certificates = [
  {
    id: 1,
    title: "DSA using C/C++",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-1a63cab0-968e-45f4-a528-bda8cceeff16/",
  },
  {
    id: 2,
    title: "C++11, STL, Exception Handling",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-bbb5f4fe-a0ff-4b37-8fe5-685044dac600/",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/fccf82a9e07-b196-4b47-aab1-a0de6a315e42/responsive-web-design",
  },
];

const Achievements = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-white">

      {/* TITLE */}
      <div className="mb-12 text-center border-b-2 border-neon-purple pb-4">
        <h2 className="text-3xl font-pixel tracking-widest">
          ACHIEVEMENTS_
        </h2>
      </div>


      {/* ACHIEVEMENTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`bg-dark-800 p-8 border-l-4 ${item.color}
            hover:scale-105 hover:border-neon-purple
            transition duration-300 shadow-lg`}
          >

            <div className={`text-5xl font-black mb-2 ${item.text}`}>
              {item.count}+
            </div>

            <p className="font-pixel text-xs text-gray-400 tracking-wider">
              {item.title.toUpperCase()}
            </p>

          </motion.div>
        ))}

      </div>



      {/* CERTIFICATES */}
      <div className="mt-16">

        <h2 className="text-2xl font-pixel mb-6 border-b border-white/20 pb-2">
          CERTIFICATES_
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {certificates.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-800 border border-dark-700 p-6
              hover:border-neon-blue hover:shadow-[0_0_15px_#00f0ff]
              transition duration-300 flex flex-col justify-between"
            >

              <div>
                <p className="text-lg font-semibold">
                  {c.title}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  {c.provider}
                </p>
              </div>

              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm px-3 py-1 border border-neon-blue
                text-neon-blue hover:bg-neon-blue hover:text-black
                transition text-center"
              >
                View Certificate
              </a>

            </motion.div>
          ))}

        </div>

      </div>



      {/* QUOTE */}
      <div className="mt-16 bg-dark-800/50 p-6 border border-dark-700 text-center">

        <p className="italic text-gray-300">
          "Consistency beats talent when talent doesn't work hard."
        </p>

      </div>

    </div>
  );
};

export default Achievements;