import { useQuery } from "@tanstack/react-query";
import { getTrendsAll, ITrendingAll } from "../service/api";

import { useMatch, useNavigate } from "react-router-dom";
import { Banner } from "../components/Banner";
import { ContentSlider } from "../components/ContentSlider";
import { Modal } from "../components/Modal";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
`;

const Loader = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

export default function Home() {
  console.log("Home");

  const { data, isLoading } = useQuery<ITrendingAll>({
    queryKey: ["trendingAll"],
    queryFn: getTrendsAll,
    staleTime: 3600 * 1000 * 24,
    gcTime: 3600 * 1000 * 24,
    refetchOnWindowFocus: false,
  });

  const navigate = useNavigate();
  const allMatch = useMatch("all/:contentId");

  const clickedTrendingAll =
    allMatch?.params.contentId &&
    data?.results.find(
      (content) => content.id + "" === allMatch.params.contentId
    );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {<Banner bannerData={data?.results.slice(0, 10) || []} />}

          <ContentSlider
            data={data?.results.slice(0, data.results.length - 2) || []}
            title="Trending Now"
          />
          <Modal
            isOpen={!!allMatch}
            onClose={() => navigate(-1)}
            content={clickedTrendingAll}
          />
        </>
      )}
    </Wrapper>
  );
}
