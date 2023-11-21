(function(Scratch){

    class FamiliarFormulas {
        getInfo() {
            return {
                id: 'familiarformulas',
                name: 'Familiar Formulas',
                color1: '',
                blocks: [
                    {  blockType: 'label', text: 'Physics Formulas' },
                    {
                        opcode: 'calcCURRENT',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'calcuate current | voltage: [VOLTAGE] resistance: [RESISTANCE]',
                        arguments: {
                            VOLTAGE: { 
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '1'
                            },
                            RESISTANCE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '1'      
                            }

                        }
                    },
                    {
                        opcode: 'calcVOLTAGE',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'calcualte voltage | current: [CURRENT] resistance: [RESISTANCE]',
                        arguments: {
                            CURRENT: { 
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '1'
                            },
                            RESISTANCE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '1'      
                            }

                        }
                    }
                ]
            }
        }
        calcCURRENT({ VOLTAGE, RESISTANCE }) {
            return VOLTAGE / RESISTANCE
        }
        calcVOLTAGE({ CURRENT, RESISTANCE}) {
            return CURRENT * RESISTANCE
        }
    }

    
    Scratch.extensions.register(new FamiliarFormulas());
})(Scratch)