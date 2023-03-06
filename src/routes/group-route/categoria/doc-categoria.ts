/**
 * @swagger
 *  components:
 *   schemas:
 *     CategoriaAdd:
 *       type: object
 *       required:
 *         - nome_categoria
 *       properties:
 *         nome_categoria:
 *           type: string
 * 
 *     CategoriaUpdate:
 *       type: object
 *       required:
 *         - id_categoria
 *       properties:
 *         id_categoria:
 *           type: number
 *         nome_categoria:
 *           type: string
 *           
 */

/**
 * @swagger
 * /categoria/add:
 *  post:
 *    summary: "Cadastro de categorias"
 *    description: "Rota responsável por cadastrar as categorias."
 *    tags:
 *      - "Categoria"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/CategoriaAdd"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /categoria/:
 *  get:
 *    summary: "Listando as categorias"
 *    description: "Rota responsável por listar as categorias."
 *    tags:
 *      - "Categoria"
 *    parameters:
 *      - name: pesquisa
 *        in: query
 *        description: "string para pesquisar categoria"
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
 * /categoria/update:
 *  put:
 *    summary: "Alterando as categorias"
 *    description: "Rota responsável por alterar as categorias."
 *    tags:
 *      - "Categoria"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/CategoriaUpdate"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /categoria/delete/{id}:
 *  delete:
 *    summary: "Deletar as categorias"
 *    description: "Rota responsável por deletar as categorias."
 *    tags:
 *      - "Categoria"
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