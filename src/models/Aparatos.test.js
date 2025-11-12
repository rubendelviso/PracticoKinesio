const Paciente = require("./Paciente")
const {Bicicleta, MiniTramp, Magneto} = require("./Aparatos")
const pacienteRuben =  new Paciente(20,10,100)
const Aparatino = new Bicicleta()
const magnet = new Magneto()
const miniTram = new MiniTramp()


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

})

