function pokemon(nombre,apodo,tipo, debilidades, ataques)//Funcion constructor
{
    this.nombre = nombre;//atributos
    this.apodo = apodo;
    this.tipo = tipo;
}

function TipoFuego(nombre,apodo,tipo)
{
    pokemon.call(this, nombre,apodo, tipo);
    this.debilidades = ["Agua","Tierra","Roca"]
    this.ataques = ["Lanzallamas", "Ascuas", "Bola de fuego"]; 
}

function TipoAgua(nombre,apodo,tipo )
{
    pokemon.call(this, nombre,apodo, tipo);
    this.debilidades = ["Electrico","Planta"]
    this.ataques = ["Bomba Agua","Chorro a presion"]; 
}

function TipoPlanta(nombre,apodo,tipo )
{
    pokemon.call(this, nombre,apodo, tipo);
    this.debilidades = ["Fuego","Hielo","Veneno"]
    this.ataques = ["Latigo cepa", "Lanzasemillas","Rayo solar"]; 
}

TipoFuego.prototype = Object.create(pokemon.prototype);
TipoFuego.prototype.constructor = TipoFuego;

TipoAgua.prototype = Object.create(pokemon.prototype);
TipoAgua.prototype.constructor = TipoAgua;

TipoPlanta.prototype = Object.create(pokemon.prototype);
TipoPlanta.prototype.constructor = TipoPlanta;


const charizard = new TipoFuego("Charizard","Chispitas","Fuego");
const squirtle = new TipoAgua("Squirtle","Nemo","Agua");
const bulbasaur = new TipoPlanta("Bulbasaur","Wakanda","Planta");

console.log(charizard);
console.log(squirtle);
console.log(bulbasaur);