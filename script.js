
const bancoPalavras = [
    "abate",
    "bomba",
    "carro",
    "doido",
    "frase",
    "gosto",
    "horta",
    "ideia",
    "junto",
    "livro",
    "moeda",
    "noite",
    "olhar",
    "padre",
    "queda",
    "rápido",
    "salão",
    "torre",
    "urano",
    "verbo"
];
const indiceAleatorio = Math.floor(Math.random() * bancoPalavras.length);
const Palavra = bancoPalavras[indiceAleatorio];

function moveToNext(current, nextFieldID, prevFieldID) {
    // Move para o próximo campo quando atingir o tamanho máximo
    if (current.value.length >= current.maxLength) {
        document.getElementById(nextFieldID).focus();
    }

    // Volta para o campo anterior quando o backspace é pressionado e o campo atual está vazio
    current.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && current.value.length === 0) {
            document.getElementById(prevFieldID).focus();
        }
    });
}


let line = 1

document.addEventListener('keydown', event => {
    if(event.key == "Enter" && line == 1){
        
        line++

        const input1 = document.getElementById("input1")
        const input2 = document.getElementById("input2")
        const input3 = document.getElementById("input3")
        const input4 = document.getElementById("input4")
        const input5 = document.getElementById("input5")

        

        if(Palavra[0] == input1.value){
            input1.style.backgroundColor = "green"
            input1.style.border = "5px solid green"
            input1.disabled = true;
        }
        else{
            if(input1.value == Palavra[1] || input1.value == Palavra[2] || input1.value == Palavra[3] || input1.value == Palavra[4]){
                input1.style.backgroundColor = "orange"
                input1.style.border = "5px solid orange"
                input1.disabled = true;
            }
            else{
                input1.style.backgroundColor = "red"
                input1.style.border = "5px solid red"
                input1.disabled = true;
            }
            
        }
        if(Palavra[1] == input2.value){
            input2.style.backgroundColor = "green"
            input2.style.border = "5px solid green"
            input2.disabled = true;
        }
        else{
            if(input2.value == Palavra[0] || input2.value == Palavra[2] || input2.value == Palavra[3] || input2.value == Palavra[4]){
                input2.style.backgroundColor = "orange"
                input2.style.border = "5px solid orange"
                input2.disabled = true;
            }
            else{
                input2.style.backgroundColor = "red"
                input2.style.border = "5px solid red"
                input2.disabled = true;
            }
        }
        if(Palavra[2] == input3.value){
            input3.style.backgroundColor = "green"
            input3.style.border = "5px solid green"
            input3.disabled = true;
        }
        else{
            if(input3.value == Palavra[0] || input3.value == Palavra[1] || input3.value == Palavra[3] || input3.value == Palavra[4]){
                input3.style.backgroundColor = "orange"
                input3.style.border = "5px solid orange"
                input3.disabled = true;
            }
            else{
                input3.style.backgroundColor = "red"
                input3.style.border = "5px solid red"
                input3.disabled = true;
            }
        }
        if(Palavra[3] == input4.value){
            input4.style.backgroundColor = "green"
            input4.style.border = "5px solid green"
            input4.disabled = true;
        }
        else{
            if(input4.value == Palavra[0] || input4.value == Palavra[1] || input4.value == Palavra[2] || input4.value == Palavra[4]){
                input4.style.backgroundColor = "orange"
                input4.style.border = "5px solid orange"
                input4.disabled = true;
            }
            else{
                input4.style.backgroundColor = "red"
                input4.style.border = "5px solid red"
                input4.disabled = true;
            }
        }
        if(Palavra[4] == input5.value){
            input5.style.backgroundColor = "green"
            input5.style.border = "5px solid green"
            input5.disabled = true
        }
        else{
            if(input5.value == Palavra[0] || input5.value == Palavra[1] || input5.value == Palavra[2] || input5.value == Palavra[3]){
                input5.style.backgroundColor = "orange"
                input5.style.border = "5px solid orange"
                input5.disabled = true
            }
            else{
                input5.style.backgroundColor = "red"
                input5.style.border = "5px solid red"
                input5.disabled = true
            }
        }
        if(input1.style.backgroundColor == "green" && input2.style.backgroundColor == "green" && input3.style.backgroundColor == "green" && input4.style.backgroundColor == "green" && input5.style.backgroundColor == "green"){
            window.alert("Voce ganhou!!!")
        }
        else{
            const input6 = document.getElementById("input6").disabled = false
            const input7 = document.getElementById("input7").disabled = false
            const input8 = document.getElementById("input8").disabled = false
            const input9 = document.getElementById("input9").disabled = false
            const input10 = document.getElementById("input10").disabled = false
        }
        
    }
    else if(event.key == "Enter" && line == 2){
        
            line++
    
            const input6 = document.getElementById("input6")
            const input7 = document.getElementById("input7")
            const input8 = document.getElementById("input8")
            const input9 = document.getElementById("input9")
            const input10 = document.getElementById("input10")
    
            
    
            if(Palavra[0] == input6.value){
                input6.style.backgroundColor = "green"
                input6.style.border = "5px solid green"
                input6.disabled = true;
            }
            else{
                if(input6.value == Palavra[1] || input6.value == Palavra[2] || input6.value == Palavra[3] || input6.value == Palavra[4]){
                    input6.style.backgroundColor = "orange"
                    input6.style.border = "5px solid orange"
                    input6.disabled = true;
                }
                else{
                    input6.style.backgroundColor = "red"
                    input6.style.border = "5px solid red"
                    input6.disabled = true;
                }
                
            }
            if(Palavra[1] == input7.value){
                input7.style.backgroundColor = "green"
                input7.style.border = "5px solid green"
                input7.disabled = true;
            }
            else{
                if(input7.value == Palavra[0] || input7.value == Palavra[2] || input7.value == Palavra[3] || input7.value == Palavra[4]){
                    input7.style.backgroundColor = "orange"
                    input7.style.border = "5px solid orange"
                    input7.disabled = true;
                }
                else{
                    input7.style.backgroundColor = "red"
                    input7.style.border = "5px solid red"
                    input7.disabled = true;
                }
            }
            if(Palavra[2] == input8.value){
                input8.style.backgroundColor = "green"
                input8.style.border = "5px solid green"
                input8.disabled = true;
            }
            else{
                if(input8.value == Palavra[0] || input8.value == Palavra[1] || input8.value == Palavra[3] || input8.value == Palavra[4]){
                    input8.style.backgroundColor = "orange"
                    input8.style.border = "5px solid orange"
                    input8.disabled = true;
                }
                else{
                    input8.style.backgroundColor = "red"
                    input8.style.border = "5px solid red"
                    input8.disabled = true;
                }
            }
            if(Palavra[3] == input9.value){
                input9.style.backgroundColor = "green"
                input9.style.border = "5px solid green"
                input9.disabled = true;
            }
            else{
                if(input9.value == Palavra[0] || input9.value == Palavra[1] || input9.value == Palavra[2] || input9.value == Palavra[4]){
                    input9.style.backgroundColor = "orange"
                    input9.style.border = "5px solid orange"
                    input9.disabled = true;
                }
                else{
                    input9.style.backgroundColor = "red"
                    input9.style.border = "5px solid red"
                    input9.disabled = true;
                }
            }
            if(Palavra[4] == input10.value){
                input10.style.backgroundColor = "green"
                input10.style.border = "5px solid green"
                input10.disabled = true
            }
            else{
                if(input10.value == Palavra[0] || input10.value == Palavra[1] || input10.value == Palavra[2] || input10.value == Palavra[3]){
                    input10.style.backgroundColor = "orange"
                    input10.style.border = "5px solid orange"
                    input10.disabled = true
                }
                else{
                    input10.style.backgroundColor = "red"
                    input10.style.border = "5px solid red"
                    input10.disabled = true
                }
            }
            if(input6.style.backgroundColor == "green" && input7.style.backgroundColor == "green" && input8.style.backgroundColor == "green" && input9.style.backgroundColor == "green" && input10wwwwwwwwssssssssaaaaaddd  .style.backgroundColor == "green"){
                window.alert("Voce ganhou!!!")
            }
            else{
                const input11 = document.getElementById("input11").disabled = false
                const input12 = document.getElementById("input12").disabled = false
                const input13 = document.getElementById("input13").disabled = false
                const input14 = document.getElementById("input14").disabled = false
                const input15 = document.getElementById("input15").disabled = false
            }
            
        }
        else if(event.key == "Enter" && line == 3){
        
            line++
    
            const input6 = document.getElementById("input11")
            const input7 = document.getElementById("input12")
            const input8 = document.getElementById("input13")
            const input9 = document.getElementById("input14")
            const input10 = document.getElementById("input15")
    
            
    
            if(Palavra[0] == input6.value){
                input6.style.backgroundColor = "green"
                input6.style.border = "5px solid green"
                input6.disabled = true;
            }
            else{
                if(input6.value == Palavra[1] || input6.value == Palavra[2] || input6.value == Palavra[3] || input6.value == Palavra[4]){
                    input6.style.backgroundColor = "orange"
                    input6.style.border = "5px solid orange"
                    input6.disabled = true;
                }
                else{
                    input6.style.backgroundColor = "red"
                    input6.style.border = "5px solid red"
                    input6.disabled = true;
                }
                
            }
            if(Palavra[1] == input7.value){
                input7.style.backgroundColor = "green"
                input7.style.border = "5px solid green"
                input7.disabled = true;
            }
            else{
                if(input7.value == Palavra[0] || input7.value == Palavra[2] || input7.value == Palavra[3] || input7.value == Palavra[4]){
                    input7.style.backgroundColor = "orange"
                    input7.style.border = "5px solid orange"
                    input7.disabled = true;
                }
                else{
                    input7.style.backgroundColor = "red"
                    input7.style.border = "5px solid red"
                    input7.disabled = true;
                }
            }
            if(Palavra[2] == input8.value){
                input8.style.backgroundColor = "green"
                input8.style.border = "5px solid green"
                input8.disabled = true;
            }
            else{
                if(input8.value == Palavra[0] || input8.value == Palavra[1] || input8.value == Palavra[3] || input8.value == Palavra[4]){
                    input8.style.backgroundColor = "orange"
                    input8.style.border = "5px solid orange"
                    input8.disabled = true;
                }
                else{
                    input8.style.backgroundColor = "red"
                    input8.style.border = "5px solid red"
                    input8.disabled = true;
                }
            }
            if(Palavra[3] == input9.value){
                input9.style.backgroundColor = "green"
                input9.style.border = "5px solid green"
                input9.disabled = true;
            }
            else{
                if(input9.value == Palavra[0] || input9.value == Palavra[1] || input9.value == Palavra[2] || input9.value == Palavra[4]){
                    input9.style.backgroundColor = "orange"
                    input9.style.border = "5px solid orange"
                    input9.disabled = true;
                }
                else{
                    input9.style.backgroundColor = "red"
                    input9.style.border = "5px solid red"
                    input9.disabled = true;
                }
            }
            if(Palavra[4] == input10.value){
                input10.style.backgroundColor = "green"
                input10.style.border = "5px solid green"
                input10.disabled = true
            }
            else{
                if(input10.value == Palavra[0] || input10.value == Palavra[1] || input10.value == Palavra[2] || input10.value == Palavra[3]){
                    input10.style.backgroundColor = "orange"
                    input10.style.border = "5px solid orange"
                    input10.disabled = true
                }
                else{
                    input10.style.backgroundColor = "red"
                    input10.style.border = "5px solid red"
                    input10.disabled = true
                }
            }
            if(input6.style.backgroundColor == "green" && input7.style.backgroundColor == "green" && input8.style.backgroundColor == "green" && input9.style.backgroundColor == "green" && input10.style.backgroundColor == "green"){
                window.alert("Voce ganhou!!!")
            }
            else{
                const input11 = document.getElementById("input16").disabled = false
                const input12 = document.getElementById("input17").disabled = false
                const input13 = document.getElementById("input18").disabled = false
                const input14 = document.getElementById("input19").disabled = false
                const input15 = document.getElementById("input20").disabled = false
            }
            
        }
    else if(event.key == "Enter" && line == 4){
        
            line++
    
            const input6 = document.getElementById("input16")
            const input7 = document.getElementById("input17")
            const input8 = document.getElementById("input18")
            const input9 = document.getElementById("input19")
            const input10 = document.getElementById("input20")
    
            
    
            if(Palavra[0] == input6.value){
                input6.style.backgroundColor = "green"
                input6.style.border = "5px solid green"
                input6.disabled = true;
            }
            else{
                if(input6.value == Palavra[1] || input6.value == Palavra[2] || input6.value == Palavra[3] || input6.value == Palavra[4]){
                    input6.style.backgroundColor = "orange"
                    input6.style.border = "5px solid orange"
                    input6.disabled = true;
                }
                else{
                    input6.style.backgroundColor = "red"
                    input6.style.border = "5px solid red"
                    input6.disabled = true;
                }
                
            }
            if(Palavra[1] == input7.value){
                input7.style.backgroundColor = "green"
                input7.style.border = "5px solid green"
                input7.disabled = true;
            }
            else{
                if(input7.value == Palavra[0] || input7.value == Palavra[2] || input7.value == Palavra[3] || input7.value == Palavra[4]){
                    input7.style.backgroundColor = "orange"
                    input7.style.border = "5px solid orange"
                    input7.disabled = true;
                }
                else{
                    input7.style.backgroundColor = "red"
                    input7.style.border = "5px solid red"
                    input7.disabled = true;
                }
            }
            if(Palavra[2] == input8.value){
                input8.style.backgroundColor = "green"
                input8.style.border = "5px solid green"
                input8.disabled = true;
            }
            else{
                if(input8.value == Palavra[0] || input8.value == Palavra[1] || input8.value == Palavra[3] || input8.value == Palavra[4]){
                    input8.style.backgroundColor = "orange"
                    input8.style.border = "5px solid orange"
                    input8.disabled = true;
                }
                else{
                    input8.style.backgroundColor = "red"
                    input8.style.border = "5px solid red"
                    input8.disabled = true;
                }
            }
            if(Palavra[3] == input9.value){
                input9.style.backgroundColor = "green"
                input9.style.border = "5px solid green"
                input9.disabled = true;
            }
            else{
                if(input9.value == Palavra[0] || input9.value == Palavra[1] || input9.value == Palavra[2] || input9.value == Palavra[4]){
                    input9.style.backgroundColor = "orange"
                    input9.style.border = "5px solid orange"
                    input9.disabled = true;
                }
                else{
                    input9.style.backgroundColor = "red"
                    input9.style.border = "5px solid red"
                    input9.disabled = true;
                }
            }
            if(Palavra[4] == input10.value){
                input10.style.backgroundColor = "green"
                input10.style.border = "5px solid green"
                input10.disabled = true
            }
            else{
                if(input10.value == Palavra[0] || input10.value == Palavra[1] || input10.value == Palavra[2] || input10.value == Palavra[3]){
                    input10.style.backgroundColor = "orange"
                    input10.style.border = "5px solid orange"
                    input10.disabled = true
                }
                else{
                    input10.style.backgroundColor = "red"
                    input10.style.border = "5px solid red"
                    input10.disabled = true
                }
            }
            if(input6.style.backgroundColor == "green" && input7.style.backgroundColor == "green" && input8.style.backgroundColor == "green" && input9.style.backgroundColor == "green" && input10.style.backgroundColor == "green"){
                window.alert("Voce ganhou!!!")
            }
            else{
                const input11 = document.getElementById("input21").disabled = false
                const input12 = document.getElementById("input22").disabled = false
                const input13 = document.getElementById("input23").disabled = false
                const input14 = document.getElementById("input24").disabled = false
                const input15 = document.getElementById("input25").disabled = false
            }
            
        }
        else if(event.key == "Enter" && line == 5){
        
            line++
    
            const input6 = document.getElementById("input21")
            const input7 = document.getElementById("input22")
            const input8 = document.getElementById("input23")
            const input9 = document.getElementById("input24")
            const input10 = document.getElementById("input25")
    
            
    
            if(Palavra[0] == input6.value){
                input6.style.backgroundColor = "green"
                input6.style.border = "5px solid green"
                input6.disabled = true;
            }
            else{
                if(input6.value == Palavra[1] || input6.value == Palavra[2] || input6.value == Palavra[3] || input6.value == Palavra[4]){
                    input6.style.backgroundColor = "orange"
                    input6.style.border = "5px solid orange"
                    input6.disabled = true;
                }
                else{
                    input6.style.backgroundColor = "red"
                    input6.style.border = "5px solid red"
                    input6.disabled = true;
                }
                
            }
            if(Palavra[1] == input7.value){
                input7.style.backgroundColor = "green"
                input7.style.border = "5px solid green"
                input7.disabled = true;
            }
            else{
                if(input7.value == Palavra[0] || input7.value == Palavra[2] || input7.value == Palavra[3] || input7.value == Palavra[4]){
                    input7.style.backgroundColor = "orange"
                    input7.style.border = "5px solid orange"
                    input7.disabled = true;
                }
                else{
                    input7.style.backgroundColor = "red"
                    input7.style.border = "5px solid red"
                    input7.disabled = true;
                }
            }
            if(Palavra[2] == input8.value){
                input8.style.backgroundColor = "green"
                input8.style.border = "5px solid green"
                input8.disabled = true;
            }
            else{
                if(input8.value == Palavra[0] || input8.value == Palavra[1] || input8.value == Palavra[3] || input8.value == Palavra[4]){
                    input8.style.backgroundColor = "orange"
                    input8.style.border = "5px solid orange"
                    input8.disabled = true;
                }
                else{
                    input8.style.backgroundColor = "red"
                    input8.style.border = "5px solid red"
                    input8.disabled = true;
                }
            }
            if(Palavra[3] == input9.value){
                input9.style.backgroundColor = "green"
                input9.style.border = "5px solid green"
                input9.disabled = true;
            }
            else{
                if(input9.value == Palavra[0] || input9.value == Palavra[1] || input9.value == Palavra[2] || input9.value == Palavra[4]){
                    input9.style.backgroundColor = "orange"
                    input9.style.border = "5px solid orange"
                    input9.disabled = true;
                }
                else{
                    input9.style.backgroundColor = "red"
                    input9.style.border = "5px solid red"
                    input9.disabled = true;
                }
            }
            if(Palavra[4] == input10.value){
                input10.style.backgroundColor = "green"
                input10.style.border = "5px solid green"
                input10.disabled = true
            }
            else{
                if(input10.value == Palavra[0] || input10.value == Palavra[1] || input10.value == Palavra[2] || input10.value == Palavra[3]){
                    input10.style.backgroundColor = "orange"
                    input10.style.border = "5px solid orange"
                    input10.disabled = true
                }
                else{
                    input10.style.backgroundColor = "red"
                    input10.style.border = "5px solid red"
                    input10.disabled = true
                }
            }
            if(input6.style.backgroundColor == "green" && input7.style.backgroundColor == "green" && input8.style.backgroundColor == "green" && input9.style.backgroundColor == "green" && input10.style.backgroundColor == "green"){
                window.alert("Voce ganhou!!!")
            }
            else{
                const input11 = document.getElementById("input26").disabled = false
                const input12 = document.getElementById("input27").disabled = false
                const input13 = document.getElementById("input28").disabled = false
                const input14 = document.getElementById("input29").disabled = false
                const input15 = document.getElementById("input30").disabled = false
            }
            
        }
        else if(event.key == "Enter" && line == 6){
        
            line++
    
            const input6 = document.getElementById("input26")
            const input7 = document.getElementById("input27")
            const input8 = document.getElementById("input28")
            const input9 = document.getElementById("input29")
            const input10 = document.getElementById("input30")
    
            
    
            if(Palavra[0] == input6.value){
                input6.style.backgroundColor = "green"
                input6.style.border = "5px solid green"
                input6.disabled = true;
            }
            else{
                if(input6.value == Palavra[1] || input6.value == Palavra[2] || input6.value == Palavra[3] || input6.value == Palavra[4]){
                    input6.style.backgroundColor = "orange"
                    input6.style.border = "5px solid orange"
                    input6.disabled = true;
                }
                else{
                    input6.style.backgroundColor = "red"
                    input6.style.border = "5px solid red"
                    input6.disabled = true;
                }
                
            }
            if(Palavra[1] == input7.value){
                input7.style.backgroundColor = "green"
                input7.style.border = "5px solid green"
                input7.disabled = true;
            }
            else{
                if(input7.value == Palavra[0] || input7.value == Palavra[2] || input7.value == Palavra[3] || input7.value == Palavra[4]){
                    input7.style.backgroundColor = "orange"
                    input7.style.border = "5px solid orange"
                    input7.disabled = true;
                }
                else{
                    input7.style.backgroundColor = "red"
                    input7.style.border = "5px solid red"
                    input7.disabled = true;
                }
            }
            if(Palavra[2] == input8.value){
                input8.style.backgroundColor = "green"
                input8.style.border = "5px solid green"
                input8.disabled = true;
            }
            else{
                if(input8.value == Palavra[0] || input8.value == Palavra[1] || input8.value == Palavra[3] || input8.value == Palavra[4]){
                    input8.style.backgroundColor = "orange"
                    input8.style.border = "5px solid orange"
                    input8.disabled = true;
                }
                else{
                    input8.style.backgroundColor = "red"
                    input8.style.border = "5px solid red"
                    input8.disabled = true;
                }
            }
            if(Palavra[3] == input9.value){
                input9.style.backgroundColor = "green"
                input9.style.border = "5px solid green"
                input9.disabled = true;
            }
            else{
                if(input9.value == Palavra[0] || input9.value == Palavra[1] || input9.value == Palavra[2] || input9.value == Palavra[4]){
                    input9.style.backgroundColor = "orange"
                    input9.style.border = "5px solid orange"
                    input9.disabled = true;
                }
                else{
                    input9.style.backgroundColor = "red"
                    input9.style.border = "5px solid red"
                    input9.disabled = true;
                }
            }
            if(Palavra[4] == input10.value){
                input10.style.backgroundColor = "green"
                input10.style.border = "5px solid green"
                input10.disabled = true
            }
            else{
                if(input10.value == Palavra[0] || input10.value == Palavra[1] || input10.value == Palavra[2] || input10.value == Palavra[3]){
                    input10.style.backgroundColor = "orange"
                    input10.style.border = "5px solid orange"
                    input10.disabled = true
                }
                else{
                    input10.style.backgroundColor = "red"
                    input10.style.border = "5px solid red"
                    input10.disabled = true
                }
            }
            if(input6.style.backgroundColor == "green" && input7.style.backgroundColor == "green" && input8.style.backgroundColor == "green" && input9.style.backgroundColor == "green" && input10.style.backgroundColor == "green"){
                window.alert("Voce ganhou!!!")
            }
            else(
                window.alert(`Voce perdeu a palavra correta era ${Palavra}`)
            )
            
            
        }
    }
)