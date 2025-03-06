"use client";

import { TbArrowNarrowUp } from "react-icons/tb";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../button";

export const BackToTop = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) {
      setShow(true);
    }
    if (show && window.scrollY <= 500) {
      setShow(false);
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-4 right-4 z-20"
          initial={{ opacity: 0, right: -5 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -5 }}
        >
          <Button
            onClick={handleClick}
            className="shadow-lg shadow-blue-400/20"
          >
            <TbArrowNarrowUp size={20} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
