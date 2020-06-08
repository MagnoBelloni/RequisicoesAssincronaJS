axios.get('https://api.github.com/users/MagnoBelloni')
    .then(function(response){
        console.log(response);
        console.log(response.data.avatar_url);
    })
    .catch(function(error){
        console.warn(error);
    });