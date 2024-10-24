
# Prova de Conceito: Next.js 14+ e React

## Feito Por:

- Artur Valladares Hernandez Giacummo - 10389053  
- Gabriel Marques Gonçalves Almeida - 10375711  

##

## Requisitos
- **Node.js** versão 14 ou superior
- **Next.js** versão 14 ou superior
- **React** versão 18 ou superior

## Estrutura de Projeto Next.js

A estrutura de um projeto **Next.js** é organizada de forma a otimizar a construção de aplicações React com recursos prontos, como roteamento automático, renderização no lado do servidor (SSR) e geração de sites estáticos (SSG).

abaixo umn exemplo da estrutura padrão de um projeto Next.js:

```bash
poc_react/
├── components/
│   └── MyComponent.js      # Componentes React reutilizáveis
├── pages/
│   ├── index.js            # Página inicial da aplicação (/) 
│   └── _app.js             # Configuração de estilos globais e app wrapper
├── public/
│   └── images/             # Arquivos estáticos (imagens, fontes, etc.)
├── styles/
│   ├── globals.css         # Estilos globais aplicados à aplicação
│   └── MyComponent.module.css # Estilo modular para o componente
├── package.json            # Dependências do projeto e scripts de execução
└── next.config.js          # Configurações específicas do Next.js
```

- **`components/`**: Armazena componentes React reutilizáveis. Cada componente pode ter seu próprio arquivo CSS módulo.
- **`pages/`**: Define as rotas do projeto. Cada arquivo dentro dessa pasta se torna uma rota no sistema.
- **`public/`**: Contém arquivos estáticos, como imagens ou fontes, que podem ser referenciados diretamente nas páginas ou componentes.
- **`styles/`**: Armazena os arquivos de estilo. Inclui estilos globais e arquivos de módulos CSS.

## Criação de Componentes Simples

Componentes React são blocos de construção reutilizáveis que podem ser utilizados para montar a interface da aplicação.

Exemplo de um componente simples sem estado:

```jsx
// components/MyComponent.js
import styles from '../styles/MyComponent.module.css';

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Hello, React with Next.js 14+</h1>
      <p>Este é um componente simples e reutilizável.</p>
    </div>
  );
};

export default MyComponent;
```

- **Componente sem estado**: Este componente é chamado de "sem estado" porque não mantém ou gerencia estados internos. Ele apenas recebe dados (ou nenhum dado) e renderiza conteúdo estático.

## Estilo CSS

No Next.js, há duas abordagens principais para aplicar estilos:

### 1. Estilo Global

Estilos globais são aplicados a toda a aplicação. O arquivo `globals.css` é importado uma única vez no projeto, geralmente no arquivo `_app.js`.

Exemplo:

```css
/* styles/globals.css */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}
```

Para aplicar este estilo global, importa-se o arquivo no `_app.js`:

```jsx
// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### 2. Estilo por Módulo

Estilos por módulo são utilizados para escopo local de um componente, evitando conflitos de estilo entre diferentes componentes.

Exemplo de módulo CSS para um componente:

```css
/* styles/MyComponent.module.css */
.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}

p {
  color: #666;
}
```

Os estilos definidos no módulo são aplicados apenas ao componente que os importa, como no exemplo do componente `MyComponent`:

```jsx
// components/MyComponent.js
import styles from '../styles/MyComponent.module.css';

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Hello, React with Next.js 14+</h1>
      <p>Este é um componente simples e reutilizável.</p>
    </div>
  );
};

export default MyComponent;
```

## Conclusão

Esta POC demonstra a criação de componentes simples em **React** com **Next.js**, além de ilustrar a aplicação de estilos globais e modulares. Next.js fornece uma estrutura poderosa para otimizar aplicações React, com suporte a funcionalidades como renderização no lado do servidor e roteamento dinâmico sem configuração complexa.
