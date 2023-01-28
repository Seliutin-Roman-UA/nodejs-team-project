const validator = (schema) => (req, res, next) => {
  const body = req.body;
  const valid = schema.validate(body);
  if (valid.error) {
    res.status(400).json({ error: valid.error.details[0].message });
    return;
  }
  return next();
};
