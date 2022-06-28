function main() {
    var valor = 8
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i < valor; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    fib.includes(valor) ? console.log("pertence") : console.log("não pertence");

    console.log(fib);
}

main();
