# Aula 01 - Começando com Node

O Node importa seus módulos por meio da função **require()**
```javascript
    const http = require('http');
```
O método **createServer()** retorna um objeto do tipo *Server*
```javascript
    const servidor = http.createServer();
    servidor.listen(3000);
```
Funções que só são executadas dada a ocorrência de um evento são chamadas de **"callback"**
