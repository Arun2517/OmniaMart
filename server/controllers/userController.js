export function profile(req, res) {

  res.json({

    message: "Profile Retrieved Successfully",

    user: req.user,

  });

}