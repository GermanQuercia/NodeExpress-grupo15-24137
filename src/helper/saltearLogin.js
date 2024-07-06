import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export function saltearLogin(req, res, next) {
    const token = req.cookies.token;
    //console.log("req.cookies", req.cookies);
    if (!token) {
        return next();
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_PASS);
        //console.log("decoded", decoded);
        req.user = decoded;
        res.redirect('/admin');
    } catch (error) {
        res.status(401).redirect('/login');
    }
}