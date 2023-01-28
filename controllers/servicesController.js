const Service = require("../schemas/servicesSchema");

const servicesSidebar = async (req, res, next) => {
  const services = await Service.find();
  res.status(200).send(services);
};

module.exports = servicesSidebar;
