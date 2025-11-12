class Paciente{
    constructor(edad, fortaleza,dolor){
        this.edad = edad
        this.fortaleza = fortaleza
        this.dolor = dolor
    }
    

    // Agregar los getters -> buenas practicas
    getEdad(){return this.edad}
    getFortaleza(){return this.fortaleza}
    getDolor(){return this.dolor}

    setFortaleza(NuevoCambio){this.fortaleza+=NuevoCambio }
    setDolor(NuevoCambio){this.dolor+=NuevoCambio}

    //Crear aparatos el script que contiene todos los aparatos, no sepaarados por scripts
    //Aplicar bien la diferenciacion entre los metodos de consulta y accion
    //Como buena practica no acceder lso atributos
    



}





module.exports = Paciente
