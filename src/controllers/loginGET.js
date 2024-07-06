import {__dirname} from '../routes/rutas.js'
import path from 'path';

// ruta / get
export function login(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'));
}