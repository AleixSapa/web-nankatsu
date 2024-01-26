var GolesNankatsu
var QuePartidoQuieres = ('Que Partido Queres')
var IfPartido1 = ('Quantos Goles As Marcado en el partido ');
var IF4 = ('Eee numes i an tres partits')
var TotalGolesMarcados = If1 + If2 + If3
var If1 = prompt(IfPartido1 + Partido)
var If2 = prompt(IfPartido1 + Partido)
var If3 = prompt(IfPartido1 + Partido)


function GolesMarcados() {
    var Partido = prompt(QuePartidoQuieres)
    if (Partido == 1) { If1 }
    if (Partido == 2) { If2 }
    if (Partido == 3) { If3 }
    if (Partido == +4) { alert(IF4) }
}
function TotalGoles() {
    alert(TotalGolesMarcados)
}