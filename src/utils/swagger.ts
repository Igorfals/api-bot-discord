export const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API do bot MC-Shiny',
        version: '1.0.0',
        description: 'Está é a documentação para a implementação do painel de controle do bot',
    },
    servers: [
        {
            url: 'http://localhost:3000/v1/',
            description: 'Local server',
        },
    ],
};