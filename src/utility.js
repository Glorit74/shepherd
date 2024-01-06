const imageContext = require.context(
  "../public/pictures",
  false,
  /\.(jpg|jpeg|png|mp4)$/
);
const images = imageContext.keys().map(imageContext);

export default images;
