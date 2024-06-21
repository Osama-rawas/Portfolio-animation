import { motion } from "framer-motion";
export default function Icons(props) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: props.x, y: props.y, rotate: props.rotate }}
      transition={{ duration: 1 }}
    >
      <img
        src={props.imgSource}
        alt="teq icon"
        width={props.width}
        height={props.height}
      />
    </motion.div>
  );
}
