/**
 * @swagger
 *  components:
 *   schemas:
 *     Upload:
 *       type: object
 *       required:
 *         - file
 *       properties:
 *         file:
 *           type: string
 *           format: base64
 * 
 * @swagger
 * /upload/:
 *  post:
 *    summary: "Listando o upload"
 *    description: "Rota responsável por listar o upload."
 *    tags:
 *      - "Upload"
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: "#/components/schemas/Upload"
 *    responses:
 *      "200":
 *        description: "Requisição realizada com sucesso."
 *      "400":
 *        description: "Parâmetros inválidos."
 *      "401":
 *        description: "Sem autorização."
 */