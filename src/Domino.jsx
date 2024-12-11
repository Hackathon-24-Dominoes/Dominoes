import styled from "styled-components";
import { useEffect, useState } from 'react';

const Domino = ({ domino }) => {
  const [isDouble, setIsDouble] = useState(false);

  useEffect(()=> {
    const [top, bottom] = domino;
    setIsDouble(top === bottom);
  }, [domino]);

  function renderDots(count, reverse = false) {
    const elements = [];
    for (let i = 0; i < 9; i++) {
      elements.push(
        <Dot key={i} isVisible={i < count} />
      );
    }
    return reverse ? elements.reverse() : elements;
  };

  return (
    <Container isDouble={isDouble}>
      <Top>{renderDots(domino[0])}</Top>
      <Bottom>{renderDots(domino[1], true)}</Bottom>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid black;
  color: black;
  background-color: white;
  border-radius: 20px;
  height: 250px;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(${props => props.isDouble ? `90` : `0`}deg);
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
  width: 80%;
  gap: 10px;
`;

const Bottom = styled(Top)``;

export default Domino;