import names from 'silly-names-hun';

let i = 0;
let placeholder = "";
let mode = 'normal'; // Alapértelmezett mód: normál

async function type(){

    const txt = await names.getRandomName(true); // A függvényhívás módosítása a kiválasztott módnak megfelelően
    for (let char of txt) {
        placeholder += char;
        document.getElementById("name").setAttribute("placeholder", placeholder);
        const speed = Math.floor(Math.random() * (200 - 80 + 1)) + 80; // Véletlenszerű sebesség minden karakterhez 80 és 200 között
        await new Promise(resolve => setTimeout(resolve, speed));
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    placeholder = ""; 
    type(); 
}

type();

