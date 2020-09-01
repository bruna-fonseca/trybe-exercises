function palidromo(str) {
    let d = str.length - 1;

    for (let i = 0; i <= d; i++, d--)
    if (str.charAt(i) != str.charAt(d)) {
        str = false
    } else {
        str = true
    }
}

palidromo(reviver)