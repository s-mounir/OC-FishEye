//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    const response = await fetch('/data/photographers.json');
    let photographers = await response.json();
    console.log(photographers);
    // et bien retourner le tableau photographers seulement une fois récupéré
    return photographers;
}


let params = (new URL(document.location)).searchParams;
let idPhotograph = params.get('id');
console.log(idPhotograph);

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    const data = photographers.filter(({id}) => id == idPhotograph);
    const { name, portrait, id, city, country, price, tagline} = data[0];
    console.log('name: '+name);
    console.log('portrait: '+portrait);
    console.log('id: '+id);
    console.log('city: '+city);
    console.log('country: '+country);
    console.log('price: '+price);
    console.log('tagline: '+tagline);
};

init();

