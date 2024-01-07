const imageContext = require.context(
  "../public/pictures",
  false,
  /\.(jpg|jpeg|png|mp4)$/
);
const images = imageContext.keys().map(imageContext);

const imageContextBg = require.context(
  "/src/images",
  false,
  /\.(jpg|jpeg|png)$/
);
const bgImages = imageContextBg.keys().map(imageContextBg);

export { images, bgImages};
