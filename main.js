const foto_perfil = document.getElementsByClassName("profile-avatar")[0];
const nome_perfil = document.getElementsByClassName("profile-name")[0];
const nome_usuario = document.getElementsByClassName("profile-username")[0];
const numero_repositorios = document.getElementsByClassName("numbers-item")[0];
const numero_seguidores = document.getElementsByClassName("numbers-item")[1];
const numero_seguindo = document.getElementsByClassName("numbers-item")[2];
const git_link = document.getElementsByTagName("a")[0];

async function getGithubData(gitUser='ogiansouza') {
    foto_perfil.setAttribute("src", "https://github.com/"+gitUser+".png");
    fetch('https://api.github.com/users/ogiansouza')
    .then(res => res.json())
    .then(res => {
        foto_perfil.setAttribute("alt", res.name);
        foto_perfil.setAttribute("title", 'foto de '+res.name);
        nome_perfil.innerHTML = res.name
        nome_usuario.innerHTML = '@'+res.login
        numero_repositorios.lastChild.textContent = res.public_repos
        numero_seguidores.lastChild.textContent = res.followers
        numero_seguindo.lastChild.textContent = res.following
        git_link.setAttribute("href", "https://github.com/"+gitUser)
    })
    .catch(err => console.log(err))
}

getGithubData()