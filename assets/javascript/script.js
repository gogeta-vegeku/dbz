//metodo1
// const click = document.getElementById("click");
// let contentDiv = null;

// click.addEventListener("click", function () {

//     if (!contentDiv) {
//         contentDiv = document.createElement('div');
//         contentDiv.id = 'contentDiv';

//         const textDiv = document.createElement("p");
//         textDiv.id = "textDiv";
//         textDiv.innerText = "GOKU SUPERSAYAN";


//         const imgDiv = document.createElement("imhDiv");
//         imgDiv.id = "imgDiv";
//         imgDiv.alt = "image";

//         const img = document.createElement("img");
//         img.src = "./assets/Goku sayan 2.jpg";
//         img.alt = "Descrizione dell'immagine";

//         imgDiv.appendChild(img);


//         const textUnder = document.createElement("textUnder");
//         textUnder.id = "textUnder";
//         textUnder.innerText = "POTENZA INCREDIBILE";


//         //ajouter les texte e l image dans la div
//         contentDiv.appendChild(textDiv);
//         contentDiv.appendChild(imgDiv);
//         contentDiv.appendChild(textUnder);
//         //ajouter contentDiv dans le body
//         playground.appendChild(contentDiv);


//     } else {

//         if (contentDiv.style.display === 'none') {
//             contentDiv.style.display = 'block';
//         } else {
//             contentDiv.style.display = 'none';
//         }
//     }
// });


//METODO 2
const playground = document.querySelector("#playground");
const click = document.getElementById("click");
const click2 = document.getElementById("click2");
const click3 = document.getElementById("click3");
const click4 = document.getElementById("click4");
const click5 = document.getElementById("click5");
const popUps = [


    {
        title: "LEVEL BASE",
        image: "./assets/img/base1.gif",
        paragraf: "non é ariano",
        titleCss:"myNameIs"
    },

    {
        title: "LEVEL SAYAN 1",
        image: "./assets/img/base2.gif",
        paragraf: "rosso de cavei",
        titleCss:"myNameIs"
    },

    {
        titre: "LEVEL SAYAN 3",
        image: "./assets/img/base3.gif",
        paragraf: "arcobaleno",
        titleCss:"myNameIs",
       
    },

    {
        titre: "LEVEL SUPERGOD",
        image: "./assets/img/base4.gif",
        paragraf: "arcobaleno",
        titleCss:"myNameIs"
       
    },

    {
        titre: "DOUBLE KAMEHAMEHA",
        image: "./assets/img/base5.gif",
        paragraf: "arcobaleno",
        titleCss:"myNameIs"
       
    }

]


const popUp = (parent, idName, i) => {
    const div = document.createElement("div");
    div.id = idName;
    div.style.width = "600px"
    parent.append(div);
    titre(div, popUps[i].titre, popUps[i].titleCss);
    image(div, popUps[i].image);
    paragraf(div, popUps[i].paragraf)

}
const titre = (parent, txt) => {
    const h1 = document.createElement("h1");
    h1.innerText = txt;
    parent.append(h1);
    h1.style.color = "white"
}


const paragraf = (parent, txt) => {
    const p = document.createElement("p");
    p.innerText = txt;
    parent.append(p);
    p.style.color = "white"
}

const image = (parent, source) => {
    const img = document.createElement("img");
    img.src = source;
    parent.append(img);
}
const removePopup = (idName) => {
    document.getElementById(idName).remove()
}



click.addEventListener("click", () => {
    const idNameOne = "popUpOne";
    
    if (document.contains(document.getElementById(idNameOne))) {
        removePopup(idNameOne);
    } else {
        popUp(playground, idNameOne, 2);
    }
});

click2.addEventListener("click", () => {
    const idNameOne = "popUpOne"; // Usa lo stesso pop-up
    if (document.contains(document.getElementById(idNameOne))) {
        removePopup(idNameOne); // Se il pop-up esiste, lo rimuove
    } else {
        popUp(playground, idNameOne,0); // Altrimenti, lo crea
    }
});

click3.addEventListener("click", () => {
    const idNameOne = "popUpOne"; 
    if (document.contains(document.getElementById(idNameOne))) {
        removePopup(idNameOne); 
    } else {
        popUp(playground, idNameOne,1); 
    }
});

click4.addEventListener("click", () => {
    const idNameOne = "popUpOne"; 
    if (document.contains(document.getElementById(idNameOne))) {
        removePopup(idNameOne); 
    } else {
        popUp(playground, idNameOne,3);
    }
});

click5.addEventListener("click", () => {
    const idNameOne = "popUpOne"; 
    if (document.contains(document.getElementById(idNameOne))) {
        removePopup(idNameOne); 
    } else {
        popUp(playground, idNameOne,4);
    }
});

//popUp(playground,"popUpOne",2);