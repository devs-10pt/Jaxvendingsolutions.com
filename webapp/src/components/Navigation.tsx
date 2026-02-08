/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

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
        className="fixed top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 z-50 p-6 lg:p-8"
      >
        <Link to="/">
          <motion.img
            src="/logo.png"
            alt="Jax Vending Solutions Logo"
            whileHover={{ scale: 1.1, rotate: 2 } as any}
            whileTap={{ scale: 0.95 } as any}
            className="h-20 lg:h-26 w-auto cursor-pointer drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
          />
        </Link>
      </motion.div>

      {/* Navigation Menu - Top Right */}
      <motion.nav
        initial={{ opacity: 0, y: -20 } as any}
        animate={{ opacity: 1, y: 0 } as any}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
        className="fixed top-0 right-0 z-50 p-6 lg:p-8"
      >
        <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-md rounded-full px-6 py-3 shadow-premium border border-primary/20">
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
                      px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
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
