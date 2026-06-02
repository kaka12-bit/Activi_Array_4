const pessoas = [{name:"Cauã Henrique", idade: 16},
            {name:"Antonio Carlos", idade: 54},
            {name:"Julia Donnato", idade: 17},
            {name:"Heitor Batista", idade: 13},
            {name:"Josiane Passarini", idade: 40},
            {name:"Edir Pereira", idade: 64},
            {name:"Elisângela Cristina", idade: 41},
            {name:"Lucca Silva", idade: 2},
]

let resultado = "";

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > 25) {
        resultado += `Posição ${i}: ${pessoas[i].name}\n`;
    }
}

alert(resultado);