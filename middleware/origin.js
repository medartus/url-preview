const getOrigin = (req, res, next) => {
  const host = req.get("host");
  const origin = req.get("origin");

  console.log("host: ", host);
  console.log("origin: ", origin);

  next();
};

module.exports = { getOrigin };
