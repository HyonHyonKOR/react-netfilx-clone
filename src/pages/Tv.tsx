import styled from "styled-components";

const TvContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  background-color: ${(props) => props.theme.black.veryDark};
  height: 90vh;
  font-size: 5rem;
`;

export default function Tv() {
  return (
    <TvContainer>
      <h1>Developing...</h1>
    </TvContainer>
  );
}
