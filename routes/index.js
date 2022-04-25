var express = require("express");
var router = express.Router();
const { version } = require("../core/helper");
const { list, single } = require("../src/usersService");

// /**
//  * @swagger
//  * components:
//  *  schemas:
//  *   User:
//  *    type: object
//  *    required:
//  *     - id
//  *     - name
//  *     - surname
//  *     - photo
//  *    properties:
//  *      id:
//  *       type: number
//  *       description: Auto generated id of the user
//  *      name:
//  *       type: string
//  *       description: User name
//  *      surname:
//  *       type: string
//  *       description: User surname
//  *      photo:
//  *       type: string
//  *       description: User photo
//  *    example:
//  *       id: 5
//  *       name: Ilham
//  *       surname: Baghirov
//  *       photo: text.png
//  */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users Api
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     description: Returns list of users
 *     tags: [Users]
 *     responses:
 *      '200':
 *        content:
 *         application/json:
 *          schema:
 *           type: array
 *           items: '#/components/schemas/User'
 */

router.get(version(1) + "users", list);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     description: Returns 1 user
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: string
 *     responses:
 *      '200':
 *        content:
 *         application/json:
 *          schema:
 *           type: object
 *           items: '#/components/schemas/User'
 */

router.get(version(1) + "users/:id", single);

module.exports = router;
