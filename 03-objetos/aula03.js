//objeto com coleção de valores

//classe começa com letra maiuscula
class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade; 
    }

    descrever(){
        return `Meu nome é ${this.nome} e eu possuo ${this.idade} anos de idade`;
    }
}

//recebe dois objetos para verificar os valores dentro deles
//explorando os valores dentro do objeto
function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

//instanciando as pessoas
const carol = new Pessoa('Carolina', 18)
const gabi = new Pessoa('Gabriela', 29);

//exibindo as pessoas no console
console.log(carol.descrever());
console.log(carol.descrever());

//chamando a funcao comparar passando os dois objetos(p1, p2) como parametro
compararPessoas(carol, gabi);