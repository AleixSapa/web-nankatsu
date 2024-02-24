var StringQuePartidoQuieres = 'Que Partido Queres'
var StringPreguntaPartido = 'Cuantos Goles as marcado en el partido ';
var StringPreguntaPartidoError = 'Eeeh! nomes hi han tres partits';
var IntSumaGoles
var DecPomedio
var ArrayIntGolsNankatsu = [0, 0, 0];
var QuansPartits = 0;
var ArrayStringEquipVS = ['', '', '']
var ArrayIntGolsVS = [0, 0, 0
]
function GolesMarcados() {
    var Partido = parseInt(prompt(StringQuePartidoQuieres));
    if (Partido > 3) {
        alert(StringPreguntaPartidoError)
        return
    }
    var StringQuestion = (StringPreguntaPartido + Partido);
    var IntPromtGols = parseInt(prompt(StringQuestion));
    var IntPosArray = Partido - 1

    if (ArrayIntGolsNankatsu[IntPosArray] == 0) {
        QuansPartits += 1;
    }


    ArrayIntGolsNankatsu[IntPosArray] = IntPromtGols;

    IntSumaGoles = ArrayIntGolsNankatsu[0] + ArrayIntGolsNankatsu[1] + ArrayIntGolsNankatsu[2];
    //    Vs Nankatsu
    ArrayStringEquipVS[0] = prompt('Qui A Jugat Contra Al Nankatsu')
    //     Gols Vs Nankatsu
    var promptVSGols = prompt('El ' + promptVS + ' Quans Gols A Marcat')
    // Va Guanya ?

}
function TotalGoles() {
    alert(IntSumaGoles)
}
function Promedio() {
    DecPomedio = IntSumaGoles / QuansPartits
    alert(DecPomedio)
}