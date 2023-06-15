// 1 Questão 

function senha(senha){

    if(senha.length < 8){
        alert("Senha muito pequena")
    }

    else if(!/[A-Z]/.test(senha)){
        alert("Falta letra maiúscula")
    }

    else if(!/[a-z]/.test(senha)){
        alert("Falta letra minúscula")
    }

    else if(!/\d/.test(senha)){
        alert("Falta número")
    }

    else{
        alert("Tudo ok!")
    }
}

// 2 Questão

function temperatura(temp){
    var tempF = (temp * 9/5) + 32
    return(tempF)
}

// 3 Questão

function inverter(string){
    var invertida = "";

    for (var i = string.length - 1; i >= 0; i--){
        invertida += string[i];
    }

    return invertida;
}

// 4 Questão

function palindromo(string){
    var stringInvertida = "";

    for (var i = string.length - 1; i>=0; i--)
        stringInvertida += string[i]

    if(string == stringInvertida){
        alert("É um palíndromo")
    }

    else{
        alert("Não é um palíndromo")
    }
}

// 5 Questão

function primo(numero){

    if (numero <=1){
        return("Não é primo")
    }

    for (var i = 2; i <= Math.sqrt(numero); i++){

        if(numero % i === 0){
            return("Não é primo");
        }
    }

    return("É primo");
    
}