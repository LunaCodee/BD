// module.exports.GET_ALL_QUESTIONS = async (req, res) => {
//   try {
//     const users = await UserModel.find().sort({ name: 1 });;
//     res.status(200).json({ users: users });
//   } catch (err) {
//     console.log("ERR", err);
//     res.status(500).json({ response: "ERROR, please try later" });
//   }
// };

// module.exports.GET_USER_BY_ID = async (req, res) => {
//   try {
//     const user = await UserModel.findOne({ id: req.params.id });
//     res.status(200).json({ user: user });
//   } catch (err) {
//     console.log("ERR", err);
//     res.status(404).json({ response: "ERROR, such user not found" });
//   }
// };


// module.exports.DELETE_USER_BY_ID = async (req, res) => {
//   try {
//     const user = await UserModel.deleteOne({ id: req.params.id });
//     res.status(200).json({ user: user });
//   } catch (err) {
//     console.log("ERR", err);
//     res.status(500).json({ response: "ERROR, please try later" });
//   }
// };
