import { motion } from 'framer-motion';

const ButtonHeader = ({ children }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.3 }}
        className="btn rounded-pill mx-2 px-3"
      >
        {children}
      </motion.button>
    </>
  );
};

export default ButtonHeader;
