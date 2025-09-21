import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const CardHoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <AnimatePresence key={item.title}>
          <motion.div
            key={item.title}
            initial={{ y: -100, opacity: 0 }}      // entra da direita
            whileInView={{ x: 0, opacity: 1 }}   // aparece
            exit={{ x: 100, opacity: 0 }}        // desaparece para a direita
            viewport={{ once: false, amount: 0.3 }} // anima toda vez que entra/sai
            transition={{ duration: 0.5, delay: idx * 0.1 }} // delay escalonado
            className="relative group block p-2 h-full w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Fundo animado ao hover */}
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#00aaff] dark:bg-white-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}

            {/* Card */}
            <Card>
              <div className="flex justify-center mb-4">{item.icon}</div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

// Card
export const Card = ({ className, children }) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-[#00aaff] relative z-20 font-poppins",
      className
    )}
  >
    <div className="relative z-50">
      <div className="p-4">{children}</div>
    </div>
  </div>
);

// Título
export const CardTitle = ({ className, children }) => (
  <h4
    className={cn(
      "text-zinc-100 font-bold tracking-wide mt-4 text-center",
      className
    )}
  >
    {children}
  </h4>
);

// Descrição
export const CardDescription = ({ className, children }) => (
  <p
    className={cn(
      "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm text-center",
      className
    )}
  >
    {children}
  </p>
);
