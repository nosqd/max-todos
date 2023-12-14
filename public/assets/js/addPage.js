
window.addPage = {
    categoryTranlations: {
        "event": "Событие",
        "every-lesson": "Постоянное занятие",
        "once-lesson": "Пробное занятие"
    },
    load(category) {
        document.querySelector("#selected-category").textContent = this.categoryTranlations[category];
    },
    async add() {
        let date = document.getElementById("date-input").value,
            time = document.getElementById("time-input").value;
        const r = await fetch("/api/events/", {
            headers: { authorization: `Bearer ${sessionStorage.getItem('token')}`, "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({
                datetime: new Date(date + " " + time),
                name: document.querySelector("#name-input").value,
                extra: document.querySelector("#extra-input").value,
                type: (new URLSearchParams(location.search)).get("category")
            })
        });
        location.href = "/list.html?category="+(new URLSearchParams(location.search)).get("category")

    }
}

document.addEventListener("DOMContentLoaded", () => {
    addPage.load((new URLSearchParams(location.search)).get("category"));
})