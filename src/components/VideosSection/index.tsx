import { useState } from "react";
import { BodyStyled, Container, Content, HeaderStyled } from "./styles";
import { BodyComponentVideosSection } from "./BodyComponentVideosSection";
import { HeaderComponentVideosSection } from "./HeaderComponentVideosSection";

export function VideosSection() {
  const [activeComponent, setActiveComponent] = useState("LeadGeneration");

  function handleClick(component: string) {
    setActiveComponent(component);
  }

  return (
    <Container>
      <Content>
        <HeaderStyled>
          <HeaderComponentVideosSection
            activeComponent={activeComponent}
            handleClick={handleClick}
          />
        </HeaderStyled>
        <BodyStyled>
          <BodyComponentVideosSection
            activeComponent={activeComponent}
          />
        </BodyStyled>
      </Content>
    </Container>
  );
}