import styled from "styled-components";

const Domino = ({ domino }) => {
  function renderDots(count) {
    const elements = [];
    for (let i = 0; i < 9; i++) {
      elements.push(
        <Dot key={i} isVisible={i < count} />
      );
    }
    return elements;
  }

  return (
    <Container>
      <Top>{renderDots(domino[0])}</Top>
      <Bottom>{renderDots(domino[1])}</Bottom>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid red;
  color: black;
  background-color: white;
  border-radius: 5%;
  height: 250px;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

const Dot = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => (props.isVisible ? 'black' : 'transparent')};
  border-radius: 50%;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 70%;
  aspect-ratio: 1;
  justify-self: center;
  gap: 10px;
`;

const Bottom = styled(Top)``;

export default Domino;