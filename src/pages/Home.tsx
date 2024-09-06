import { useQuery } from "@tanstack/react-query";
import { renderTrendingResultType, getTrendsAll, ITrendingAll } from "../api";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosPlay, IoIosInformationCircleOutline } from "react-icons/io";
const Wrapper = styled.div`
  background-color: black;
`;

const Loader = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const Banner = styled(motion.div)<{ bgphoto: string }>`
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

const bannerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

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

const Slider = styled.div`
  position: relative;
  top: -4rem;
`;

const SliderTitle = styled.h4`
  margin-left: 3.75rem;
  margin-bottom: 1rem;
`;

const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  padding-left: 3.75rem;
  padding-bottom: 2rem;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 60,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 60,
  },
};

const Box = styled(motion.div)<{ bgphoto: string }>`
  position: relative;
  background-color: white;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center;
  aspect-ratio: 16 / 9;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.2,
    },
    zIndex: 21,
  },
};

const BoxHoverImg = styled(Box)`
  background-image: url(${(props) => props.bgphoto});
`;

const Info = styled(motion.div)`
  position: absolute;
  padding: 20px;
  background-color: ${(props) => props.theme.black.lighter};
  width: 100%;
  opacity: 0;
  bottom: 0;
`;

const InfoVariants = {
  hover: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.2,
    },
  },
};

export default function Home() {
  const { data, isLoading } = useQuery<ITrendingAll>({
    queryKey: ["trendingAll"],
    queryFn: getTrendsAll,
    staleTime: 3600 * 1000,
  });

  const [visibleBanner, setVisibleBanner] = useState(0);

  const showNextBanner = () =>
    setVisibleBanner((prev) => (prev === 9 ? prev - 9 : prev + 1));

  useEffect(() => {
    const bannerSlider = setInterval(showNextBanner, 1000 * 15);
    return () => clearInterval(bannerSlider);
  }, [visibleBanner]);

  const [sliderNumber, setsliderNumber] = useState(0);
  const [isLeaving, setisLeaving] = useState(false);

  const showNextTrendingSlider = () => {
    if (data) {
      if (isLeaving) return;
      toggleLeaving();
      const totalSilders = data?.results.length;
      const maxSliderNumber = Math.floor(totalSilders / offset) - 1;
      setsliderNumber((prev) => (prev === maxSliderNumber ? 0 : prev + 1));
      console.log(sliderNumber);
    }
  };

  const toggleLeaving = () => setisLeaving((prev) => !prev);

  const offset = 6;

  return (
    <Wrapper>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {data?.results.slice(0, 10).map((item, index) =>
            visibleBanner === index ? (
              <Banner
                onClick={showNextBanner}
                variants={bannerVariant}
                initial="hidden"
                animate="visible"
                key={index}
                bgphoto={makeImagePath(
                  data?.results[index].backdrop_path || ""
                )}
              >
                <InformationContainer>
                  <Title>
                    {data?.results
                      ? renderTrendingResultType(data?.results[index])
                      : null}
                  </Title>
                  <RankingContainer>
                    <TopTenLogo>
                      <span>TOP</span>
                      <span>10</span>
                    </TopTenLogo>
                    <Ranking>{`#${index + 1} in America Today`}</Ranking>
                  </RankingContainer>
                  <Overview>{data?.results[index].overview}</Overview>
                  <ButtonContainer>
                    <PlayButton>
                      <IoIosPlay size={21} /> Play
                    </PlayButton>
                    <MoreInfoButton>
                      <IoIosInformationCircleOutline size={21} /> More Info
                    </MoreInfoButton>
                  </ButtonContainer>
                </InformationContainer>
              </Banner>
            ) : null
          )}
          <Slider>
            <SliderTitle onClick={showNextTrendingSlider}>
              Tranding Now
            </SliderTitle>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  type: "linear",
                  duration: 0.8,
                }}
                key={sliderNumber}
              >
                {data?.results
                  .slice(0, data?.results.length - 2)
                  .slice(offset * sliderNumber, offset * sliderNumber + offset)
                  .map((content) => (
                    <Box
                      variants={boxVariants}
                      key={content.id}
                      initial="normal"
                      whileHover="hover"
                      transition={{
                        type: "tween",
                      }}
                      bgphoto={makeImagePath(content.backdrop_path, "w500")}
                    >
                      <BoxHoverImg
                        bgphoto={makeImagePath(content.backdrop_path, "w500")}
                      ></BoxHoverImg>
                      <Info variants={InfoVariants}></Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
