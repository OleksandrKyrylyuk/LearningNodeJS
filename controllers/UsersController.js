const User = require("../data/models/User");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};

exports.getUserById = async(req, res, next) => {
  try {
      const user = await User.findOne({ where: { id: req.params.id } });
      if (!user) {
        res.status(400).json({message: "UserNotFound"})
      }
      res.status(200).json(user)
  } catch (error) {
    
  }
}

exports.deleteUserById = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const user =  await User.destroy({where: {id: req.params.id}});
    if (!user) {
      res.status(404).json({message: "User not fount"})
    }
    res.status(200).json({message: "User deleted"})
  } catch (error) {
    res.status(500);
  }
}

exports.updateUser = async (req, res, next) => {
  const userId = req.body.id
  const updatedUser = {
    id: req.body.id,
    Name: req.body.Name,
    Surname: req.body.Surname,
    Email: req.body.Email,
  };
    try {
      const user = await User.update(updatedUser, {where: {id: userId}})
      if (!user) res.status(404).json({message: "Bad Request"})
      res.status(200).json({ message: "Updated" });
    } catch (error) {
          res.status(500).json({ message: "Bad request" });
    }
}

exports.updatePassword = async (req, res, next) => {
    const { id, Password, newPassword} = req.body;
  try {
    const user = await User.findOne({ where: { id } });

    if (user) {
       if (  bcrypt.compareSync(Password, user.Password) ) {
         await User.update(
           { Password: bcrypt.hashSync(newPassword, salt) },
           { where: { id } }
         );
         res.status(200).json({ message: "Password updated" });
       }
       res.status(200).json({ message: "Incorect password" });
    }
    res.status(200).json({ message: "User not Found" });
     
  } catch (error) {
     res.status(400).json({ message: "Bad request" });
  }

}

exports.createUser = async (req, res, next) => {
  const { Name, Surname, Email, Password } = req.body;
  try {
    let user = await User.findOne({ where: { Email } });
    if (user) {
      res.status(400).json({ message: "User already exists" });
     
    } else {
      user = new User({
        Name,
        Surname,
        Email,
        Password: bcrypt.hashSync(Password, salt)
      });
      await user.save();
      res.status(200).json({ message: "User successfully created" });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};
