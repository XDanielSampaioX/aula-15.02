async function carregarUsuarios(){
    const requestOptions = {
        method: "GET"
    }

    const response = await fetch ("https://rickandmortyapi.com/api/character", requestOptions)
        const data = await response.json();

        alimentaTabela(data.results);

        console.log(data.results);
};


function alimentaTabela(usuarios) {
    const htmlUsuarios = usuarios.map(usuario => `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.name}</td>
                <td>${usuario.status}</td>
                <td>${usuario.species}</td>
                <td>${usuario.gender}</td>
                <td>${usuario.origin.name}</td>
                <td>${usuario.location.name}</td>
            </tr>
        `
    )

    const htmlConteudo = htmlUsuarios.join("");
    document.getElementById('conteudo').innerHTML = htmlConteudo
}


carregarUsuarios();
