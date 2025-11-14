const Aparato = require("./Aparatos")

class Paciente{
    constructor(edad, fortaleza,dolor){
        this.edad = edad
        this.fortaleza = fortaleza
        this.dolor = dolor
        this.rutina = [] // Tiene aparatos
    }
    

    // Agregar los getters -> buenas practicas
    getEdad(){return this.edad}
    getFortaleza(){return this.fortaleza}
    getDolor(){return this.dolor}

    setFortaleza(NuevoCambio){this.fortaleza+=NuevoCambio }
    setDolor(NuevoCambio){this.dolor+=NuevoCambio}
    AgregarAparato(aparato){this.rutina.push(aparato)}

    //Crear aparatos el script que contiene todos los aparatos, no sepaarados por scripts
    //Aplicar bien la diferenciacion entre los metodos de consulta y accion
    //Como buena practica no acceder lso atributos
    

    PuedeRealizarRutina(){ return this.rutina.every(ap => ap.PuedeUsarse(this))}

    RealizarRutina(){ 
        const RutinaFiltrada = this.rutina.filter(ap => ap.PuedeUsarse(this))
        
        RutinaFiltrada.forEach(element => { element.UsarAparato(this)});
    }

}





module.exports = Paciente
