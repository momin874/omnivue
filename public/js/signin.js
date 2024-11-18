
document.addEventListener('DOMContentLoaded', ()=>{
    const token = localStorage.getItem('token')
    if(token){
        window.location.href = `/AdminPanel?token=${token}`
    }
    document.getElementById('signIn').addEventListener('click' ,e => {
        console.log('e')
        e.preventDefault()
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value
        const errorField  = document.getElementById('error')
        fetch('/AdminPanel/signin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })

        }).then(res => {
            if (!res.ok) {
                // If the response status is not OK (e.g., 400 or 500), throw an error
                throw new Error('Network response was not ok');
            }
            return res.json(); // Parse the response body as JSON
        }).then(data => {
            console.log(data)
            // Handle the parsed response data
            console.log('Success:', data);
            // For example, you could check if login was successful
            if (data.token) {
                // Do something on successful login
                console.log('Logged in successfully');
                localStorage.setItem('token', data.token);
                window.location.href = `/AdminPanel?token=${data.token}`;

            } else {
                // Handle unsuccessful login
                errorField.innerText = 'Invalid credentials';
            }
        }).catch(error => {
            console.error(error)
            errorField.innerText('Something went wrong')
        })
    })
})
