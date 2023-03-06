/**
 * @swagger
 *  components:
 *   schemas:
 *     AnexoUpload:
 *       type: object
 *       required:
 *         - titulo
 *         - anexo
 *         - users_id
 *       properties:
 *         titulo:
 *           type: string
 *         anexo:
 *           type: string
 *           format: base64
 *         users_id:
 *           type: number
 * 
 *     AnexoUpdate:
 *       type: object
 *       required:
 *         - id
 *         - titulo
 *         - anexo
 *         - users_id
 *       properties:
 *         id:
 *           type: number
 *         titulo:
 *           type: string
 *         anexo:
 *           type: string
 *           format: base64
 *         users_id:
 *           type: number
 */

/**
 * @swagger
 * /anexo/anexo-upload:
 *  post:
 *    summary: "Cadastro de anexo"
 *    description: "Rota responsável por cadastrar o anexo."
 *    tags:
 *      - "Anexo"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: "#/components/schemas/AnexoUpload"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /anexo/:
 *  get:
 *    summary: "Listando o anexo"
 *    description: "Rota responsável por listar o anexo."
 *    tags:
 *      - "Anexo"
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - name: pesquisa
 *        in: query
 *        description: "string para pesquisar anexo"
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
 * /anexo/update/:
 *  put:
 *    summary: "Alterando o anexo"
 *    description: "Rota responsável por alterar o anexo."
 *    tags:
 *      - "Anexo"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: "#/components/schemas/AnexoUpdate"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /anexo/delete/{id}:
 *  delete:
 *    summary: "Deletar o anexo"
 *    description: "Rota responsável por deletar o anexo."
 *    tags:
 *      - "Anexo"
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