import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  background-color: ${(props) => props.theme.black.darker};
  height: 90vh;
  font-size: 5rem;
`;

export default function Movie() {
  return (
    <MovieContainer>
      <h1>Developing...</h1>
    </MovieContainer>
  );
}
