import { motion } from "framer-motion";

const STATS = [
  { label: "DSA PROBLEMS", value: 450, color: "text-neon-blue" },
  { label: "COMMITS", value: 200, color: "text-neon-purple" },
  { label: "REPOSITORIES", value: 10, color: "text-white" },
];

const Stats = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 text-white">

      {/* TITLE */}
      <div className="mb-10 border-b-2 border-neon-purple pb-4">
        <h2 className="text-3xl font-pixel tracking-widest">
          STATS
        </h2>
      </div>


      {/* COUNTERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-dark-800 p-6 border border-dark-700 rounded-sm flex flex-col items-center text-center hover:border-neon-purple transition"
          >
            <div className="text-4xl font-bold mb-2">
              {stat.value}+
            </div>

            <p className="font-pixel text-xs text-gray-400 tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>



      {/* GITHUB HEATMAP */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col items-center"
      >
        <h3 className="font-pixel text-xs text-neon-blue mb-4">
          GITHUB HEATMAP
        </h3>

        <img
          src="https://ghchart.rshah.org/409ba5/Arnav-1706"
          alt="github heatmap"
        />
      </motion.div>



      {/* GITHUB STATS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col items-center"
      >
        <h3 className="font-pixel text-xs text-neon-purple mb-4">
          GITHUB STATS
        </h3>

        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Arnav-1706&theme=tokyonight"
        />
      </motion.div>



      {/* LEETCODE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col items-center"
      >
        <h3 className="font-pixel text-xs text-yellow-400 mb-4">
          LEETCODE STATS
        </h3>

        <img
          src="https://leetcard.jacoblin.cool/Arnav_Kant?theme=dark"
          alt="leetcode stats"
        />
      </motion.div>


    </div>
  );
};

export default Stats;