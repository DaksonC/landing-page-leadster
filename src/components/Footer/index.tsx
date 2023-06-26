import {
  Container,
  Content,
  HeaderStyled,
  BodyStyled,
  FooterStyled,
  Image
} from "./styles";
import { ImInstagram } from "react-icons/im";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

export function Footer() {
  return (
    <Container>
      <Content>
        <HeaderStyled>
          <Image src="/logo.png" alt="" />
          <p>Transformando visitantes em clientes.</p>
        </HeaderStyled>
        <BodyStyled>
          <div className="links">
            <h1>Links Principais</h1>
            <button>Home</button>
            <button>Ferramenta</button>
            <button>Preços</button>
            <button>Contato</button>
          </div>
          <div className="cases">
            <h1>Cases</h1>
            <button>Geração de Leads B2B</button>
            <button>Geração de Leads em Software</button>
            <button>Geração de Leads em Imobiliária</button>
            <button>Cases de Sucesso</button>
          </div>
          <div className="materials">
            <h1>Materiais</h1>
            <button>Blog</button>
            <button>Parceria com Agências</button>
            <button>Guia Definitivo do Marketing</button>
            <button>Materiais Gratuitos</button>
          </div>
          <div className="social-media">
            <h1>Siga a Leadster</h1>
            <div className="social-media__icon">
              <button>
                <BiLogoLinkedin
                  size={30}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
              </button>
              <button>
                <BiLogoFacebook
                  size={30}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
              </button>
              <button>
                <ImInstagram
                  size={20}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
              </button>
            </div>
            <p><span>E-mail: </span>contato@leadster.com.br</p>
            <p><span>Telefone: </span>(42)9 8828-9851</p>
          </div>
        </BodyStyled>
        <FooterStyled>
          <p>© 2021 - Todos os direitos reservados |
            <a href="https://leadster.com.br/"> Leadster</a>
          </p>
          <p>Rua José Lourenço, 464 - Centro -Curitiba PR - CEP: 80010-000 | Termos de uso</p>
        </FooterStyled>
      </Content>
    </Container>
  )
}