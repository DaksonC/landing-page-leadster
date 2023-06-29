# Decisões tomadas:

Escolhi utilizar o Next.js como biblioteca principal para o desenvolvimento do projeto, não somente pela exigência do teste, mas também, devido à sua popularidade, flexibilidade e eficiência.
Optei por usar o styled-components como biblioteca de estilização, pois ela oferece uma sintaxe simples e intuitiva para escrever estilos em componentes React e Next.js e também permite o reuso de estilos de forma fácil e organizada.
Decidi incorporar o pacote react-icons para ter acesso a uma ampla variedade de ícones prontos para uso em meu aplicativo, o que economiza tempo e esforço no desenvolvimento de ícones personalizados.
Por fim, utilizei o Framer Motion para as ainimações do projeto. O Framer Motion é uma biblioteca de animação para React que oferece uma API simples e poderosa para criar animações naturais e realistas com facilidade.


# Organização do código:

Separei meus componentes em arquivos individuais para facilitar a manutenção e reutilização.
Criei uma estrutura de pastas lógica para organizar os diferentes tipos de componentes (por exemplo, "components" e "pages") e os estilos relacionados (por exemplo, "styles" ou "themes").
Utilizei convenções de nomenclatura claras e descritivas para os nomes dos arquivos e componentes, a fim de tornar o código mais legível e compreensível.


# Funcionalidades:

Implementei funcionalidades específicas da landing page, como listagem de vídeos, usando um arquivo Json para alterar as urls.
Utilizei componentes estilizados com styled-components para garantir uma aparência consistente, agradável e responsividade do aplicativo.
Integrei ícones relevantes usando o react-icons para fornecer uma experiência visual atraente e melhorar a usabilidade do aplicativo. As animações criadas com frame-motion teve um objetivo nobre, poque foram uitlizadas para oferecer um feedback ao usuário ao navegar pela página.

Além disso, ao longo do projeto, levei em consideração boas práticas de desenvolvimento de software, como escrever código limpo, modular e reutilizável, bem como otimizar o desempenho e garantir a acessibilidade. Também fiz uso de controle de versão (por exemplo, Git) para manter um histórico das alterações e facilitar a colaboração com outros desenvolvedores, se necessário.

# Instruções de como rodar o projeto

Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Começando

Primeiro, clone o projeto:
```bash
git clone https://github.com/DaksonC/landing-page-leadster/
cd landing-page-leadster
npm i
# ou
yarn 
# ou
pnpm i
```
Depois, execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/index.tsx`. A página é atualizada automaticamente conforme você edita o arquivo.

[API routes](https://nextjs.org/docs/api-routes/introduction) podem ser acessadas em [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint pode ser editado em `pages/api/hello.ts`.

O `pages/api` diretório é mapeado para `/api/*`. Os arquivos neste diretório são tratados como [API routes](https://nextjs.org/docs/api-routes/introduction) em vez de páginas React.

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente o Inter, uma fonte personalizada do Google.
## Saber mais

Para saber mais sobre o Next.js, consulte os seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - saiba mais sobre os recursos e a API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir [the Next.js GitHub repository](https://github.com/vercel/next.js/) - seus comentários e contribuições são bem-vindos!

## Implantar no Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [Next.js deployment documentation](https://nextjs.org/docs/deployment) para obter mais detalhes.

# Teste com o Google Lighthouse
O Lighthouse é uma ferramenta automatizada de código aberto para melhorar o desempenho, a qualidade e a correção de seus aplicativos da web.
Ao auditar uma página, o Lighthouse executa uma barragem de testes na página e, em seguida, gera um relatório sobre o desempenho da página. A partir daqui, você pode usar os testes com falha como indicadores sobre o que pode fazer para melhorar seu aplicativo.

## Resultado:
<img src="https://github.com/DaksonC/landing-page-leadster/assets/81385265/7544f954-99b0-4126-942f-d07d542a0fe5" />
