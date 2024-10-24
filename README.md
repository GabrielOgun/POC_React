
# Prova de Conceito: Next.js 14+ e React

## Feito Por:

- Artur Valladares Hernandez Giacummo - 10389053  
- Gabriel Marques Gonçalves Almeida - 10375711  

## Como Executar o Código

Para acessar o site proposto por esta prova de conceito (POC), você tem duas opções:

### Opção 1: Acesso Online

Você pode visualizar o projeto diretamente no navegador acessando o seguinte link:

[**https://gabrielogun.github.io/POC_React/**](https://gabrielogun.github.io/POC_React/)

### Opção 2: Acesso Local

Se preferir trabalhar com uma cópia local do projeto, siga os passos abaixo:

1. **Baixar o Projeto**  
   - Acesse o repositório do projeto e clique em **"Código"**.  
   - Selecione a opção **"Baixar ZIP"** para obter o arquivo compactado do projeto.  

2. **Descompactar o Arquivo**  
   - Após o download, localize o arquivo ZIP em seu computador.  
   - Descompacte o arquivo para uma pasta de sua escolha.

3. **Instalar as dependências**  
   - No diretório do seu projeto, execute:  
     ```bash
     npm install
     ```

4. **Executar o servidor de desenvolvimento**  
   - No diretório do projeto, execute:  
     ```bash
     npm run dev
     ```

5. **Acessar o projeto no navegador**  
   - Abra o navegador e acesse:  
     [http://localhost:3000](http://localhost:3000)


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
│   └── MyComponent.js      
├── pages/
│   ├── index.js            
│   └── _app.js            
├── public/
│   └── images/            
├── styles/
│   ├── globals.css         
│   └── MyComponent.module.css
├── package.json          
└── next.config.js         
```

- **`components/`**: Armazena componentes React reutilizáveis. Cada componente pode ter seu próprio arquivo CSS módulo.
- **`pages/`**: Define as rotas do projeto. Cada arquivo dentro dessa pasta se torna uma rota no sistema.
- **`public/`**: Contém arquivos estáticos, como imagens ou fontes, que podem ser referenciados diretamente nas páginas ou componentes.
- **`styles/`**: Armazena os arquivos de estilo. Inclui estilos globais e arquivos de módulos CSS.
- **`packege.json/`**: Define as dependências, scripts e metadados do projeto. Ele gerencia as bibliotecas necessárias (como react e next), além de configurar comandos úteis, como npm run dev para iniciar o servidor de desenvolvimento.
- **`next.config.js/`**:é um arquivo opcional que permite configurar ajustes avançados no Next.js, como modificações em webpack, redirects, e otimizações específicas.

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
