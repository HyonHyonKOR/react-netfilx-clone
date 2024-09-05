import { useQuery } from "@tanstack/react-query";
import { renderTrendingResultType, getTrendsAll, ITrendingAll } from "../api";
import styled from "styled-components";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background-color: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.75rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.25rem;
`;

const Overview = styled.p`
  font-size: 1.5rem;
  width: 50%;
`;

export default function Home() {
  const { data, isLoading } = useQuery<ITrendingAll>({
    queryKey: ["all", "trending"],
    queryFn: getTrendsAll,
  });
  console.log(data, isLoading);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[2].backdrop_path || "")}>
            <Title>
              {data?.results[2]
                ? renderTrendingResultType(data?.results[2])
                : null}
            </Title>
            <Overview>{data?.results[2].overview}</Overview>
          </Banner>
        </>
      )}
    </Wrapper>
  );
}
