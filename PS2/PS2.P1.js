function* F() {
    let [val1, val2, result] = [0, 1, 0];
    yield 0;
    yield 1;
    while (1) {
        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
        }
}



function* Feven(allFibs) {
    while (1) {
        let current = allFibs.next().value;
        if (current % 2 != 0) {

            // We start on an even number,
            // If the current value is odd, then the next one is odd too
            // So skip it as well and yield the next one.

            allFibs.next();
            yield allFibs.next().value;
        } else {
            yield current;
        }
    }
}


allFibs = F();
let count = 5;
evenFibs = Feven(allFibs);

while (count --> 0) {
    console.log(evenFibs.next().value);
}