// noinspection JSCheckFunctionSignatures
class WEBMath {
    #isEnterValues = true;
    #isEquals = true;
    #isClearAll = true;

    #operation = '';

    #number2 = 0;
    #result = 0;

    navigationWEBCalc = {
        // Replacing a comma with a dot
        replaceCommaToPoint(str) {
            return Number.parseFloat(str.replace(',', '.'));
        },
        // Replacing a dot with a comma
        replacePointToComma(str) {
            return str.toString().replace('.', ',')
        },
    }

    DisplayNumber(btn, display, obj) {
        btn.addEventListener('click', e => {
            if (!this.#isClearAll) {
                this.#clearAllDisplay(obj);
            }
            if (display.textContent === '0' || this.#isEnterValues) {
                display.textContent = '';
            }
            this.#isEnterValues = false;
            display.textContent += btn.textContent;
        });
    }

    DisplayComa(element, display) {
        element.addEventListener('click', e => {
            display.textContent += element.textContent;
            this.#isEnterValues = false;
        });
    }

    ClearAll(btn, obj) {
        btn.addEventListener('click', e => {
            this.#clearAllDisplay(obj);
        });
    }

    DeleteDisplay(element, display) {
        element.addEventListener('click', e => {
            if (display.textContent.length > 0) {
                display.textContent = display.textContent.slice(0, -1);
            }
            if (display.textContent === '') {
                display.textContent = '0';
            }
        });
    }

    ArithmeticOperation(element, display, displayCounting) {
        element.addEventListener('click', e => {
            this.#operationCompute(element.textContent, display, displayCounting);
        });
    }

    MathOperation(btnMathOperations, display, displayCounting) {
        btnMathOperations.forEach(item => {
            item.addEventListener('click', e => {
                this.#mathOperationCompute(item.textContent, display, displayCounting);
            });
        });
    }

    Equals(element, display, displayCounting) {
        element.addEventListener('click', e => {
            this.#equals(display, displayCounting);
        });
    }

    #clearAllDisplay(obj) {
        this.#isEnterValues = true;
        this.#isEquals = true;
        this.#isClearAll = true;

        this.#operation = '';
        this.#number2 = 0;
        this.#result = 0;

        obj[0].textContent = '0';
        obj[1].textContent = '';
    }

    #operationCompute(operation, display, displayCounting) {
        switch (operation) {
            case '+': {
                this.#result = display.textContent;
                this.#isEnterValues = true;
                this.#isEquals = true;
                displayCounting.textContent = `${this.#result}${operation}`;
                this.#operation = operation;
            }
                break;
            case '−': {
                this.#result = display.textContent;
                this.#isEnterValues = true;
                displayCounting.textContent = `${display.textContent}${operation}`;
                this.#operation = operation;
            }
                break;
            case '×': {
                this.#result = display.textContent;
                this.#isEnterValues = true;
                displayCounting.textContent = `${display.textContent}${operation}`;
                this.#operation = operation;
            }
                break;
            case '÷': {
                this.#result = display.textContent;
                this.#isEnterValues = true;
                displayCounting.textContent = `${display.textContent}${operation}`
                this.#operation = operation;
            }
                break;
            case '%': {
                this.#result = display.textContent;
                this.#isEnterValues = true;
                displayCounting.textContent = `${display.textContent}${operation}`
                this.#operation = operation;
            }
                break;
        }
    }

    #mathOperationCompute(operation) {
        switch (operation) {
            case 'x²': {
                this.#isEnterValues = true;
                displayCounting.textContent = `sqr( ${Number.parseFloat(display.textContent)} )`;
                display.textContent = Math.pow(Number.parseFloat(display.textContent), 2);
            }
                break;
            case '√x': {
                this.#isEnterValues = true;
                displayCounting.textContent = `√( ${Number.parseFloat(display.textContent)} )`;
                display.textContent = Math.sqrt(Number.parseFloat(display.textContent));
            }
                break;
            case '+/-': {
                display.textContent = -1 * Number.parseFloat(display.textContent);
            }
                break;
            case '⅟x': {
                if (display.textContent === '0') {
                    display.textContent = `Деление на ноль невозможно`;
                } else {
                    displayCounting.textContent = `1/( ${Number.parseFloat(display.textContent)} )`;
                    display.textContent = 1 / Number.parseFloat(display.textContent);
                }
            }
                break;
        }
    }

    #equals(display, displayCounting) {
        if (this.#isEquals) {
            this.#number2 = display.textContent;
            displayCounting.textContent = `${displayCounting.textContent}${display.textContent}=`;
        }

        switch (this.#operation) {
            case '+': {
                if (this.#isEquals) {
                    display.textContent = this.navigationWEBCalc.replacePointToComma(
                        Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(this.#result)
                        ) + Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(display.textContent)
                        )
                    );
                    this.#isEquals = false;
                } else {
                    displayCounting.textContent = `${this.#result}+${this.#number2}=`;

                    let tempResult = Number.parseFloat(
                        this.navigationWEBCalc.replaceCommaToPoint(
                            this.#result
                        )
                    );

                    display.textContent = this.navigationWEBCalc.replacePointToComma(
                        tempResult += Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(
                                this.#number2
                            )
                        )
                    );
                }
                this.#isClearAll = false;
                this.#isEnterValues = true;
            }
                break;
            case '−': {
                if (this.#isEquals) {
                    display.textContent = this.navigationWEBCalc.replacePointToComma(
                        Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(this.#result)
                        ) - Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(display.textContent)
                        )
                    );
                    this.#isEquals = false;
                } else {
                    displayCounting.textContent = `${this.#result}-${this.#number2}=`;

                    let tempResult = Number.parseFloat(
                        this.navigationWEBCalc.replaceCommaToPoint(
                            this.#result
                        )
                    );

                    display.textContent = this.navigationWEBCalc.replacePointToComma(
                        tempResult -= Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(
                                this.#number2
                            )
                        )
                    );
                }
                this.#isClearAll = false;
                this.#isEnterValues = true;
            }
                break;
            case '×': {
                if (this.#isEquals) {
                    display.textContent = this.navigationWEBCalc.replacePointToComma(
                        Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(this.#result)
                        ) * Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(display.textContent)
                        )
                    );
                    this.#isEquals = false;
                } else {
                    displayCounting.textContent = `${this.#result}×${this.#number2}=`;

                    let tempResult = Number.parseFloat(
                        this.navigationWEBCalc.replaceCommaToPoint(
                            this.#result
                        )
                    );

                    display.textContent = this.navigationWEBCalc.replacePointToComma(
                        tempResult *= Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(
                                this.#number2
                            )
                        )
                    );
                }
                this.#isClearAll = false;
                this.#isEnterValues = true;
            }
                break;
            case '÷': {
                if (this.#isEquals) {
                    display.textContent = this.navigationWEBCalc.replacePointToComma(
                        Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(this.#result)
                        ) / Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(display.textContent)
                        )
                    );
                    this.#isEquals = false;
                } else {
                    displayCounting.textContent = `${this.#result}÷${this.#number2}=`;

                    let tempResult = Number.parseFloat(
                        this.navigationWEBCalc.replaceCommaToPoint(
                            this.#result
                        )
                    );

                    display.textContent = this.navigationWEBCalc.replacePointToComma(
                        tempResult /= Number.parseFloat(
                            this.navigationWEBCalc.replaceCommaToPoint(
                                this.#number2
                            )
                        )
                    );
                }
                this.#isClearAll = false;
                this.#isEnterValues = true;
            }
                break;
            case '%': {
                displayCounting.textContent = `${displayCounting.textContent}${display.textContent}=`;
            }
                break;
        }

        this.#result = display.textContent;
    }
}