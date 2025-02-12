# Fingerprint.js - Guia de Uso

## Introdução
Este projeto utiliza o `fingerprint.js` para coletar e exibir um identificador de sessão (`sessionId`) e um timestamp (`timestamp`). O script é carregado a partir do repositório `axisbanking-ofc` e é integrado a uma página HTML para capturar esses dados.

## Requisitos
- Um navegador com suporte a JavaScript
- Conexão com a internet para carregar o script remoto
- Um ambiente que permita chamadas para `getFingerprintSession`

## Como Usar
1. **Baixar o Código**
   - Clone ou baixe o HTML que contém a integração com o script.
   
2. **Incluir o Script no HTML**
   - Certifique-se de incluir a seguinte linha no `<head>` do seu documento HTML:
     ```html
     <script src="https://cdn.jsdelivr.net/gh/axisbanking-ofc/axis-scripts/fingerprint.js"></script>
     ```

3. **Interagir com a Página**
   - Abra o HTML no navegador.
   - Clique no botão "Obter Fingerprint".
   - Se o script estiver corretamente carregado, ele exibirá o `sessionId` e o `timestamp` na página.

## Funcionamento Interno
- O botão executa a função `getFingerprintSession` quando clicado.
- O retorno esperado é um objeto com as propriedades:
  - `sessionId`: Um identificador único da sessão do usuário.
  - `timestamp`: O momento exato da captura do fingerprint.
- Caso a função não esteja disponível, um alerta será exibido.

## Solução de Problemas
- **Fingerprint não disponível**: O script pode não ter sido carregado corretamente.
- **Erros de Rede**: Verifique sua conexão e se o script está acessível.
- **Session ID não aparece**: Confirme se `getFingerprintSession` está definido e retornando valores.

## Autor
Este projeto é mantido pela equipe `axisbanking-ofc`. Para suporte, consulte a documentação oficial ou entre em contato com o suporte técnico da empresa.

---
Este guia fornece todas as informações necessárias para a implementação correta do `fingerprint.js` em sua aplicação.

