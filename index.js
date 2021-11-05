module.exports = getMethod = (req) => {
  const method = req.split(' ');
  return method[0];
};
