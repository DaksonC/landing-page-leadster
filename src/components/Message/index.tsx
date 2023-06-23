import { Container, Content, Image } from "./styles";

export function Message() {
  return (
    <Container>
      <Content>
        <button>webinars exclusivos</button>
        <h4>Menos Conversinha,</h4>
        <h1>
          Mais Conversão
          <Image src="/header.png" alt="" />
        </h1>
      </Content>
      <p>Conheça as estratégias que <span>mudaram o jogo</span> de como aplicá-las no seu negócio</p>
    </Container>
  )
}