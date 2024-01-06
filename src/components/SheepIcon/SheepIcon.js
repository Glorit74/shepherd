import React from "react";
import styled from "styled-components";

import { GiSheep } from "react-icons/gi";
import { COLORS } from "../../constants";

function SheepIcon({ size }) {
  return <Icon size={size} />;
}

const Icon = styled(GiSheep)`
  width: ${(props) => props.size || "32px"};
  height: ${(props) => props.size || "32px"};
  color: ${COLORS.white};
`;
export default SheepIcon;
