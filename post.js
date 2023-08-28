function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayData(data))
}
function displayData(users) {
    const postContainer = document.getElementById('post-container');
    for (const user of users) {

        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h2>${user.userId}</h2>
        <h3>${user.title}</h3>
        <p>${user.title}</p>
        `
        postContainer.appendChild(postDiv)
    }

}
loadUser();