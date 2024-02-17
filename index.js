const alleBundesländer = Array("Schleswig-Holstein","Mecklenburg-Vorpommern","Hamburg","Niedersachsen","Bremen","Thüringen","Sachsen","Sachsen-Anhalt","Brandenburg",
"Berlin","Nordrhein-Westfalen","Hessen","Rheinland-Pfalz","Saarland","Baden-Württemberg","Bayern");

let zufälligesBundesland;

function neueRunde() { //neues bundesland anzeigen
    zufälligesBundesland = alleBundesländer[Math.floor(Math.random()*alleBundesländer.length)];
    
    document.getElementById("frage").innerText = zufälligesBundesland;

    if(hilfenAngezeigt === true){
        buttonColorÄndernEinzeln("red");
    }
}

function AnswerGiven(Answer) {
    if(Answer === zufälligesBundesland) { //wenn richtig: neue runde und grüner hintergrund
        console.log("richtig");
        changeBackground("rgb(101, 175, 101)"); //grün
        setTimeout(() => {
            changeBackground("rgb(221, 173, 110)"); //normalfarbe
          }, 500);

        neueRunde();
    } else{ //wenn falsch: roter hintergrund
        console.log("falsch");
        changeBackground("rgb(218, 78, 78)"); //rot
        setTimeout(() => {
            changeBackground("rgb(221, 173, 110)"); //normalfarbe
          }, 500);
    }
}

function changeBackground(color){
    document.body.style.background = color;
}

function buttonColorÄndernEinzeln(color){ //bei hilfe an: hintergrund der buttons rot
    document.getElementById(zufälligesBundesland).style.background = color;
}

const bundesländerHilfen = [];
var hilfenAngezeigt = false;

document.getElementById("btn_hilfeUmschalten").addEventListener("click", function(e){
    if(hilfenAngezeigt === true){
        for(let i = 0; i < alleBundesländer.length; i++){ //alle namen löschen
            document.getElementById(alleBundesländer[i]).innerText = "";
        }
        for(let i = 0; i < alleBundesländer.length; i++){ //jede farbe resetten
            document.getElementById(alleBundesländer[i]).style.background = "rgba(214, 74, 55, 0.4)";
        }
        hilfenAngezeigt = false;
    } else{
        for(let i = 0; i < alleBundesländer.length; i++){ //alle namen anzeigen
            document.getElementById(alleBundesländer[i]).innerText = bundesländerHilfen[i];
        }
        buttonColorÄndernEinzeln("red"); //farbe für erstes bundesland anzeigen
        hilfenAngezeigt = true;
    }
});

neueRunde();

for(let i = 0; i < alleBundesländer.length; i++){ //alle namen der bundesländer in einer array speichern
    bundesländerHilfen.push(document.getElementById(alleBundesländer[i]).innerText);
}

for(let i = 0; i < alleBundesländer.length; i++){ //am anfang alle löschen
    document.getElementById(alleBundesländer[i]).innerText = "";
}