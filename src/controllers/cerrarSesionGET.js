export function cerrarSesion(req, res) {
    res.clearCookie('token').redirect('http://localhost:3000');;
}