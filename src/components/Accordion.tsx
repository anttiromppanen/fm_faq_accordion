import { Variants, motion } from "framer-motion";
import { useState } from "react";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

interface AccordionProps {
  buttonText: string;
  bodyText: string;
}

const iconAnimationVariants: Variants = {
  hidden: { opacity: 0.7, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0.7, scale: 0.7 },
};

const plusIconVariants: Variants = {
  ...iconAnimationVariants,
  hidden: { ...iconAnimationVariants.hidden, rotate: -90 },
};

const minusIconVariants: Variants = {
  ...iconAnimationVariants,
  hidden: { ...iconAnimationVariants.hidden, rotate: 90 },
  visible: { ...iconAnimationVariants.visible, rotate: 0 },
};

const textSectionAnimationVariants: Record<string, Variants> = {
  div: {
    visible: { height: "auto", opacity: 1, marginTop: "1.5rem" },
    hidden: { height: 0, opacity: 0, marginTop: 0 },
  },
  p: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  },
};

function Accordion({ buttonText, bodyText }: AccordionProps) {
  const [showText, setShowText] = useState(false);

  const toggleShowText = () => setShowText((state) => !state);

  return (
    <div className="border-b border-b-purple-500/20 py-6 last:border-b-0 last:pb-0 md:py-8">
      <button
        type="button"
        onClick={toggleShowText}
        className="flex w-full items-center justify-between text-left"
      >
        <h2 className="font-bold leading-5 text-userDarkPurple md:text-lg">
          {buttonText}
        </h2>
        <motion.img
          src={plusIcon}
          alt=""
          variants={plusIconVariants}
          initial="visible"
          animate={showText ? "hidden" : "visible"}
          className={`ml-8 ${showText ? "hidden" : "block"}`}
        />
        <motion.img
          src={minusIcon}
          alt=""
          variants={minusIconVariants}
          initial="hidden"
          animate={showText ? "visible" : "hidden"}
          className={`ml-8 ${showText ? "block" : "hidden"}`}
        />
      </button>
      <motion.div
        variants={textSectionAnimationVariants.div}
        initial="hidden"
        animate={showText ? "visible" : "hidden"}
        className="overflow-hidden text-userGrayishPurple md:text-lg"
      >
        <motion.p
          variants={textSectionAnimationVariants.p}
          initial="hidden"
          animate={showText ? "visible" : "hidden"}
        >
          {bodyText}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Accordion;
