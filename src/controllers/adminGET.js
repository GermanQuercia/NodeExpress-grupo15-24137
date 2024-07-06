import {__dirname} from '../routes/rutas.js'
import path from 'path';

export function admin(req, res) {
    //console.log("aca estoy")
    res.sendFile(path.join(__dirname, "public", "html", "admin", "admin.html"));
}