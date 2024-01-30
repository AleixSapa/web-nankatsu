var GolesNankatsu
var QuePartidoQuieres = ('Que Partido Queres')
var IfPartido1 = ('Quantos Goles As Marcado en el partido ');
var IF4 = ('Eee numes i an tres partits')
var If1 = (IfPartido1 + Partido);
var If2 = (IfPartido1 + Partido);
var If3 = (IfPartido1 + Partido);
var ComprovationIf1 = false
var ComprovationIf2 = false
var ComprovationIf3 = false
var Mostraesultado


function GolesMarcados() {
    MessagePort('hola')
    var Partido = prompt(QuePartidoQuieres)
    if (Partido == 1) { prompt(If1) } { ComprovationIf1 = true }
    if (Partido == 2) { prompt(If2) } { ComprovationIf2 = true }
    if (Partido == 3) { prompt(If3) } { ComprovationIf3 = true }
    if (Partido == +4) { alert(IF4) }
}
function TotalGoles() {
    if (ComprovationIf1 == true) { Mostraesultado + ComprovationIf1 }
    MessagePort('hola')
}