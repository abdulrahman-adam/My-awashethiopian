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

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-4 sm:px-6 lg:px-8">

      {/* 🌌 GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* 🌌 FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [-20, -120], opacity: [0, 1, 0] }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-[2px] h-[2px] bg-white/70 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-20px",
              
            }}
          />
        ))}
      </div>

      {/* 🌌 BLOBS */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] lg:w-[520px] lg:h-[520px] bg-indigo-600/25 rounded-full blur-[120px] top-[-80px] left-[-80px]"
        
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-purple-600/25 rounded-full blur-[120px] bottom-[-80px] right-[-80px]"
      />

      {/* 🌌 MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative z-10
          w-full
          max-w-5xl
          text-center
          space-y-6 sm:space-y-8
          p-6 sm:p-8 md:p-10 lg:p-14
         
          
          backdrop-blur-3xl
          shadow-[0_25px_100px_rgba(0,0,0,0.45)]
          overflow-hidden
        "
      >

        {/* 🎨 FLOATING BORDER */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-200%] opacity-10"
        >
          <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500" />
        </motion.div>

        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {badges.map((b) => (
            <motion.div
              key={b}
              whileHover={{ scale: 1.05 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs bg-white/5 border border-white/10 rounded-full text-white backdrop-blur-xl"
            >
              {b}
            </motion.div>
          ))}
        </div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            font-extrabold
            text-white
            leading-[1.1]
            tracking-tight
          "
        >
          Bienvenue à{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300">
            Awashethiopian
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            text-gray-300
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            leading-relaxed
            max-w-2xl
            mx-auto
            font-light
          "
        >
          Gérez vos produits, vos stocks, vos ventes et vos données
          commerciales grâce à un système de point de vente puissant,
          moderne et optimisé pour la performance.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/login")}
          className="
            relative
            w-full sm:w-auto
            inline-flex
            items-center
            justify-center
            px-6 sm:px-10 md:px-12
            py-3 sm:py-4 md:py-5
            font-semibold
            text-white
            rounded-2xl sm:rounded-3xl
            overflow-hidden
            border border-white/20
            shadow-[0_20px_80px_rgba(99,102,241,0.45)]
          "
        >
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-[length:200%_200%]"
          />

          <span className="relative flex items-center gap-2 sm:gap-3 text-sm sm:text-lg">
            Se connecter
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </motion.svg>
          </span>
        </motion.button>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 pt-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.03, y: -3 }}
              className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {s.value}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="pt-6 sm:pt-8 flex flex-col items-center gap-2 sm:gap-3">
          <div className="h-[1px] w-24 sm:w-40 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <p className="text-[10px] sm:text-xs text-gray-400 tracking-[0.15em] sm:tracking-[0.25em] uppercase text-center">
            Système • d'inventaire sécurisé • rapide et moderne
          </p>
        </div>
      </motion.div>
    </div>
  );
}