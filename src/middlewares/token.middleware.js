import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import userModel from "../models/user.model.js";

const tokenDecode = (req) => {
  try {
    // console.log(req.headers)
    console.log(req.headers["authorization"])
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];

      return jsonwebtoken.verify(
        token,
        process.env.TOKEN_SECRET
      );
    }

    return true;
  } catch {
    return false;
  }
};

const auth = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);
  console.log("I am here", tokenDecoded)
  if (!tokenDecoded) return responseHandler.unauthorize(res);
  console.log("Yupp Done")
  const user = await userModel.findById(tokenDecoded.data);
  console.log("FInding user")
  if (!user) return responseHandler.unauthorize(res);
  console.log("user not found")

  req.user = user;

  next();
  
};

export default { auth, tokenDecode };
