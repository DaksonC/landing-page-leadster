import { AiFillWarning } from 'react-icons/ai';
import { Container } from './styles';

export function PageUnderDevelopment() {
  return (
    <Container>
      <h1>
        Page under development
      </h1>
      <AiFillWarning
        size={50}
        style={{
          background: 'transparent',
          color: '#eff30a',
        }}
      />
    </Container>
  );
}