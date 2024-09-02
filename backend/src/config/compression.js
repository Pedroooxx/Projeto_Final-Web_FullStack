const compressionOptions = {
    threshold: 0, // Somente comprime se o tamanho da resposta for maior que 1KB
    filter: (req, res) => {
      // Exemplo de filtro personalizado que comprime apenas para alguns tipos de conteúdo
      if (req.headers['accept'].includes('text/html')) {
        return compression.filter(req, res);
      }
      return false;
    },
    level: 9
};
  
module.exports = compressionOptions;