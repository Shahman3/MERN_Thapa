//Verifying Whether User is an Admin or Not

const adminMiddleware = async (req, res, next) => {
  try {
    //* we store user in 'req.user' in authmiddleware and Now, we check if its isAdmin value is true or false?
    // console.log(req.user);
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res
        .status(403)
        .json({ message: "Access denied. User is not an admin." });
    }
    // if user is admin proceed to the next step(or  middleware).
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = adminMiddleware;
