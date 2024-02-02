var StringQuePartidoQuieres = 'Que Partido Queres'
var StringPreguntaPartido = 'Cuantos Goles as marcado en el partido ';
var StringPreguntaPartidoError = 'Eeeh! nomes hi han tres partits';
var IntSumaGoles
var DecPomedio
var IntPartido1 = 0;
var IntPartido2 = 0;
var IntPartido3 = 0;
var QuansPartits = 0;
function GolesMarcados() {
    var Partido = prompt(StringQuePartidoQuieres)
    var StringQuestion = (StringPreguntaPartido + Partido);


    if (Partido == 1) {
        if (IntPartido1 == 0) {
            QuansPartits += 1;
        }
        IntPartido1 = parseInt(prompt(StringQuestion));
    } else if (Partido == 2) {
        if (IntPartido2) {
            QuansPartits += 1;
        }
        IntPartido2 = parseInt(prompt(StringQuestion));
    } else if (Partido == 3) {
        if (IntPartido3) {
            QuansPartits += 1;
        }
        IntPartido3 = parseInt(prompt(StringQuestion))
    } else {
        alert(StringPreguntaPartidoError)
    }

    IntSumaGoles = IntPartido1 + IntPartido2 + IntPartido3;


}
function TotalGoles() {
    alert(IntSumaGoles)
}
function Promedio() {
    DecPomedio = IntSumaGoles / QuansPartits
    alert(DecPomedio)
}