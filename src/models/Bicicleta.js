class Bicicleta { 
    constructor(){
        this.nivelDeDolor = -4
        this.fortaleza = 3


    }

UsarAparato(){
    if(this.PuedeUsarse){
    persona.dolor+=this.nivelDeDolor,persona.fortaleza+= this.fortaleza }
    

}

PuedeUsarse(persona){

    if (persona.edad <8) return "no puede ser utilizado por personas menores a 8 años"
    return true

}

}

module.exports = Bicicleta