const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',  // Isso indica que estamos exportando o projeto como conteúdo estático
  basePath: isProd ? '/POC_React' : '',  // Caminho base para os arquivos no GitHub Pages
  assetPrefix: isProd ? '/POC_React/' : '',  // Prefixo para os assets estáticos
  images: {
    unoptimized: true,  // Isso desabilita a otimização de imagens que depende de um servidor
  },
};
