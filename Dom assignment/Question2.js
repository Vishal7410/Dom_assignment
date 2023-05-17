// Creat a calculater

function calculater(num1,num2,oprator) 
{
    let result;
    switch (oprator) {
        case "+" : result = num1+num2;    
            break;
            case "-": result = num1-num2; 
            break;
            case "/" : result = num1/num2;
            break;
            case "*" : result = num1*num2;
            break;
            case "%": result = num1%num2;  
            break    
    
        default: 
        console.log("Invalid Operator");
           return;

    }

    console.log(`${num1} ${oprator} ${num2} = ${result}`);    
}

calculater(4,3,"-");

calculater(4,3,"*");

calculater(4,3,"/");

calculater(4,3,"+");

calculater(4,3,"%");


