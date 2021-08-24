// Aula 10 - 21/06/2021
// Objetos literais

let carro = {
    placa: 'ADF1234',
    cor:  'prata',
    ano: 2021,
    flex: true,
    mostrar: function() {
        return 'Características do seu carro novo:\nPlaca='+this.placa+
        '\nCor='+this.cor+
        '\nAno='+this.ano+
        '\nFlex='+this.flex;
    }
}

console.log(carro.mostrar());