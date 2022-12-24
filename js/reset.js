const resetForm = document.querySelector("#reset-form");

function onReset(event) {
    console.log("hello");
    window.localStorage.removeItem("userName");
}

resetForm.addEventListener("submit", onReset);
