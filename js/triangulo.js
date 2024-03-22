function ladosTriangulo(){
    let ladoA = document.getElementById('ladoA').value
    let ladoB = document.getElementById('ladoB').value
    let ladoC = document.getElementById('ladoC').value

    if(ladoA == ladoB && ladoB == ladoC){
        document.getElementById('resultado').innerHTML="O triângulo é Equilátero pois possui os três lados iguais"
    }else if(ladoA == ladoB || ladoA == ladoC || ladoA == ladoC){
        document.getElementById('resultado').innerHTML="O triângulo é Isóscele possui 2 lados iguais."
    }else{
        document.getElementById('resultado').innerHTML="Os três lados são diferentes"
    }
}