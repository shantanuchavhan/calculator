function fetchData(){
    fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817')
    .then(response=>{
        if (!response.ok){
            throw Error("Error")
        }
        return response.json();

    }).then(data=>{
        const html=data.data.map(user=>{
            return 
        })

    }).catch(error=>{
        console.log(error);
    });
}

fetchData()

 