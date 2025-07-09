// Add your code here
function submitData(name, email){
    const fnData= {
        name,
        email
    }
    const cb = {
        method: 'POST',
        headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify(fnData)

    }
    return fetch('http://localhost:3000/users', cb).then(response => response.json()).then((data) =>{
       document.body.append(data.id) 
    }).catch((error) =>{
       const errorElm = document.createElement('p');
       errorElm.textContent = `${error.message}`;
       document.body.appendChild(errorElm);
    })
}
