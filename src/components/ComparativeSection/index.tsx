import {
  Container,
  Content,
  DemoButton,
  Image,
  ImageCard,
  ImageCardAndStarContent,
  ImageRDStration,
  ImageStar,
  Text
} from "./styles";

export function ComparativeSection() {
  return (
    <Container>
      <Image src="/comparative.png" alt="Comparative" />
      <Content>
        <Text>
          <h3>Pronto para triplicar sua</h3>
          <h2>Geração de Leads?</h2>
          <p>Criação e ativação em <span>4 minutos.</span></p>
        </Text>
        <DemoButton>
          <button>ver demostração</button>
          <ImageRDStration src="/selo_RD.png" alt="" />
        </DemoButton>
        <ImageCardAndStarContent>
          <ImageCard src="/card.png" alt="Card" />
          <p><span>Não </span>é necessário Cartão de Crédito</p>
          <h4>|</h4>
          <ImageStar src="/stars.png" alt="Stars" />
          <p><span>4.9</span>/5 média de satisfação</p>
        </ImageCardAndStarContent>
      </Content>
    </Container>
  );
}