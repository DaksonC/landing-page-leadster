import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container, Content, Image } from "./styles";

export function Message() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
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
    </motion.div>
  )
}