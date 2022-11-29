function controllerWrapper(controller) {
  const fn = async (req, res, next) => {
    try {
      await controller(req, res);
    } catch (error) {
      next(error.message);
    }
  };

  return fn;
}
module.exports = controllerWrapper;
