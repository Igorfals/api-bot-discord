/**
 * @swagger
 *  components:
 *   schemas:
 *     InformacoesAdd:
 *       type: object
 *       required:
 *         - titulo
 *         - categoria_id
 *         - users_id
 *       properties:
 *         titulo:
 *           type: string
 *         categoria_id:
 *           type: number
 *         users_id:
 *           type: number
 * 
 *     InformacoesUpdate:
 *       type: object
 *       required:
 *         - users_id
 *         - categoria_id
 *         - titulo
 *         - id_informacoes
 *       properties:
 *         titulo:
 *           type: string
 *         id_informacoes:
 *           type: number
 *         categoria_id:
 *           type: number
 *         users_id:
 *           type: number
 * 
 */

/**
 * @swagger
 * /informacoes/add:
 *  post:
 *    summary: "Cadastro de informações"
 *    description: "Rota responsável por cadastrar as informações."
 *    tags:
 *      - "informacoes"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/InformacoesAdd"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /informacoes/:
 *  get:
 *    summary: "Listando as informações"
 *    description: "Rota responsável por listar as informações."
 *    tags:
 *      - "informacoes"
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
 * /informacoes/update:
 *  put:
 *    summary: "Alterando as categorias"
 *    description: "Rota responsável por alterar as informacoes."
 *    tags:
 *      - "informacoes"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/InformacoesUpdate"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /informacoes/delete/{id}:
 *  delete:
 *    summary: "Deletar o usuario"
 *    description: "Rota responsável por deletar o usuario."
 *    tags:
 *      - "informacoes"
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