import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.8:3333'
});

export default api;


// Para rodar a API basta rodar o comando abaixo no terminal
// json-server ./src/services/server.json --host <Digite o Host> --port <Digite a Porta> --delay 700