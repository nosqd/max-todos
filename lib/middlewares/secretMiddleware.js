
module.exports = (req,res,next) => {
    if (!req.headers.authorization || req.headers.authorization.split(" ").length < 2) return res.status(401).json({message: "Unauthorized"});
    const token = `${req.headers.authorization.split(" ")[1]}`;
    if (token !== process.env.SECRET) return  res.status(401).json({message: "Unauthorized"});
    next();
}