const WEEKDAYS = ['mon', 'tue', 'wen', 'thr', 'fri', 'sat', 'sun'];

window.itemPage = {
    async load(id) {
        const r = await fetch("/api/events/" + id, { headers: { authorization: `Bearer ${sessionStorage.getItem('token')}` } });
        const d = await r.json();   
        console.log(d.datetime)

        const a = new Date(d.datetime);
        document.querySelector("#item-name").textContent = d.name;
        document.querySelector("#item-extra").textContent = d.extra;
        document.querySelector("#item-date").value = `${a.getFullYear()}-${`${a.getMonth()}`.length === 2 ? a.getMonth() : `0${a.getMonth()}`}-${`${a.getDate()}`.length === 2 ? a.getDate() : `0${a.getDate()}`}`;
        document.querySelector("#item-time").value = `${`${a.getHours()}`.length === 2 ? a.getHours() : `0${a.getHours()}`}:${`${a.getMinutes()}`.length === 2 ? a.getMinutes() : `0${a.getMinutes()}`}`;
        document.querySelector("#item-type").textContent = d.type;
        window.id = id;
    },
    async removeItem() {
        location.href = "/index.html";
        const r = await fetch("/api/events/" + id, { headers: { authorization: `Bearer ${sessionStorage.getItem('token')}` }, method: "DELETE" });


    }
};

document.addEventListener("DOMContentLoaded", () =>
    itemPage.load((new URLSearchParams(location.search)).get("id")))