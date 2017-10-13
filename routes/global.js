var env = process.env.NODE_ENV || "dev";

module.exports = {
  env: env,
  signInReq: function (req, res, next) {
    if (!req.isAuthenticated()) {
      req.session.redirect = {
        "app": req.get('host'),
        "path": req.originalUrl
      };
      return res.redirect("https://account.internalize.ca/signin")
    }
    next()
  },
  adminReq: function (req, res, next) {
    if (req.user.accountType !== "admin") {
      return res.render("body/error/403", {
        layout: 'noheader.hbs',
        title: '403 | Internalize',
        route: "error"
      })
    }
    next()
  },
  signOutReq: function (req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect("/")
    }
    next()
  }
}
