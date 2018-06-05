const multer = require('multer')
const path = require('path')
const filePath = process.env.FILE_PATH

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filePath)
  },
  filename: function (req, file, cb) {
    let filename = req.fileId + path.extname(file.originalname)
    cb(null, filename)
  }
})

module.exports = storage
