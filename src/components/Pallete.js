import React from "react";
import styled from "styled-components";

const ColorBox = styled.div`
  width: 100%;
  background: ${(props) => props.color};

  min-height: 150px;
  height: 10vw;
`;

const Cointainer = styled.div`
  display: grid;
  width: 40vw;
  min-width: 600px;
  grid-template-columns: repeat(4, 1fr);
`;

const Pallete = ({ colors }) => {
  console.log(colors);
  return (
    <>
      <Cointainer>
        {colors.map((color, i) => (
          <>
            <ColorBox key={i} color={color} />
          </>
        ))}
      </Cointainer>

      <Cointainer>
        {colors.map((color, i) => (
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {color}
          </p>
        ))}
      </Cointainer>
    </>
  );
};

export default Pallete;
