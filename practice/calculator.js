var operations = ["multiply", "add", "divide"];
var calculator = function (a, b, op) {
    //en runtime estamos realizando un check
    if (!operations.includes(op)) {
        console.log("this operation is not define");
    }
    if (op == "multiply")
        return a * b;
    if (op == "add")
        return a + b;
    if (op == "divide") {
        if (b == 0)
            return "can´t divide by 0";
        return a / b;
    }
};
var result = calculator(7, 2, "add");
console.log(result);
