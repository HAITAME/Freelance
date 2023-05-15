import User from "../models/user.model.js";
import  jwt  from "jsonwebtoken";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const token = req.cookies.accessToken;
  const user = await User.findById(req.params.id);

  if (!token) return res.status(401).send("You are not authenticated");
  if (!user) return next(createError(404, "User not found"));

  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if (err) return next(createError(401, "Invalid token"));
    if (payload.id !== user._id.toString())
      return next(createError(403, "You can delete only your account"));

    User.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send("User has been deleted");
      })
      .catch((err) => {
        next(createError(500, "Something went wrong"));
        console.log(err);
      });
  });
};
