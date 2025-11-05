class Magneto {
    constructor() {
        this.nivelDeDolor = 10

    }

    UsarAparato(persona) {
        const Dolor = this.nivelDeDolor * 0.1
        return persona.dolor -= Dolor
    }

    PuedeUsarse(persona) {


        return true

    }

}


module.exports = Magneto