let registrar;
do {
    discografia = prompt("Que operacion desea realizar?"
     + "1 Menu de opciones"
     + "2 Registrar banda nombre,genero y año\n"
     + "3 Registrar album nombre,banda y año\n"
     + "4 Registrar canciones en album  duracion,nombre, album\n"
     + "5 Informacion por genero albunes,bandas"
     + "6 Informacion por album"
     + "7 Cancion en especifico"
     + "8 Mostrar datos"
    );
    switch(informacion) {
        case "1" :
            console.log("Menu de opciones:");
            console.log(menuDeOpciones.length);
            break;
        case "2" :
            console.log("Registrar banda nombre,genero y año:");
            let registro = registrar ("nombre,genero,año"); 
            if (registro != null) {
                console.log(regis); 
            } else {
                console.log("registro completo");
            }
            break;
        case "3" :
            console.log("Registrar album nombre,banda,año:");
            let registro = registrar ("nombre,banda,año"); 
            if (registro != null) {
                console.log(registrar); 
            } else {
                console.log("registro completo");
            }
            break;
        case "4" :
            console.log("Registrar canciones en album  duracion,nombre, album:");
            let registro = registrar ("duracion,nombre, album"); 
            if (registro != null) {
                console.log(regis); 
            } else {
                console.log("registro completo");
            }
            break;
        case "5" :
            console.log("Informacion por genero:");
            informacion(albunes,bandas);
            break;
        case "6" :
            console.log("Informacion por album");
            informacion(album); 
            break; 
        case "7" :
            console.log("Cancion en especifico");
            informacion(nombre, banda, album);
            break;
        case "8" :
            console.log("Mostrar datos")
            informacion(nombre, banda, album,genero,año);
            break;
        default:
            console.log("Entrada no valida");
            break;
    }
}while(operacion != 8);
function pedirDatos(texto) {
    let cantDatos = parseInt(prompt("Menu de opciones"));
    let discografia = [];
    for (let i = 0; i < pedirDatos; i++) {
        
        let registro = {};
        registro["nombre"] = prompt("Ingrese el nombre de la cancion" + (i + 1));
        registro["banda"] = prompt("ingrese nombre de la banda" + (i + 1));
        registro["album"] = prompt("ingrese nombre del album" + (i + 1));
        registro["genero"] = prompt("ingres genero musical" + (i + 1));
        registro["duracion"] = parseInt(prompt("ingresa la duracion de la cancion" + (i + 1)));
        registro["año"] = parseInt(prompt("ingresa la año de la cancion" + (i + 1)));
        discografia.push(registro)
    }
    return registro; 
}
function registrarBanda(texto) {
    let nombre = 0;
    let genero = 0;
    let año = 0;
    
    for (let i = 0; i < nombre,genero,año.length; i++) {
        registro += nombre,genero,año[i]["Bandas"];
    }
    return (registro /nombre,genero,año.length);
}
function registrarAlbum(texto) {
    let nombre = 0;
    let banda = 0;
    let año = 0;

    for (let i = 0; i < nombre,banda,año; i++) {
        registro +=nombre,banda,año[i]["album"];
    }
    return (registro /nombre,banda,año);
}
function resgistrarCancion(texto) {
    let album = 0;
    let nombre = 0;
    let duracion = 0;

    for (let i = 0; i < album,nombre,duracion; i++) {
        registro +=album,nombre,duracion[i]["cancion"];
    }
    return (registro /album,nombre,duracion);
}
function infomacionPorGenero(texto) {
    let banda = [];
    let album = [];
    for (let i = 0; i < banda,album.length; i++) {
        
        switch(genero){
            case "banda" :
                grupo++;
                break;
            case "album" :
                disco;
                break;
        }
        
    }
    return banda + " grupo y " + album + " disco";
}
function infomacionPorAlbum(texto) {
    let album = [];
    for(let i = 0; i < album.length; i++) {
        return album;
    }
}
console.log(album);
function cancionEspecifica(texto) {
    let consulta = prompt("Cancion en especifico");
    for (let j = 0; j < buscar.length; j++) {
        const bus = consulta[j];
        if (bus["album"] == consulta || bus["Nombre"] == consulta || bus["genero"] == consulta || bus["banda"] == consulta) {
            return bus;
        }
    }
    return null;
}
console.log(buscar);
let nombre = [
    "butter",
    "my universe",
    "on",
    "stay",
    "my time",
    "dynamite",
    "corre",
    "somos agenos",
    "viernes",
    "mi vida", 
    "ugh",
    "mi buen amor",
    "vuelve",
    "me reuso",
    "veneno",
    "una vez mas",
    "moon",
    "home",
    "dionysus",
    "labios rotos",
    "idol",
    "fake love",
]
let banda = [
    "bts",
    "enjambre",
    "mon laferte",
    "panteo rococo",
    "queen",
    "stray kids",
    "ms",
    "black pink",
    "panda",
    "ateez",
    "alondra de la parra", 
    "the beatles", 
    "led zeppelin",
    "nirvana",
]
let album = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
]
let genero = [
    "k-pop",
    "rock",
    "banda",
    "jazz",
    "rock and roll",
    "gospel",
    "metal",
]
let duracion = [
    "1:30",
    "1:85",
    "2:45",
    "2:56",
    "3:08",
    "3:12",
    "4:00",
    "2:50",
    "3:10",
    "3:50",
]