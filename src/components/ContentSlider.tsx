import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ContentBox } from "./ContentBox";

const Slider = styled.div`
  position: relative;
  top: -4rem;
`;

const SliderTitle = styled.h4`
  margin-left: 3.75rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  gap: 0.25rem;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  padding-left: 3.75rem;
  padding-bottom: 2rem;
`;

const rowVariants = {
  hidden: { x: window.outerWidth },
  visible: { x: 0 },
  exit: { x: -window.outerWidth },
};

interface ContentSliderProps {
  data: any[];
  title: string;
}

export function ContentSlider({ data, title }: ContentSliderProps) {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const offset = 6;

  const showNextSlider = () => {
    if (isLeaving) return;
    toggleLeaving();
    const totalSliders = data.length;
    const maxSliderNumber = Math.floor(totalSliders / offset) - 1;
    setSliderNumber((prev) => (prev === maxSliderNumber ? 0 : prev + 1));
  };

  const toggleLeaving = () => setIsLeaving((prev) => !prev);

  return (
    <Slider>
      <SliderTitle onClick={showNextSlider}>{title}</SliderTitle>
      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row
          variants={rowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "linear", duration: 0.8 }}
          key={sliderNumber}
        >
          {data
            .slice(offset * sliderNumber, offset * sliderNumber + offset)
            .map((content) => (
              <ContentBox key={content.id} content={content} />
            ))}
        </Row>
      </AnimatePresence>
    </Slider>
  );
}
