export const checkImage = (file) => {
  if (!file) return "File does not exist.";

  if (file.size > 1024 * 1024)
    // 1mb
    return "The largest image size is 1mb.";

  if (file.type !== "image/jpeg" && file.type !== "image/png")
    return "Image format is incorrect.";
};

export const imageUpload = async (images) => {
  let imgArr = [];
  const formData = new FormData();
  {
    images.forEach((item) => {
      if (item.camera) {
        formData.append("file", item.camera);
      } else {
        formData.append("file", item);
      }

      formData.append("upload_preset", "ug00wejn");
      formData.append("cloud_name", "diggdahm0");
    });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diggdahm0/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    imgArr.push({ public_id: data.public_id, url: data.secure_url });
    return imgArr;
  }
};
