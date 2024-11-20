import { createServer } from 'node:http' // biblioteca que instância um servidor node

const server = createServer((request,response) => {
    console.log('oi');
    response.write('Hello world');
    return response.end(); // Finaliza a requisição. - responde o acesso recebido
    
});
server.listen(4444);