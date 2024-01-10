import React from "react";
import styled from "styled-components";
import UnstyledButton from "../../components/UnstyledButton";
import { COLORS } from "../../constants";

function BackButton() {
  return (
    <Button href="/" as="a">
      Vissza
    </Button>
  );
}

const Button = styled(UnstyledButton)`
  margin: auto;
  margin-top: 20px;
  width: fit-content;
  color: ${COLORS.white};
  padding: 3px 15px;
  border: 1px solid ${COLORS.white};
  border-radius: 4px;
  background-color: ${COLORS.buttonBg};
  &:hover {
    background-color: ${COLORS.buttonBgHover};
  }
`;
export default BackButton;
