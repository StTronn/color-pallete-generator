import React from "react";
import styled from "styled-components";

const ColorBox = styled.div`
  height: 150px;
  width: 150px;
  background: ${(props) => props.color};
`;

const Cointainer = styled.div`
  width: 20vw;
  display: grid;
  row-gap: 20px;
  grid-template-row: repeat(auto-fill, minmax(100px, 1fr));
`;

const Pallete = ({ colors }) => {
  console.log(colors);
  return (
    <Cointainer>
      {colors.map((color, i) => (
        <ColorBox key={i} color={color} />
      ))}
    </Cointainer>
  );
};

export default Pallete;
