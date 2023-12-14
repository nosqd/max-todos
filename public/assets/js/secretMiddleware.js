const item = sessionStorage.getItem("token");
if (item === null) {
    location.replace("/enter.html")
}
else {
    window.token = item;
}