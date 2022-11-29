const { ErrorHandler } = require("../helpers/error");

const checkUrl = (req, res, next) => {
  try {
    const { url } = req.query;
    if (url.startsWith("https://hmc.co.il"))
      throw new ErrorHandler(
        403,
        "Please request API key and pay for the API usage. Contact marcetienne@lab107.dev"
      );
  } catch (error) {
    next(error);
  }
  next();
};

module.exports = { checkUrl };
