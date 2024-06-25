//?await shema.parseAsync(req.body) is the line where you use zod to validate the requestbody data against the defined schema .

// Givin any Zod schema , you can call its "parse" method to check "data " is valid. If it is , a value returned with full type information! Otherwise , an error is thrown .
const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    // res.status(400).json({ msg: message });
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.errors[0].message;
    const error = {
      status,
      message,
      extraDetails,
    };
    next(error);
  }
};

module.exports = validate;
