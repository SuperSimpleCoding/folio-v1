import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedBodyProps = {
  text: string;
  className?: string;
  wordSpace?: string;
  charSpace?: string;
};

export default function AnimatedBody({
  text,
  className,
  wordSpace,
  charSpace,
}: AnimatedBodyProps) {
  //   const text = "Animated Text"; // This would normally be passed into this component as a prop!

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    // Reset animation when component mounts
    controls.set("initial");
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]); // Add missing dependencies

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const bodyAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.1,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.p
      aria-label={text}
      role="heading"
      className={className}
      ref={ref}
      aria-hidden="true"
      initial="initial"
      animate={controls}
      variants={bodyAnimation}
      data-animate="true"
    >
      {text}
    </motion.p>
  );
}
