import React from "react";
import styled from "styled-components";

import { menu } from "../../constants";
import MenuItem from "../../components/MenuItem";
import Background from "../../components/Background/Background";

const MainPage = () => {
  return (
    <Background
      src="/src/images/background_sheep.jpg"
      question="Mi mindent csinál"
      title="a pásztor"
    >
      <Links>
        {menu.map((item) => (
          <MenuItem key={item.id} text={item.label} />
        ))}
      </Links>
    </Background>
  );
};

const Links = styled.div`
  display: grid;
  margin: 20px auto;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  width: 75%;
`;

export default MainPage;
