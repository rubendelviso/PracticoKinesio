const Paciente = require("./Paciente")
const {Bicicleta, MiniTramp, Magneto} = require("./Aparatos")
const pacienteRuben =  new Paciente(19,10,100)
const Aparatino = new Bicicleta()
const magnet = new Magneto()
const miniTram = new MiniTramp()

//Tests pedidos

const Leonardo = new Paciente(40,20,10)
const Milena = new Paciente(3,50,30)


describe("Pruebas generales",()=>{
    test("Probando si puede usarse",() => {
        
        expect(Aparatino.PuedeUsarse(pacienteRuben)).toBe(false)

    })
    test("Probando Dolor y fortaleza cambios",() => {
        Aparatino.UsarAparato(pacienteRuben)
        expect(pacienteRuben.getDolor()).toBe(-1)
        expect(pacienteRuben.getFortaleza()).toBe(13)
    })

    test("Probando Dolor y fortaleza cambios, pero en magneto",() => {
        magnet.UsarAparato(pacienteRuben)
        expect(pacienteRuben.getFortaleza()).toBe(90)
        
    })  
    test("Probando minitramp ",() => {
        miniTram.UsarAparato(pacienteRuben)
        expect(pacienteRuben.getFortaleza()).toBe(12)
        
    })      
    test("Probando si se puede usar minitramp",() => {
        
        expect(miniTram.PuedeUsarse(pacienteRuben)).toBe(false)
        
    })
    test("Probando Leonardo uso de aparatos",() => {
        
        expect(miniTram.PuedeUsarse(Leonardo)).toBe(true)
        expect(magnet.PuedeUsarse(Leonardo)).toBe(true)
        expect(Aparatino.PuedeUsarse(Leonardo)).toBe(true)
        
    })
//Probando niveles efectos en Leonardo y Milena
    test("Probando efecto de los aparatinos",() => {
        magnet.UsarAparato(Leonardo)
        expect(Leonardo.getDolor()).toBe(9)
        // magnet.UsarAparato(Milena)
        // expect(Milena.getDolor()).toBe(27)
        // expect(Aparatino.UsarAparato(Leonardo)).toBe(6)
        // expect(Leonardo.getFortaleza()).toBe(23)
        
    })
    test("Probando el dolor de Milena",() => {

        magnet.UsarAparato(Milena)
        expect(Milena.getDolor()).toBe(27)
        // expect(Aparatino.UsarAparato(Leonardo)).toBe(6)
        // expect(Leonardo.getFortaleza()).toBe(23)
        
    })
        test("Probando el dolor de Leonardo y fortaleza",() => {

        Aparatino.UsarAparato(Leonardo)
        
        expect(Leonardo.getDolor()).toBe(6)
        expect(Leonardo.getFortaleza()).toBe(23)
        
    })
        test("Probando el minitramp fortaleza sube",() => {

        miniTram.UsarAparato(Leonardo) 
        expect(Leonardo.getFortaleza()).toBe(24)
        
    })  
        test("Haciendo rutina",() => {
            // una bicicleta, un minitramp, la misma bicicleta de nuevo, un magneto.
            Leonardo.AgregarAparato(Aparatino)
            Leonardo.AgregarAparato(magnet)
            Leonardo.AgregarAparato(miniTram)
            console.log("El paciente antes de usar aparatos",Leonardo)
            Leonardo.RealizarRutina()
            expect(Leonardo.PuedeRealizarRutina()).toBe(true)
            console.log("El paciente antes de usar aparatos",Leonardo)
        
    })
    
        test("Verificando requerimientos los ultimos",() => {
            // una bicicleta, un minitramp, la misma bicicleta de nuevo, un magneto.
            Leonardo.AgregarAparato(Aparatino)
            Leonardo.AgregarAparato(magnet)
            Leonardo.AgregarAparato(Aparatino)
            Leonardo.AgregarAparato(miniTram)
            Leonardo.RealizarRutina()
            // console.log("El paciente antes de usar aparatos",Leonardo)
            expect(Leonardo.getDolor()).toBe(1.8)
            expect(Leonardo.getFortaleza()).toBe(30)
            
    })
})

