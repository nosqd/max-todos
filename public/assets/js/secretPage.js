
window.secretPage = {
    async enterCode(code) {
        const r = await fetch("/api/key", {
            headers: {
                authorization: `Bearer ${code}`
            }
        });
        const d = await r.json();
        if (r.status === 401) {
            alert(d.message)
        }
        else if (r.status === 200) {
            location.replace("/")
            sessionStorage.setItem("token", code);
            window.token = code;

        }
    }
}