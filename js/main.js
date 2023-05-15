// Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto": "img/angela-caroll-chief-editor.jpg",
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "img/walter-gordon-office-manager.jpg",
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "img/angela-lopez-social-media-manager.jpg",
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "img/scott-estrada-developer.jpg",
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "img/barbara-ramos-graphic-designer.jpg",
    }
];

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let i = 0; i < team.length; i++){
    let objIesimo = team[i];
    console.log(objIesimo);

    for(let chiaveObj in objIesimo){
        console.log(objIesimo[chiaveObj]);

        // if(i === 0){
        //     document.querySelector(".nome1").innerHTML = objIesimo[chiaveObj];
        //     i++
        // }else if(i === 1){
        //     document.querySelector(".ruolo1").innerHTML = objIesimo[chiaveObj];
        //     i++
        // }else if(i === 2){

        //     var url = objIesimo[chiaveObj];
 
        //     var image = new Image();
        //     image.src = url;
        //     document.querySelector('.foto1').appendChild(image);
        //     i++
        // }else if(i === 5){
        //     document.querySelector(".nome2").innerHTML = objIesimo[chiaveObj];
        //     i++
        // }else if(i === 6){
        //     document.querySelector(".ruolo2").innerHTML = objIesimo[chiaveObj];
        //     i++
        // }else if(i === 7){

        //     var url = objIesimo[chiaveObj];
 
        //     var image = new Image();
        //     image.src = url;
        //     document.querySelector('.foto2').appendChild(image);
        //     i++
        // }else if(i === 0){
        //     document.querySelector(".nome3").innerHTML = objIesimo[chiaveObj];
        //     i++
        // }else if(i === 1){
        //     document.querySelector(".ruolo3").innerHTML = objIesimo[chiaveObj];
        //     i++
        // }else if(i === 2){

        //     var url = objIesimo[chiaveObj];
 
        //     var image = new Image();
        //     image.src = url;
        //     document.querySelector('.foto3').appendChild(image);
        //     i++
        // }
    }

    
}



		
		
		
		
		