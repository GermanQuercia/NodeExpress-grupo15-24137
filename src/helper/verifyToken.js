import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export function verifyToken(req, res, next) {
    const token = req.cookies.token;
    //console.log("req.cookies", req.cookies)
    if (!token) {
        return res.status(403).send('Token requerido');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_PASS);
        //console.log("decoded", decoded)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send('Token no válido');
    }
}