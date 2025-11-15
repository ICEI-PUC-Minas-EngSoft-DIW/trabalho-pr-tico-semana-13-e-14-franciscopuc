fetch('http://localhost:3000/filmes')
.then(res => res.json())
.then(
    data => {
        loadCollection(data);
    }
)