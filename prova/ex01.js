function calcular (numA, numB, operacao) {
    if (operacao=='+') {
        return numA+numB;}
    if (operacao=='-'){
        return numA-numB; }
    if (operacao=='*') {
        return numA*numB; }
    if (operacao=='/' && numB!=0) {
        return numA/numB; }
    else { 
        return 'impossível dividir';}
        
}