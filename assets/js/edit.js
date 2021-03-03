const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
console.log(id);
