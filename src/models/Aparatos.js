const paciente = require("./Paciente")


class Bicicleta {
    
    
    UsarAparato(persona) {
        if (this.PuedeUsarse(persona)) {

            
            persona.setDolor(-4);
            persona.setFortaleza(3);
            
        }
    }
    // getDolorAparato(){ return this.nivelDeDolor}
    // getFortalezaAparato(){ return this.fortaleza}
    PuedeUsarse(persona) {

        if (persona.getEdad() < 8) return false
        return true

    }
    

}
class Magneto {
    constructor() {
        this.nivelDeDolor = 10

    }

    UsarAparato(persona) {
        persona.setDolor(-(persona.getDolor()*0.1))
        
        
        
        // return persona.dolor -= Dolor
    }
    getDolorAparato(){ return this.nivelDeDolor}

    PuedeUsarse(persona) {


        return true

    }


}
class MiniTramp {
    constructor() {
        this.nivelDeDolor = 0
        this.fortalezaMuscular = 10

    }


    PuedeUsarse(persona) {

        if (persona.getEdad() > 20) return true
        return false

    }
    UsarAparato(persona) {
        if (this.PuedeUsarse(persona)) {
            // const AumentaEdad = 
            persona.setFortaleza(persona.getEdad()*0.1)


        }
    }
    getDolorAparato(){ return this.nivelDeDolor}
}


module.exports  = {Bicicleta, MiniTramp, Magneto}