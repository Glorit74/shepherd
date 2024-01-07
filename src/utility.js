const imageContext = require.context(
  "../public/pictures",
  false,
  /\.(jpg|jpeg|png|mp4)$/
);
const images = imageContext.keys().map(imageContext);

const imageContextPuli = require.context(
  "../public/pictures/puli",
  false,
  /\.(jpg|jpeg|png)$/
);
const puli = imageContextPuli.keys().map(imageContextPuli);

export  {  images, puli };
