/**
 * @swagger
 *  components:
 *   schemas:
 *     MusicaAdd:
 *       type: object
 *       required:
 *         - nome_musica
 *         - artista
 *         - album
 *         - playlist_id
 *         - user_id
 *       properties:
 *         nome_musica:
 *           type: string
 *         artista:
 *           type: string
 *         album:
 *           type: string
 *         playlist_id:
 *           type: number
 *         users_id:
 *           type: number
 * 
 *     MusicaUpdate:
 *       type: object
 *       required:
 *         - id_musica
 *         - nome_musica
 *         - playlist_id
 *         - users_id
 *       properties:
 *         id_musica:
 *           type: number
 *         url:
 *           type: string
 *         album:
 *           type: string
 *         nome_musica:
 *           type: string
 *         artista:
 *           type: string
 *         playlist_id:
 *           type: number
 *         users_id:
 *           type: number
 */

/**
 * @swagger
 * /musica/playlist/{id}:
 *  get:
 *    summary: "Musicas da playlist"
 *    description: "Rota responsável por dpegar musicas informando id da playlist."
 *    tags:
 *      - "Musica"
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - name: id
 *        in: path
 *        description: "id da playlist"
 *        required: true
 *        schema:
 *          type: number
 *      - name: pesquisa
 *        in: query
 *        description: "string para pesquisar musica"
 *        required: false
 *        schema:
 *          type: string
 *      - name: limit
 *        in: query
 *        description: "Limite de itens para paginação"
 *        required: false
 *        schema:
 *          type: number
 *      - name: offset
 *        in: query
 *        description: "Quantidade de itens para ignorar"
 *        required: false
 *        schema:
 *          type: number
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * /musica/add:
 *  post:
 *    summary: "Cadastro de musica"
 *    description: "Rota responsável por cadastrar as musica."
 *    tags:
 *      - "Musica"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/MusicaAdd"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /musica/:
 *  get:
 *    summary: "Listando as musica"
 *    description: "Rota responsável por listar as musica."
 *    tags:
 *      - "Musica"
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - name: pesquisa
 *        in: query
 *        description: "string para pesquisar musica"
 *        required: false
 *        schema:
 *          type: string
 *      - name: limit
 *        in: query
 *        description: "Limite de itens para paginação"
 *        required: false
 *        schema:
 *          type: number
 *      - name: offset
 *        in: query
 *        description: "Quantidade de itens para ignorar"
 *        required: false
 *        schema:
 *          type: number
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /musica/update:
 *  put:
 *    summary: "Alterando as musica"
 *    description: "Rota responsável por alterar as musica."
 *    tags:
 *      - "Musica"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/MusicaUpdate"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /musica/delete/{id}:
 *  delete:
 *    summary: "Deletar a musica"
 *    description: "Rota responsável por deletar a musica."
 *    tags:
 *      - "Musica"
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - name: id
 *        in: path
 *        description: "id do item deletado"
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 */