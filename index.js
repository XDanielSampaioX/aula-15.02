async function carregarPersonagens(){
    const requestOptions = {
        method: "GET"
    }

    const response = await fetch ("https://rickandmortyapi.com/api/character", requestOptions)
        const data = await response.json();

        alimentaTabela(data.results);

        console.log(data.results);
};


function alimentaTabela(personagens) {
    const htmlPersonagens = personagens.map(personagem => `
            <tr>
                <td><img src="${personagem.image}" alt="imagemPersonagem"></img></td>
                <td>${personagem.name}</td>
                <td>${personagem.status}</td>
                <td>${personagem.species}</td>
                <td>${personagem.gender}</td>
                <td>${personagem.origin.name}</td>
                <td>${personagem.location.name}</td>
            </tr>
        `
    )

    const htmlConteudo = htmlPersonagens.join("");
    document.getElementById('conteudo').innerHTML = htmlConteudo
}


carregarPersonagens();
