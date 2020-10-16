const url = 'http://localhost:3000/api/cameras';

fetch(url)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        if(!data) {
            console.log('error : no data recieved from API');
        }
});

console.log('ICI');