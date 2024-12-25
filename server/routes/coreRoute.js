const uploadManager = require('../core/upload');
const downloadManager = require('../core/download.js');
const getAll = require('../core/getAll.js')
const findFile = require('../core/findFile.js');
const deleteFile = require('../core/deleteFile.js');
const renameFile = require('../core/renameFile');
const verifyToken= require('../middleware/verifyToken.js')
const Router = require('express').Router()
//Middle ware Checking Routes
Router.use(verifyToken)
/**
 * @swagger
 * tags:
 *   name: FileManagement
 *   description: File upload and management endpoints
 */


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     tokenAuth:
 *       type: apiKey
 *       in: header
 *       name: authorization
 *   schemas:
 *     UploadResponse:
 *       type: object
 *       properties:
 *         accessKey:
 *           type: string
 *         message:
 *           type: string
 *     DeleteRequest:
 *       type: object
 *       required:
 *         - hashKey
 *       properties:
 *         hashKey:
 *           type: string
 *     DownloadRequest:
 *       type: object
 *       required:
 *         - hashKey
 *       properties:
 *         hashKey:
 *           type: string
 *     SearchRequest:
 *       type: object
 *       required:
 *         - searchFile
 *       properties:
 *         searchFile:
 *           type: string
 *     RenameRequest:
 *       type: object
 *       required:
 *         - newName
 *         - oldName
 *         - hashKey
 *       properties:
 *         newName:
 *           type: string
 *         oldName:
 *           type: string
 *         hashKey:
 *           type: string
 */
/**
 * @swagger
 * /api/upload:
 *   post:
 *     tags: [Files]
 *     security:
 *       - tokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UploadResponse'
 */
Router.post('/api/upload', uploadManager)

/**
 * @swagger
 * /api/download:
 *   post:
 *     tags: [Files]
 *     security:
 *       - tokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DownloadRequest'
 *     responses:
 *       200:
 *         description: File content
 */
Router.post('/api/download', downloadManager)

/**
 * @swagger
 * /api/getAll:
 *   get:
 *     tags: [Files]
 *     security:
 *       - tokenAuth: []
 *     responses:
 *       200:
 *         description: List of files
 */
Router.get('/api/getAll', getAll)

/**
 * @swagger
 * /api/findFile:
 *   post:
 *     tags: [Files]
 *     security:
 *       - tokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SearchRequest'
 */
Router.post('/api/findFile', findFile)

/**
 * @swagger
 * /api/deleteFile:
 *   delete:
 *     tags: [Files]
 *     security:
 *       - tokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeleteRequest'
 */
Router.delete('/api/deleteFile', deleteFile)

/**
 * @swagger
 * /api/renameFile:
 *   post:
 *     tags: [Files]
 *     security:
 *       - tokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RenameRequest'
 */
Router.post('/api/renameFile', renameFile)

module.exports=Router