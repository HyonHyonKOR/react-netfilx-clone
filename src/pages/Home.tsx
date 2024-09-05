import { useQuery } from "@tanstack/react-query";
import { renderTrendingResultType, getTrendsAll, ITrendingAll } from "../api";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
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

const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.25rem;
`;

const TopTenLogo = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.red};
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
  width: 35%;
`;

export default function Home() {
  const { data, isLoading } = useQuery<ITrendingAll>({
    queryKey: ["trendingAll"],
    queryFn: getTrendsAll,
    staleTime: 3600 * 1000,
  });

  const [visibleBanner, setVisibleBanner] = useState(0);

  const showNextBanner = () =>
    setVisibleBanner((prev) => (prev === 9 ? prev - 9 : prev + 1));

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
                <Title>
                  {data?.results
                    ? renderTrendingResultType(data?.results[index])
                    : null}
                </Title>
                <RankingContainer>
                  <TopTenLogo></TopTenLogo>
                  <Ranking>{`#${index + 1} in America Today`}</Ranking>
                </RankingContainer>
                <Overview>{data?.results[index].overview}</Overview>
              </Banner>
            ) : null
          )}
        </>
      )}
    </Wrapper>
  );
}
