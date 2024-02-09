var StringQuePartidoQuieres = 'Que Partido Queres'
var StringPreguntaPartido = 'Cuantos Goles as marcado en el partido ';
var StringPreguntaPartidoError = 'Eeeh! nomes hi han tres partits';
var IntSumaGoles
var DecPomedio
var ArrayIntGols = [0, 0, 0];
var QuansPartits = 0;
function GolesMarcados() {
    var Partido = prompt(StringQuePartidoQuieres)
    var StringQuestion = (StringPreguntaPartido + Partido);


    if (Partido == 1) {
        if (ArrayIntGols[0] == 0) {
            QuansPartits += 1;
        }
        ArrayIntGols[0] = parseInt(prompt(StringQuestion));
    } else if (Partido == 2) {
        if (ArrayIntGols[1] == 0) {
            QuansPartits += 1;
        }
        ArrayIntGols[1] = parseInt(prompt(StringQuestion));
    } else if (Partido == 3) {
        if (ArrayIntGols[2] == 0) {
            QuansPartits += 1;
        }
        ArrayIntGols[2] = parseInt(prompt(StringQuestion))
    } else {
        alert(StringPreguntaPartidoError)
    }

    IntSumaGoles = ArrayIntGols[0] + ArrayIntGols[1] + ArrayIntGols[2];


}
function TotalGoles() {
    alert(IntSumaGoles)
}
function Promedio() {
    DecPomedio = IntSumaGoles / QuansPartits
    alert(DecPomedio)
}