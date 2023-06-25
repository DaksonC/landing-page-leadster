import {
  Container,
  Content,
  HamburguerButton,
  Menu
} from "./styles";
import { useState } from "react";

interface HeaderComponentVideosSectionProps {
  activeComponent: string;
  handleClick: (component: string) => void;
}

export function HeaderComponentVideosSection(
  {
    activeComponent,
    handleClick
  }: HeaderComponentVideosSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleHamburgerClick() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <HamburguerButton $isOpen={isMenuOpen} onClick={handleHamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </HamburguerButton>
      <Menu $isOpen={isMenuOpen}>
        <button
          className={activeComponent === "Agency" ? "active" : ""}
          onClick={() => { handleClick("Agency"); setIsMenuOpen(false) }}
        >
          Agências
        </button>
        <button
          className={activeComponent === "Chatbot" ? "active" : ""}
          onClick={() => { handleClick("Chatbot"); setIsMenuOpen(false) }}
        >
          Chatbot
        </button>
        <button
          className={activeComponent === "DigitalMarketing" ? "active" : ""}
          onClick={() => { handleClick("DigitalMarketing"); setIsMenuOpen(false) }}
        >
          Marketing Digital
        </button>
        <button
          className={activeComponent === "LeadGeneration" ? "active" : ""}
          onClick={() => { handleClick("LeadGeneration"); setIsMenuOpen(false) }}
        >
          Geração de Leads
        </button>
        <button
          className={activeComponent === "PaidMedia" ? "active" : ""}
          onClick={() => { handleClick("PaidMedia"); setIsMenuOpen(false) }}
        >
          Mídia Paga
        </button>
      </Menu>
      <Content>
        <p>Ordenar por</p>
        <select>
          <option value="recentes">Mais recentes</option>
          <option value="antigos">Mais antigos</option>
        </select>
      </Content>
    </Container>
  );
}