const publicaciones = 826

for (i = 1 ; i <= publicaciones ; i++ ){
    const nombre = `Personaje ${i}`
    const informacion = `Esta es la publicación número ${i}. Esto es una prueba de generación de relleno por medio de funciones y ciclos.`
    const imagen = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`
    const personajes = document.getElementById("personajes")
    personajes.innerHTML += ` <div id="personajes--personaje" class="personajes--personaje">
    <img class="personaje-img" src="${imagen}" alt="">
    <h3 class="personaje-nombre">${nombre}</h3>
    <p class="personaje-informacion">${informacion}</p>
</div>`
}