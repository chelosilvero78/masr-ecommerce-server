const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;
  console.log("name,picture,email-->", name,picture,email)

  //db.collection.findOneAndUpdate( filter, update, options )
  const user = await User.findOneAndUpdate(
    { email }, //filter
    //{ name:req.body.name, picture:req.body.picture }, //update
    { name: email.split("@")[0], picture }, //update
    { new: true } //option
  );
  if (user) {
    console.log("USER UPDATED", user);
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name: email.split("@")[0],
      picture,
    }).save();
    console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};

exports.currentUser = async (req, res) => {
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};