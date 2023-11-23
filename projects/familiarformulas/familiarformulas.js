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
                    },
                    {
                        opcode: 'calcRESISTANCE',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'calculate resistance | voltage: [VOLTAGE] current: [CURRENT]',
                        arguments: {
                            VOLTAGE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '1',
                            },
                            CURRENT: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '1'
                            }
                        }
                    },
                    {
                        opcode: 'calcPOWER',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'calculate power | work: [WORK] time: [TIME]',
                        arguments: {
                            WORK: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '1',
                            },
                            TIME: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '1',
                            }
                        }
                    },
                    {
                        opcode: 'calcTIME',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'calculate time | distance: [DISTANCE] velocity: [VELOCITY]',
                        arguments: {
                            DISTANCE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '1',
                            },
                            VELOCITY: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '1',
                            }
                        }
                    }
                ]
            }
        }
        calcCURRENT({ VOLTAGE, RESISTANCE }) {
            return VOLTAGE / RESISTANCE;
        }
        calcVOLTAGE({ CURRENT, RESISTANCE}) {
            return CURRENT * RESISTANCE;
        }
        calcRESISTANCE({ VOLTAGE, CURRENT }) {
            return VOLTAGE / CURRENT;
        }
        calcPOWER({ WORK, TIME }) {
            return WORK / TIME;
        }
        calcTIME({ DISTANCE, VELOCITY }) {
            return DISTANCE / VELOCITY;
        }
    }

    
    Scratch.extensions.register(new FamiliarFormulas());
})(Scratch)