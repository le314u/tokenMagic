Este projeto consiste em uma aplicação de linha de comando (CLI) para processar imagens. O objetivo principal é mesclar duas imagens, redimensionar a imagem resultante e inserir um texto específico no nome da imagem.

Instalação
Clone o repositório:

´´´
git clone https://github.com/le314u/tokenMagic.git
´´´

Navegue até o diretório do projeto:


´´´
cd tokenMagic

´´´

Instale as dependências:


´´´
npm install

´´´

Uso
O executável pode ser encontrado em ./src/index.js. Para utilizá-lo corretamente, são necessários dois argumentos via CLI:

Localização da Imagem: Caminho para a imagem base que será processada.
Texto a ser Inserido no Nome: Texto que será inserido no nome da imagem resultante.
Exemplo de uso:


´´´
node ./src/index.js caminho/para/imagem.jpg "Texto a ser inserido"

´´´

Certifique-se de ajustar os caminhos e textos conforme necessário para o seu caso específico.

Contribuição
Se você encontrar problemas ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

