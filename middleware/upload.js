const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    const fileName = moment().format('DDMMYYYY-HHmmSS_SSS');
    cb(null, `${fileName}-${file.originalname}`)
  }
})

const fileFilter = (req, file, cb) => {
  if ( file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const limits = {
  fileSize: 1024 * 1024 * 5
}

module.exports = multer({ storage, fileFilter, limits})