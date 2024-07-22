//Se precisar adicionar validação, por exemplo, garantir que velocidade seja positiva, vamos ter que modificar várias partes do código. 

//Se já construirmos as classes desde o início usando getters e setters, mesmo que futuramente adicionemos uma lógica de validação, não vamos precisar alterar nenhum código que usa esta classe.

class Carro {
    private velocidade: number
    private marca: string
    private tipo: string

    constructor(velocidade: number, marca: string, tipo: string) {
        this.velocidade = 
        this.marca =
        this.tipo =
    
  

    //Mostrar o valor de velocidade
    //getter - pegar / obter / mostrar
    getPontencia():number{
        return this.potencia
     }
    }
  }
    getVelocidade():number{
        return this.velocidade
     } 


    setVelocidade(novaVelocidade:number):number | string{
      if (this.velocidade > 0){
         return this.velocidade = novaVelocidade
      } else {
          console.log("A velocidade não pode ser 0 ou negativa.")
      }

  }
