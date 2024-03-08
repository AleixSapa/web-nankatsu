document.addEventListener('DOMContentLoaded', function () {


    var ArrayJson;
    fetch('assets/json/campionat.json')
        .then(resposta => resposta.json())
        .then(JsonCampeonato => {
            ArrayJson = JsonCampeonato;
            var jsonEquipo;

            //equipo Ganador
            jsonEquipo = ArrayJson[12];
            var Fila1Columna8 = document.getElementById("champion");
            Fila1Columna8.textContent = jsonEquipo.equip;

            //equipo Final 01
            jsonEquipo = ArrayJson[12];
            var Fila1Columna8 = document.getElementById("SemiChampion1");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo Final 02
            jsonEquipo = ArrayJson[13];
            var Fila1Columna8 = document.getElementById("SemiChampion2");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo SemiFinal 01
            jsonEquipo = ArrayJson[8];
            var Fila1Columna8 = document.getElementById("QuartsChampions1");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo SemiFinal 02
            jsonEquipo = ArrayJson[9];
            var Fila1Columna8 = document.getElementById("QuartsChampions2");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;
            //equipo SemiFinal 03
            jsonEquipo = ArrayJson[10];
            var Fila1Columna8 = document.getElementById("QuartsChampions3");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;
            //equipo SemiFinal 04
            jsonEquipo = ArrayJson[11];
            var Fila1Columna8 = document.getElementById("QuartsChampions4");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo Quarts Final 01
            jsonEquipo = ArrayJson[0];
            var Fila1Columna8 = document.getElementById("IrQuartsDeFinal1");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo Quarts Final 02
            jsonEquipo = ArrayJson[1];
            var Fila1Columna8 = document.getElementById("IrQuartsDeFinal2");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo Quarts Final 03
            jsonEquipo = ArrayJson[3];
            var Fila1Columna8 = document.getElementById("IrQuartsDeFinal3");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo Quarts Final 04
            jsonEquipo = ArrayJson[4];
            var Fila1Columna8 = document.getElementById("IrQuartsDeFinal4");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo Quarts Final 05
            jsonEquipo = ArrayJson[5];
            var Fila1Columna8 = document.getElementById("IrQuartsDeFinal5");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo Quarts Final 06
            jsonEquipo = ArrayJson[6];
            var Fila1Columna8 = document.getElementById("IrQuartsDeFinal6");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo Quarts Final 07
            jsonEquipo = ArrayJson[7];
            var Fila1Columna8 = document.getElementById("IrQuartsDeFinal7");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;

            //equipo Quarts Final 08
            jsonEquipo = ArrayJson[8];
            var Fila1Columna8 = document.getElementById("IrQuartsDeFinal8");
            Fila1Columna8.textContent = jsonEquipo.equip + ": " + jsonEquipo.golsMarcats;


        })
        .catch(error => console.log('ha dado el error: ' + error));


});