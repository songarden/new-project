import User from "./models/User";

export const localsMiddleware = (req,res,next) => {
    console.log(req.session);
    res.locals.loggedOn = Boolean(req.session.loggedOn);
    res.locals.siteName = "CNU Locker Application";
    res.locals.loggedOnUser = req.session.user;
    console.log(res.locals);
    next();
}