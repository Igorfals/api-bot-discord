/**
 @swagger
 *  components:
 *   schemas:
 *     UsersAdd:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - useraname
 *         - password 
 *       properties:
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 * 
 *     UsersUpdate:
 *       type: object
 *       required:
 *         - id_users
 *       properties:
 *         id_users:
 *           type: number
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         status_users:
 *           type: number
 * 
 *     RecuperarSenha:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 */

/**
 * @swagger
 * /user/add:
 *  post:
 *    summary: "Cadastro de usuarios"
 *    description: "Rota responsável por cadastrar usuarios."
 *    tags:
 *      - "users"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/UsersAdd"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /user/update:
 *  put:
 *    summary: "Altera o usuarios"
 *    description: "Rota responsável por alterar o usuarios."
 *    tags:
 *      - "users"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/UsersUpdate"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 * 
 * /user/:
 *  get:
 *    summary: "Lista os usuarios"
 *    description: "Rota responsável por listar os usuarios."
 *    tags:
 *      - "users"
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
 * /user/recuperar-senha:
 *   post:
 *    summary: "Recuperar Senha"
 *    description: "Rota responsável por recuperar senha."
 *    tags:
 *      - "users"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/RecuperarSenha"
 *      required: true
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 * 
 * /user/delete/{id}:
 *  delete:
 *    summary: "Deletar o usuario"
 *    description: "Rota responsável por deletar o usuario."
 *    tags:
 *      - "users"
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
