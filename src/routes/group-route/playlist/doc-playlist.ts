/**
 * @swagger
 *  components:
 *   schemas:
 *     PlaylistAdd:
 *       type: object
 *       required:
 *         - nome_playlist
 *       properties:
 *         nome_playlist:
 *           type: string
 * 
 *     PlaylistUpdate:
 *       type: object
 *       required:
 *         - id_playlist
 *       properties:
 *         nome_playlist:
 *           type: string
 *         id_playlist:
 *           type: number
 */

/**
 * @swagger
 * /playlist/add:
 *  post:
 *    summary: "Cadastro de playlist"
 *    description: "Rota responsável por cadastrar as playlist."
 *    tags:
 *      - "playlist"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/PlaylistAdd"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /playlist/:
 *  get:
 *    summary: "Listando as playlist"
 *    description: "Rota responsável por listar as playlist."
 *    tags:
 *      - "playlist"
 *    security:
 *      - ApiKeyAuth: []
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /playlist/update:
 *  put:
 *    summary: "Alterando as playlist"
 *    description: "Rota responsável por alterar as playlist."
 *    tags:
 *      - "playlist"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/PlaylistUpdate"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /playlist/delete/{id}:
 *  delete:
 *    summary: "Deletar a playlist"
 *    description: "Rota responsável por deletar a playlist."
 *    tags:
 *      - "playlist"
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