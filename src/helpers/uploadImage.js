const cloudinary = require("cloudinary").v2;

cloudinary.config(process.env.CLOUDINARY_URL);

const uploadImage = async (imgPath) => {
    try {
        if (imgPath) {
            const { secure_url } = await cloudinary.uploader.upload(imgPath, {
                folder: "chiper",
            });
            return secure_url;
        }
        return null;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = uploadImage;
