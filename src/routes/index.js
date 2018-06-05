const express = require('express')
const multer = require('multer')
const uniqid = require('uniqid')
const storage = require('../config/storage')
const filePath = process.env.FILE_PATH
const router = express.Router()
const upload = multer({storage})

console.log(storage)

router.post('/',
  (req, res, next) => {
    req.fileId = uniqid()
    next()
  },
  upload.single('file'), 
  (req, res, next) => {
  res.json({fileName: req.file.filename})
})

router.get('/:fileName', (req, res) => {
  res.sendFile(filePath + '/' + req.params.fileName)
})

module.exports = router
