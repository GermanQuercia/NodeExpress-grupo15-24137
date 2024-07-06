import {__dirname} from '../routes/rutas.js'
import path from 'path';

// ruta / get
export function menu(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'html', 'menu.html'));
}