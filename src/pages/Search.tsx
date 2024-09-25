import { useLocation } from "react-router-dom";
import { search } from "../api";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  margin: 0 3.75rem;
  margin-top: 7rem;
  background-color: {
    ${(props) => props.theme.black.veryDark}
  }
`;

const Loader = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const Grid = styled.div`
  display: grid;
  gap: 0.25rem;
  grid-template-columns: repeat(6, 1fr);
`;

const Box = styled.div<{ bgphoto: string }>`
  position: relative;
  aspect-ratio: 16 / 9;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      ${(props) => props.theme.black.veryDark}
    ),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center;
  background-color: black;
`;

const BoxTitle = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 1.25rem;
`;

export default function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { data, isLoading } = useQuery<any>({
    queryKey: ["search", keyword],
    queryFn: () => search(keyword!),
    staleTime: 3600 * 1000,
  });

  console.log(data);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <Grid>
          {data?.results.map((item: any) => (
            <Box key={item.id} bgphoto={makeImagePath(item.backdrop_path)}>
              <BoxTitle>{item.title ? item.title : item.name}</BoxTitle>
            </Box>
          ))}
        </Grid>
      )}
    </Wrapper>
  );
}
