/**
 * @swagger
 *  components:
 *   schemas:
 *     EmojiUpload:
 *       type: object
 *       required:
 *         - titulo
 *         - emoji
 *       properties:
 *         titulo:
 *           type: string
 *         emoji:
 *           type: string
 *           format: base64
 * 
 *     EmojiUpdate:
 *       type: object
 *       required:
 *         - id_emoji
 *         - titulo
 *         - emoji
 *       properties:
 *         id_emoji:
 *           type: number
 *         titulo:
 *           type: string
 *         emoji:
 *           type: string
 *           format: base64
 */

/**
 * @swagger
 * /emoji/add-upload:
 *  post:
 *    summary: "Cadastro de emoji"
 *    description: "Rota responsável por cadastrar o emoji."
 *    tags:
 *      - "Emoji"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: "#/components/schemas/EmojiUpload"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /emoji/:
 *  get:
 *    summary: "Listando o anexo"
 *    description: "Rota responsável por listar o anexo."
 *    tags:
 *      - "Emoji"
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - name: pesquisa
 *        in: query
 *        description: "string para pesquisar emoji"
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
 * /emoji/update:
 *  put:
 *    summary: "Alterando o emoji"
 *    description: "Rota responsável por alterar o emoji."
 *    tags:
 *      - "Emoji"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: "#/components/schemas/EmojiUpdate"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /emoji/delete/{id}:
 *  delete:
 *    summary: "Deletar o emoji"
 *    description: "Rota responsável por deletar o emoji."
 *    tags:
 *      - "Emoji"
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