export function uploadImage(req, res) {

  if (!req.file) {

    return res.status(400).json({

      message: "No image uploaded",

    });

  }

  res.json({

    message: "Image Uploaded Successfully",

    filename: req.file.filename,

    path: `/uploads/${req.file.filename}`,

  });

}