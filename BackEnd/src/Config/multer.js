const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

function megabytesToBytes(mb) {
  return mb * 1048576;
}

const uploadPath = path.resolve(__dirname, '..', '..', 'uploads');

exports.createUserMulterConfig = {
  dest: uploadPath,
  storage: multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, uploadPath);
    },
    filename: (req, file, callBack) => {
      crypto.randomBytes(6, (error, hash) => {
        if (error) callBack(error);

        const fileName = `${hash.toString('hex')}-${new Date().getTime()}-${file.originalname.replace(/\s/g, '_')}`;
        callBack(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: megabytesToBytes(8),
    fileFilter: (req, file, callBack) => {
      const allowedMimes = [
        'image/jpeg',
        'image/pjpeg',
        'image/jpg',
        'image/png',
      ];

      if (allowedMimes.includes(file.mimetype)) {
        callBack(null, true);
      } else {
        callBack(new Error('Invalid file type'));
      }
    },
  },
};
