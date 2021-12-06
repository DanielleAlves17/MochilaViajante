function fizzBuzz(n1, n2) {
    for (let i = 1; i <= 100; i++) {
        if (i % n2 == 0 && i % n1 == 0) {
            console.log("fizzbuzz");
        }
        else if (i % n2 == 0) {
            console.log("buzz");
        }
        else if (i % n1 == 0) {
            console.log("fizz");
        }
        else {
            console.log(i);
        }

    }

}
fizzBuzz(3, 4);