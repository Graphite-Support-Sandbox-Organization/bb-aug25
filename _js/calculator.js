const calculator = (() => {
    function add(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            return "not valid numbers";
        }

        return num1 + num2;
    }

    function subtract(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            return "not valid numbers";
        }

        return num1 - num2;
    }
    
     function multiply(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            return "not valid numbers";
        }

        return num1 * num2;
    }

    return {
        add,
        subtract,
        multiply
    }
})();

module.exports = calculator;