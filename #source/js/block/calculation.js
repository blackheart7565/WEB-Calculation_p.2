
const webMath = new WEBMath();

btnNumbers.forEach(item => {
    webMath.DisplayNumber(item, display, displaysType);
});
webMath.DisplayComa(coma, display);
webMath.ClearAll(clearAll, displaysType);

btnOperations.forEach(item => {
    webMath.ArithmeticOperation(item, display, displayCounting);
});
webMath.MathOperation(btnMathOperations, display, displayCounting);
webMath.Equals(equals, display, displayCounting);
webMath.DeleteDisplay(deleteDisplay, display)