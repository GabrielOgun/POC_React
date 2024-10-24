import MyComponent from '../components/MyComponent';
import styles from '../styles/POCPage.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Prova de Conceito: Next.js 14+ e React</h1>
      <p> <a href="https://github.com/GabrielOgun/POC_React">  Repositorio </a>
      </p>

      {/* Estrutura de Projeto */}
      <section className={styles.section}>
        <h2>1. Estrutura de Projeto Next.js 14+</h2>
        <p>
          A POC segue a estrutura básica de um projeto Next.js. As principais pastas são:
        </p>
        <ul>
            <li><strong>components/</strong>: Armazena componentes React reutilizáveis.</li>
            <li><strong>pages/</strong>: Define as rotas e renderiza as páginas.</li>
            <li><strong>styles/</strong>: Inclui estilos globais e modulares.</li>
            <li><strong>public/</strong>: Armazena arquivos estáticos como imagens.</li>
          </ul>
      </section>

      {/* Componente Simples */}
      <section className={styles.section}>
        <h2>2. Componente Simples</h2>
        <p>Veja abaixo um exemplo de componente React simples, reutilizável e sem estado:</p>
        <MyComponent />
      </section>

      {/* Estilos CSS */}
      <section className={styles.section}>
        <h2>3. Estilos CSS</h2>
        <p>Este projeto utiliza duas abordagens para estilização:</p>
        <ul>
          <li><strong>Estilo Global</strong>: Estilos aplicados em toda a aplicação, definidos em <code>globals.css</code>. Exemplo: a cor de fundo do corpo e a fonte padrão.</li>
          <li><strong>Estilo Modular</strong>: Estilos específicos para componentes, como o aplicado no exemplo de componente acima. O estilo modular é mais específico e focado no escopo do componente.</li>
        </ul>
      </section>

      {/* package.json e next.config.js */}
      <section className={styles.section}>
        <h2>4. package.json e next.config.js</h2>
        <p>
          <strong>package.json</strong>: Define as dependências e scripts do projeto, como <code>npm run dev</code> para rodar o servidor de desenvolvimento.
        </p>
        <p>
          <strong>next.config.js</strong> (opcional): Permite configurações avançadas do Next.js, como otimizações de imagem, headers personalizados, entre outros.
        </p>
      </section>

      {/* Autores */}
      <section className={styles.section}>
        <h2>5. Autores</h2>
        <p>Projeto desenvolvido por:</p>
        <ul>
          <li>Artur Valladares Hernandez Giacummo - 10389053</li>
          <li>Gabriel Marques Gonçalves Almeida - 1037571</li>
        </ul>
      </section>

      {/* Referências */}
      <section className={styles.section}>
        <h2>6. Referências</h2>
        <ul>
          <li><a href="https://nextjs.org/docs/basic-features/pages">Documentação do Next.js - Estrutura de Projeto</a></li>
          <li><a href="https://nextjs.org/docs/basic-features/built-in-css-support">Documentação do Next.js - CSS e Estilização</a></li>
        </ul>
      </section>
    </div>
  );
}
