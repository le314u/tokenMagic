# tokenMagic

O tokenMagic é uma ferramenta de linha de comando (CLI) desenvolvida para criar token's de Magic apartir de iamgens pre definidas. Essa aplicação proporciona a junção de duas imagens distintas, resultando em uma imagem final composta por uma imagem base processada e uma camada adicional sobreposta. 

## Funcionalidades Principais

* Junção de Imagens: Combinação de uma imagem base com uma camada adicional para formar uma imagem final.
* Redimensionamento: Possibilidade de redimensionar a imagem resultante de acordo com as necessidades do usuário.
* Inserção de Texto no Nome: Adição de um texto específico ao nome da imagem, personalizando ainda mais o resultado final.



Instalação
Clone o repositório:

```
git clone https://github.com/le314u/tokenMagic.git
```

Navegue até o diretório do projeto:


```
cd tokenMagic

```
Instale as dependências:


```
npm install
```

Uso
O executável pode ser encontrado em ./src/index.js. Para utilizá-lo corretamente, são necessários dois argumentos via CLI:

Localização da Imagem: Caminho para a imagem base que será processada.
Texto a ser Inserido no Nome: Texto que será inserido no nome da imagem resultante.
Exemplo de uso:


```
node ./src/index.js <caminho/para/imagem.jpg> <"Texto a ser inserido">
```
Certifique-se de ajustar os caminhos e textos conforme necessário para o seu caso específico.

# Contribuição
Se você encontrar problemas ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

