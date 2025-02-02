import styled from "styled-components";
import { motion } from "framer-motion";
import { makeImagePath } from "../utils";
import { renderTrendingResultType } from "../service/api";
import { IoMdPlay, IoMdAdd } from "react-icons/io";
import { SlLike, SlDislike } from "react-icons/sl";
import { MdOutlineFavorite } from "react-icons/md";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Box = styled(motion.div)`
  position: relative;
  background-color: ${(props) => props.theme.black.lighter};
  aspect-ratio: 16 / 9;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const BoxImage = styled(motion.div)<{ bgphoto: string }>`
  width: 100%;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center;
  aspect-ratio: 16 / 9;
  cursor: pointer;
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.darker};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: -3.3rem;
`;

const InfoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.1,
    },
  },
};

const InfoTitle = styled.h4`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const InfoButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const LikeButtons = styled(motion.div)`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.black.lighter};
    border: 1px solid ${(props) => props.theme.white.darker};
    border-radius: 50%;
    font-size: 0.625rem;
    padding: 0.3rem;
    cursor: pointer;
  }
`;

const boxVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.3,
    y: -100,
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.2,
    },
    zIndex: 21,
  },
};

interface ContentBoxProps {
  content: any;
}

export function ContentBox({ content }: ContentBoxProps) {
  const navigate = useNavigate();
  const [likeButtonIsClicked, setLikeButtonIsClicked] = useState(false);
  const toggleLike = () => setLikeButtonIsClicked((prev) => !prev);

  const getContentId = (contentId: number) => {
    navigate(`/all/${contentId}`);
  };

  return (
    <Box
      layoutId={content.id + ""}
      variants={boxVariants}
      initial="normal"
      whileHover="hover"
      transition={{ type: "tween" }}
    >
      <BoxImage
        bgphoto={makeImagePath(content.backdrop_path, "w500")}
        onClick={() => getContentId(content.id)}
      />
      <Info variants={InfoVariants}>
        <InfoTitle>{renderTrendingResultType(content)}</InfoTitle>
        <InfoButtonsContainer>
          <InfoButtons>
            <div>
              <IoMdPlay />
            </div>
            <div>
              <IoMdAdd />
            </div>
            <div>
              <SlLike />
            </div>
            <div>
              <SlDislike />
            </div>
          </InfoButtons>
          <LikeButtons onClick={toggleLike}>
            {likeButtonIsClicked ? (
              <div>
                <MdOutlineFavorite />
              </div>
            ) : (
              <div>
                <IoHeartDislikeOutline />
              </div>
            )}
          </LikeButtons>
        </InfoButtonsContainer>
      </Info>
    </Box>
  );
}
