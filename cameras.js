const url = 'http://localhost:3000/api/cameras/';

getAllCameras = () => {
  return new Promise((resolve) => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (
        this.readyState == XMLHttpRequest.DONE &&
        this.status >= 200 &&
        this.status < 400
      ) {
        resolve(JSON.parse(this.responseText));
        console.log("Connecté");
      } else {
        console.log("Non connecté");
      }
    };
    try {
      request.open("GET", url);
      request.send();
    } catch (e) {
      console.error(e);
    } finally {
      console.log("ICI2");
    }
    
  });
};

getAllCameras();
// xmlhttp.send();
// request.send()

// fetch(url)
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(error) {
//         if(!data) {
//             console.log('error : no data recieved from API');
//         }
// });

console.log('ICI');