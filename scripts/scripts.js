let button = document.querySelector(".button");

button.addEventListener("click", function() {
    
    let num1 = parseFloat(document.querySelector("#first").value),
        select = document.querySelector("#type"),
        operation = select.options[select.selectedIndex].value,
        num2 = parseFloat(document.querySelector("#second").value),
        answerDiv = document.querySelector("#answer"),
        answer;
    
    if (isNaN(num1) || isNaN(num2)){
        alert("Please enter numbers only.");
        document.querySelector('#first').value = '';
        document.querySelector('#second').value = '';
    }else{
        switch(operation) {
            case "multiply":
                answer = num1 * num2;
                break;
            case "divide":
                answer = num1/num2;
                break;
            case "add": 
                answer = num1 + num2;
                break;
            case "subtract":
                answer = num1 - num2;
                break;
            default:
                alert("Please enter valid option.");
                break;
        };
        
        answerDiv.innerHTML = `<p>${answer}</p>`;
    }
});

