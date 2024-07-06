export function cerrarSesion(req, res) {
    res.clearCookie('token').redirect('https://nodeexpress-grupo15-24137.onrender.com');;
}