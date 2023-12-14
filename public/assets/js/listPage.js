const WEEKDAYS = ['sun', 'mon', 'tue', 'wen', 'thr', 'fri', 'sat'];

window.listPage = {
    async load(category) {
        const r = await fetch("/api/events/by/" + category, {headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}});
        const d = await r.json();

        for (const e of d) {
            const w = WEEKDAYS[(new Date(e.datetime)).getDay()];
            document.querySelector(`#${w}`).innerHTML += `<a class="list-group-item" href="/item.html?id=${e._id}">${e.name}</a>`
        }
    }
};

document.addEventListener("DOMContentLoaded", () => listPage.load((new URLSearchParams(location.search)).get("category")))