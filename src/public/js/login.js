document.getElementById("form_de_login").addEventListener("submit", async (e) => {
    e.preventDefault();
    //console.log(e)
    const user = e.target.username.value;
    const password = e.target.password.value;

    //console.log(user, password)

    const resultado = await fetch("https://nodeexpress-grupo15-24137.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user, password
        })
    });
    const resJson = await resultado.json();
    //console.log(resJson)

    if (resJson.status !== "ok") {
        document.getElementById("respuestaServidor").innerHTML = resJson.statusText
        setTimeout(() => {
            document.getElementById("respuestaServidor").innerHTML = "&nbsp";
        }, 1200);
        return
    }
    if (resJson.status === "ok") {
        //console.log("aca esta el redirect y no lo hace:");
        window.location.href = "https://nodeexpress-grupo15-24137.onrender.com/admin";
    }
})