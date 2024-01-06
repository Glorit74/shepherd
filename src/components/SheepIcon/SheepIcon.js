import React from "react";
import styled from "styled-components";

import { GiSheep } from "react-icons/gi";
import { COLORS } from "../../constants";

function SheepIcon({ size }) {
  return (
    <Wrapper size={size}>
      <Icon size={size} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 2px solid ${COLORS.white};
  border-radius: 50%;
`;

const Icon = styled(GiSheep)`
  width: ${(props) => props.size || "32px"};
  height: ${(props) => props.size || "32px"};
  color: ${COLORS.white};
`;
export default SheepIcon;
