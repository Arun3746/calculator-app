let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

let result = "";

buttons.forEach(function(btn){
    btn.addEventListener("click", function(){

        let value = btn.innerText;

        if(value === "AC"){
            result = "";
            display.value = "0";
        }

        else if(value === "DEL"){
            result = result.slice(0,-1);
            display.value = result || "0";
        }

        else if(value === "="){
            try{
                result = eval(result).toString();
                display.value = result;
            }
            catch{
                display.value = "Error";
                result = "";
            }
        }

        else{
            result += value;
            display.value = result;
        }

    });
});