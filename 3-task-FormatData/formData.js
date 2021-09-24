    const userForm = document.getElementById('userForm');
    let buttonSubmit = document.getElementById('buttonSubmit');
    buttonSubmit.addEventListener('click', function preventSubmit(event){
        event.preventDefault();

        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: new FormData(userForm)
        })
        .then(response => response.json())
        .then(responseUser => {
            console.log(responseUser)
        })
        .catch(error => console.log(error));
    })
