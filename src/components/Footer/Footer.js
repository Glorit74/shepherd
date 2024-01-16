import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

function Footer() {
  return (
    <Wrapper>
      Made by <Name>Glrorit74</Name>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: absolute;
  bottom: 10px;
  left: 15px;
  color: ${COLORS.gray500};
  font-size: small;
`;

const Name = styled.span`
  color: ${COLORS.primary};
`;

export default Footer;
