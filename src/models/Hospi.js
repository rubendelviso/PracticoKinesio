const bicicleta = require ("./Bicicleta")
const magneto = require ("./Magneto")
const minitramp = require ("./Minitramp")
const paciente = require ("./Paciente")

class hospital {
    // 1. Saber si un paciente puede usar un aparato
    constructor(){
        this.aparatos = []
        this.pacientes =[]


    }
    agregarPaciente(paciente) {this.pacientes.push(paciente)}
    
    usarAparatoConsulta(aparato,persona){
        return persona.PuedeUsarse(persona)



    }
        

    


}


    
    
    


const paciente1 = new paciente()
const hospital = new hospital() 
hospital.agregarPaciente(paciente1)