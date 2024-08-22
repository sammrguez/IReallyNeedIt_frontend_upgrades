import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import texture from "../images/textura_IRNI.jpg";

import Carousell from "./Carousell";
import { motion, useInView, useAnimation } from "framer-motion";

function HotToday({ onAddProductClick, promoProduct }) {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);
  const mainControls = useAnimation();

  const handleAddToCart = (event) => {
    event.preventDefault();
    onAddProductClick(promoProduct);
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section className="hotToday">
      <img className="decoration-band" src={texture} />

      <motion.div
        ref={scrollRef}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h2 className="hotToday__header">Hot Today</h2>

        <div ref={scrollRef} className="hotToday__content">
          <Carousell />

          <div className="hotToday__data">
            <h3 className="hotToday__text">
              ¡Los imprescindibles de la temporada están aquí! Explora lo más
              destacado de hoy en
              <span className="hotToday__highlight">I Really Need It</span>
            </h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HotToday;
