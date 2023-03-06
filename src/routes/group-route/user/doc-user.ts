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
 *     UpdateAvatar:
 *       type: object
 *       required:
 *         - id_users
 *       properties:
 *         id_users:
 *           type: number
 *         avatar:
 *           type: string
 *           format: base64
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
 *      - "Users"
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
 *      - "Users"
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
 * /user/update-avatar:
 *  put:
 *    summary: "Altera o avatar do usuario"
 *    description: "Rota responsável por alterar o avatar do usuario."
 *    tags:
 *      - "Users"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: "#/components/schemas/UpdateAvatar"
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
 *      - "Users"
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
 *      - "Users"
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
 *      - "Users"
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
