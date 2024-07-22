export class Moto {
    //atributos
    private velocidade
    private marca: string;
    private tipo: string;

    constructor(velocidade: number, marca: string, tipo: string) {
        this.velocidade =
        this.marca = 
        this.tipo =


    getVelocidade():number{
        return this.velocidade
    }
  }

    getMarca():string{
        return this.marca
    }

    getTipo():string{
        return this.tipo
    }

    setVelocidade():number{
    if (this.velocidade)
 }



    correndo(Moto):void {
    console.log('a moto ${this.marca} esta correndo');
  }
}

getInfo():void {
return 
    console.log
}*/

//meuCarro.setVelocidade
    aula 6 
export class Moto {
    //ATRIBUTOS
    marca: string;
    tipo: string;
    velocidade: number;

    //METODO
    constructor(marca: string, tipo: string) {
        this.marca = marca;
        this.tipo = tipo;
        this.velocidade = 100;
    }

    correndo(Moto):void {
    console.log('a moto ${this.marca} esta correndo');
  }
}

/*getInfo():void {
    console.log
}*/

export class Carro {
    marca: string;
    tipo: string;
    velocidade: number;

    constructor(marca: string, tipo: string, velocidade: number) {
        this.marca = marca;
        this.tipo = tipo;
        this.velocidade = 80;
    }

    correndo(Carro):void {
    console.log('o carro ${this.marca} esta correndo')
  }
}

