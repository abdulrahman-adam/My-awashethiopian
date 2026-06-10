import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const badges = ["Sécurisé", "Temps réel", "Inventaire", "POS Pro"];

  const stats = [
    { value: "24/7", label: "Disponibilité" },
    { value: "100%", label: "Sécurisé" },
    { value: "Temps Réel", label: "Synchronisation" },
  ];

  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 5,
    size: 2 + Math.random() * 2,
  }));

  const gridLines = Array.from({ length: 12 });

  // 🐍 SNAKE LINES SYSTEM (NEW MAGIC)
  const snakes = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    duration: 20 + Math.random() * 20,
    delay: Math.random() * 5,
    opacity: 0.05 + Math.random() * 0.1,
  }));

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-10">

      {/* =========================
          🌌 ROTATING SNAKE FIELD (NEW CORE FEATURE)
      ========================= */}
      <div className="absolute inset-0 overflow-hidden">

        {snakes.map((s) => (
          <motion.div
            key={s.id}
            className="absolute w-[200%] h-[2px]"
            style={{
              top: `${s.top}%`,
              opacity: s.opacity,
            }}
            animate={{
              rotate: [0, 360],
              x: ["-30%", "30%", "-30%"],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: "linear",
              delay: s.delay,
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent blur-[1px]" />
          </motion.div>
        ))}
      </div>

      {/* =========================
          🌌 GRID FIELD
      ========================= */}
      <div className="absolute inset-0 opacity-[0.06]">
        {gridLines.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-[1px] bg-white/20"
            style={{ top: `${i * 8}%` }}
            animate={{ x: ["-10%", "10%"] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {gridLines.map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-[1px] bg-white/10"
            style={{ left: `${i * 8}%` }}
            animate={{ y: ["-10%", "10%"] }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =========================
          🌌 LIGHT ROTATION GLOW
      ========================= */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[900px] h-[900px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 blur-[160px]"
      />

      {/* =========================
          🌌 FLOATING PARTICLES
      ========================= */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white/60 rounded-full"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
            }}
            initial={{ y: "120vh", opacity: 0 }}
            animate={{
              y: "-20vh",
              x: [0, 20, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* =========================
          🌌 MAIN CARD
      ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-6xl text-center space-y-8 p-6 sm:p-10 md:p-14 rounded-3xl backdrop-blur-2xl border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_rgba(0,0,0,0.7)] overflow-hidden"
      >

        {/* rotating border glow */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-200%] opacity-10"
        >
          <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500" />
        </motion.div>

        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {badges.map((b) => (
            <motion.div
              key={b}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 text-xs bg-white/5 border border-white/10 rounded-full text-white backdrop-blur-xl"
            >
              {b}
            </motion.div>
          ))}
        </div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
        >
          Bienvenue à{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300">
            Awashethiopian
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Système POS intelligent avec inventaire en temps réel, sécurité avancée
          et performance cloud optimisée.
        </p>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/login")}
          className="relative px-10 py-5 rounded-2xl text-white font-semibold overflow-hidden border border-white/20 shadow-[0_30px_100px_rgba(99,102,241,0.5)]"
        >
          <motion.div
            animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-[length:200%_200%]"
          />

          <span className="relative flex items-center gap-2">
            Se connecter
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white">{s.value}</h3>
              <p className="text-sm text-gray-400">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <p className="text-xs text-gray-500 tracking-widest uppercase pt-6">
          Système POS • Inventaire • Sécurité • Performance
        </p>
      </motion.div>
    </div>
  );
}