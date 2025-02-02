import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { makeImagePath } from "../utils";
import { IoIosPlay, IoIosInformationCircleOutline } from "react-icons/io";
import { ITrendingAll, renderTrendingResultType } from "../service/api";
import { useState } from "react";
import { useEffect } from "react";

const BannerContainer = styled(motion.div)<{ bgphoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.75rem;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      ${(props) => props.theme.black.veryDark}
    ),
    url(${(props) => props.bgphoto});
  background-size: cover;
`;

const InformationContainer = styled.div`
  height: 40%;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.25rem;
`;

const TopTenLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.red};

  :first-child {
    font-size: 0.625rem;
    margin-top: 0.25rem;
  }
  :last-child {
    font-size: 0.875rem;
    font-weight: bold;
  }
`;

const RankingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Ranking = styled.h4`
  font-size: 1.25rem;
`;

const Overview = styled.p`
  font-size: 1rem;
  width: 40%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  height: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 0.75rem;
  cursor: pointer;
`;

const PlayButton = styled(Button)``;
const MoreInfoButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
`;

const bannerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 3 },
  },
};

interface BannerProps {
  bannerData: ITrendingAll["results"];
}

export function Banner({ bannerData }: BannerProps) {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const bannerSlider = setInterval(() => {
      setBannerIndex((prev) => (prev === 9 ? 0 : prev + 1));
    }, 1000 * 15);
    return () => clearInterval(bannerSlider);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <BannerContainer
        key={bannerIndex}
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        bgphoto={makeImagePath(bannerData[bannerIndex].backdrop_path || "")}
      >
        <InformationContainer>
          <Title>{renderTrendingResultType(bannerData[bannerIndex])}</Title>
          <RankingContainer>
            <TopTenLogo>
              <span>TOP</span>
              <span>10</span>
            </TopTenLogo>
            <Ranking>{`#${bannerIndex + 1} in America Today`}</Ranking>
          </RankingContainer>
          <Overview>{bannerData[bannerIndex].overview}</Overview>
          <ButtonContainer>
            <PlayButton>
              <IoIosPlay size={21} /> Play
            </PlayButton>
            <MoreInfoButton>
              <IoIosInformationCircleOutline size={21} /> More Info
            </MoreInfoButton>
          </ButtonContainer>
        </InformationContainer>
      </BannerContainer>
    </AnimatePresence>
  );
}
