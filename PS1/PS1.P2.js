
const evaluate = expr => func(expr[1]);
const func = op => {
    switch (op) {
        case '+':
            return (expr) => parseInt(expr[0]) + parseInt(expr[2]);
            break;
        case '-':
            return (expr) => parseInt(expr[0]) - parseInt(expr[2]);
            break;
        case '/':
            return (expr) => parseInt(expr[0]) / parseInt(expr[2]);
            break;
        case '*':
            return (expr) => parseInt(expr[0]) * parseInt(expr[2]);
            break;
        default:
            return (expr) => parseInt(expr[0]) % parseInt(expr[2]);

    }
};

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

const expression1 = '8+3';
let operator1 = evaluate(expression1);
console.log(`${expression1} = ${operator1(expression1)}`);

const expression2 = '8-3';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2)}`);

const expression3 = '8/3';
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3(expression3)}`);

const expression4 = '8*3';
let operator4 = evaluate(expression4);
console.log(`${expression4} = ${operator4(expression4)}`);

