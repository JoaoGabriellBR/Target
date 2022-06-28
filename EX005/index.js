function reverter() {
    let string = "Target";
    let novastring = "";

    for (let i = string.length - 1; i >= 0; i--) {
        novastring += string[i];
    }
    console.log(novastring);
}
reverter();