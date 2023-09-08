//      middlewares de Ryan Dhungel -course-React-Redux-Ecommerce-Master MERN WebDev
//        235-code-splitting-with-lazy-and-suspense
//ubicacion-->  I:\js-react\deploy\cursos-udemy\Ryan Dhungel-australia\course-React-Redux-Ecommerce-Master MERN WebDev\235-code-splitting-with-lazy-and-suspense:
//funciones: validar auth en general y validar si es admin
const admin = require("../firebase");
const User = require("../models/user");

exports.authCheck = async (req, res, next) => {
  // console.log(req.headers.authtoken); // token
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    //>>>console.log("FIREBASE USER IN AUTHCHECK", firebaseUser);
    // console.log("FIREBASE USER IN AUTHCHECK", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (err) {
    // console.log(err);
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;

  const adminUser = await User.findOne({ email }).exec();

  if (adminUser.role !== "admin") {
    res.status(403).json({
      err: "Admin resource. Access denied.",
    });
  } else {
    next();
  }
};
