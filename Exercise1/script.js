function ChangeName() {
    let name = prompt("What ypur name", "");
    document.getElementById("inputName").innerHTML = `Hello ${name} `
}