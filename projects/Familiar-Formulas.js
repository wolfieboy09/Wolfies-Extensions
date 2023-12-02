// Name: Familier Formulas
// ID: familiarformulas
// Description: Bunch of math utilities.
// By: Wolfieboy09 <https://scratch.mit.edu/users/Wolfieboy09/>


(function(Scratch){
    "use strict";
    class FamiliarFormulas {
        getInfo() {
            return {
                id: 'familiarformulas',
                name: 'Familiar Formulas',
                color1: '',
                blocks: [
                    { blockType: 'label', text: 'Slope Formula'},
                    {
                        opcode: 'calcSLOPE',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'slope y2 [Y2] y1 [Y1] x2 [X2] x1 [X1]',
                        arguments: {
                            Y2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1},
                            Y1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2},
                            X2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3},
                            X1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4}
                        }
                    }
                ]
            }
        }

        calcSLOPE({ X1, X2, Y1, Y2 }) {
            const numericX1 = parseInt(X1);
            const numericX2 = parseInt(X2);
            const numericY1 = parseInt(Y1);
            const numericY2 = parseInt(Y2);
        
            if (!isNaN(numericX1) && !isNaN(numericX2) && !isNaN(numericY1) && !isNaN(numericY2)) {
                const denominator = numericX2 - numericX1;
        
                if (denominator !== 0) {
                    const slope = (numericY2 - numericY1) / denominator;
                    return slope.toString();
                } else {
                    return "Undefined or infinite slope (division by zero)";
                }
            } else {
                return "Invalid input: Please provide numeric values";
            }
        }
        
        
        
    }

    
    Scratch.extensions.register(new FamiliarFormulas());
})(Scratch)