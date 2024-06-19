import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Russinho</h1>
        <h2 className="showcase-header-text h-color">
          O Bot de Discord que precisas!
        </h2>
        <p className="showcase-para p-color">
          O bot de discord que irás precisas para qualquer situaçáo.
        </p>

        <span className="p-color">Bot Online e Funcional!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Convida agora!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Entra no nosso Servidor!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
