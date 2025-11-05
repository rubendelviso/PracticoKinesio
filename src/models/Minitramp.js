class MiniTramp {
    constructor() {
        this.nivelDeDolor = 0
        this.fortalezaMuscular = 10

    }


    PuedeUsarse(persona) {

        if (persona.dolor>20) return "No puede utilizarse, el umbral de dolor debe ser menor a 20"
        return true

    }
    UsarAparato(persona) {
        if(this.PuedeUsarse()){
        const AumentaEdad = this.nivelDeDolor * 0.1
        return persona.edad -= AumentaEdad
    
    
        }}
}


module.exports = MiniTramp