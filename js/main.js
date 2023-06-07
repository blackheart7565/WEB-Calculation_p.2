const display=document.getElementById("calculation__display"),displayCounting=document.getElementById("display-counting"),clearAll=document.getElementById("clearAll"),equals=document.getElementById("equals"),deleteDisplay=document.getElementById("deleteDisplay"),btnMathOperations=document.querySelectorAll(".math-operation"),btnOperations=document.querySelectorAll(".operation"),btnNumbers=document.querySelectorAll(".calculation__btn-number"),coma=document.querySelector(".calculation__btn-coma"),displaysType=[display,displayCounting];class WEBMath{#t=!0;#e=!0;#a=!0;#n="";#i=0;#s=0;navigationWEBCalc={replaceCommaToPoint:t=>Number.parseFloat(t.replace(",",".")),replacePointToComma:t=>t.toString().replace(".",",")};DisplayNumber(t,e,a){t.addEventListener("click",(n=>{this.#a||this.#l(a),("0"===e.textContent||this.#t)&&(e.textContent=""),this.#t=!1,e.textContent+=t.textContent}))}DisplayComa(t,e){t.addEventListener("click",(a=>{e.textContent+=t.textContent,this.#t=!1}))}ClearAll(t,e){t.addEventListener("click",(t=>{this.#l(e)}))}DeleteDisplay(t,e){t.addEventListener("click",(t=>{e.textContent.length>0&&(e.textContent=e.textContent.slice(0,-1)),""===e.textContent&&(e.textContent="0")}))}ArithmeticOperation(t,e,a){t.addEventListener("click",(n=>{this.#o(t.textContent,e,a)}))}MathOperation(t,e,a){t.forEach((t=>{t.addEventListener("click",(n=>{this.#r(t.textContent,e,a)}))}))}Equals(t,e,a){t.addEventListener("click",(t=>{this.#C(e,a)}))}#l(t){this.#t=!0,this.#e=!0,this.#a=!0,this.#n="",this.#i=0,this.#s=0,t[0].textContent="0",t[1].textContent=""}#o(t,e,a){switch(t){case"+":this.#s=e.textContent,this.#t=!0,this.#e=!0,a.textContent=`${this.#s}${t}`,this.#n=t;break;case"−":case"×":case"÷":case"%":this.#s=e.textContent,this.#t=!0,a.textContent=`${e.textContent}${t}`,this.#n=t}}#r(t){switch(t){case"x²":this.#t=!0,displayCounting.textContent=`sqr( ${Number.parseFloat(display.textContent)} )`,display.textContent=Math.pow(Number.parseFloat(display.textContent),2);break;case"√x":this.#t=!0,displayCounting.textContent=`√( ${Number.parseFloat(display.textContent)} )`,display.textContent=Math.sqrt(Number.parseFloat(display.textContent));break;case"+/-":display.textContent=-1*Number.parseFloat(display.textContent);break;case"⅟x":"0"===display.textContent?display.textContent="Деление на ноль невозможно":(displayCounting.textContent=`1/( ${Number.parseFloat(display.textContent)} )`,display.textContent=1/Number.parseFloat(display.textContent))}}#C(t,e){switch(this.#e&&(this.#i=t.textContent,e.textContent=`${e.textContent}${t.textContent}=`),this.#n){case"+":if(this.#e)t.textContent=this.navigationWEBCalc.replacePointToComma(Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#s))+Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(t.textContent))),this.#e=!1;else{e.textContent=`${this.#s}+${this.#i}=`;let a=Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#s));t.textContent=this.navigationWEBCalc.replacePointToComma(a+=Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#i)))}this.#a=!1,this.#t=!0;break;case"−":if(this.#e)t.textContent=this.navigationWEBCalc.replacePointToComma(Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#s))-Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(t.textContent))),this.#e=!1;else{e.textContent=`${this.#s}-${this.#i}=`;let a=Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#s));t.textContent=this.navigationWEBCalc.replacePointToComma(a-=Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#i)))}this.#a=!1,this.#t=!0;break;case"×":if(this.#e)t.textContent=this.navigationWEBCalc.replacePointToComma(Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#s))*Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(t.textContent))),this.#e=!1;else{e.textContent=`${this.#s}×${this.#i}=`;let a=Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#s));t.textContent=this.navigationWEBCalc.replacePointToComma(a*=Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#i)))}this.#a=!1,this.#t=!0;break;case"÷":if(this.#e)t.textContent=this.navigationWEBCalc.replacePointToComma(Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#s))/Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(t.textContent))),this.#e=!1;else{e.textContent=`${this.#s}÷${this.#i}=`;let a=Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#s));t.textContent=this.navigationWEBCalc.replacePointToComma(a/=Number.parseFloat(this.navigationWEBCalc.replaceCommaToPoint(this.#i)))}this.#a=!1,this.#t=!0;break;case"%":e.textContent=`${e.textContent}${t.textContent}=`}this.#s=t.textContent}}const webMath=new WEBMath;btnNumbers.forEach((t=>{webMath.DisplayNumber(t,display,displaysType)})),webMath.DisplayComa(coma,display),webMath.ClearAll(clearAll,displaysType),btnOperations.forEach((t=>{webMath.ArithmeticOperation(t,display,displayCounting)})),webMath.MathOperation(btnMathOperations,display,displayCounting),webMath.Equals(equals,display,displayCounting),webMath.DeleteDisplay(deleteDisplay,display);