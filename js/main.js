var onMsg = false;
$(":input").focus(function () {
    onMsg = true;
    console.log(onMsg);
});
$(document).mouseleave(function () {
    if (onMsg) {
        $("#exampleModal").modal('hide')
    } else {
        mostrarMsj();
    }
    onMsg = false;
});

function mostrarMsj() {
    if (localStorage.getItem("a")) {
        console.log("hola");
    } else {
        localStorage.setItem("a", "entro");
        $("#exampleModal").modal('show')
    }
}