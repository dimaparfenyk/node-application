const multer = require("multer");
const path = require("path");

// 1 Используя пакет path создать путь к папке temp в которой будут временно хранится файлы
const tempDir = path.join(__dirname, "../", "temp");

// 2. Настроить движок дискового пространства
const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// 3. Создать мидлвару
const upload = multer({ storage: multerConfig });

// 4. экспортировать мидлвару в индекс
module.exports = upload;
