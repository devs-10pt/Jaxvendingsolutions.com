/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Machines", path: "/machines" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Logo - Top Left on Desktop, Center on Mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 } as any}
        animate={{ opacity: 1, y: 0 } as any}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
        className="fixed top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 z-50 p-3 sm:p-4 lg:p-8"
      >
        <button onClick={scrollToTop} className="focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center">
          <motion.img
            src="/logo.png"
            alt="Jax Vending Solutions Logo"
            whileHover={{ scale: 1.1, rotate: 2 } as any}
            whileTap={{ scale: 0.95 } as any}
            className="h-20 sm:h-28 lg:h-44 w-auto cursor-pointer drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
          />
        </button>
      </motion.div>

      {/* Navigation Menu - Top Right */}
      <motion.nav
        initial={{ opacity: 0, y: -20 } as any}
        animate={{ opacity: 1, y: 0 } as any}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
        className="fixed top-0 right-0 z-50 p-3 sm:p-4 lg:p-8"
      >
        <div className="flex items-center gap-1 sm:gap-2 bg-primary/10 backdrop-blur-md rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 shadow-premium border border-primary/20">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: 20 } as any}
                animate={{ opacity: 1, x: 0 } as any}
                transition={{ duration: 0.5, delay: index * 0.1 } as any}
              >
                <Link to={item.path}>
                  <motion.button
                    whileHover={{ scale: 1.05 } as any}
                    whileTap={{ scale: 0.95 } as any}
                    className={`
                      px-2.5 sm:px-3 lg:px-4 py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center
                      ${isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-primary hover:bg-primary/20"
                      }
                    `}
                  >
                    {item.name}
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};
