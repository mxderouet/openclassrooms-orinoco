const url = 'http://localhost:3000/api/cameras/';

request('GET','http://localhost:3000/api/cameras', function(appareil){
    displayCameras(appareil);
});

function displayCameras(appareil) {
  for (let i in appareil) {
    console.log(i);
  }
}

function getCamera(id) {}

// construire dans le for le HTML en utilisant des document.createElement
// créer une vignette pour chaque caméra 
// ajouter en Js quand on clique sur la camera on affiche la fiche produit 

// getAllCameras = () => {
//   return new Promise((resolve) => {
//     let request = new XMLHttpRequest();
    // request.open("GET", url);
    // request.setRequestHeader('Access-Control-Allow-Origin', '*');
    // request.setRequestHeader('Access-Control-Allow-Methods', '*');
    // request.setRequestHeader('Access-Control-Allow-Headers', '*');
    // request.onreadystatechange = function () {
    //   if (
    //     this.readyState == XMLHttpRequest.DONE &&
    //     this.status >= 200 &&
    //     this.status < 400
    //   ) {
    //     resolve(JSON.parse(this.responseText));
    //     console.log("Connecté");
    //   } else {
    //     console.log("Non connecté");
    //   }
    // };
    // try {
    //   request.open("GET", url);
    //   console.log('TRY');
    //   request.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/');
    //   request.setRequestHeader('Access-Control-Allow-Methods', '*');
    //   request.setRequestHeader('Access-Control-Allow-Headers', '*');

    //   request.send();
    // } catch (e) {
    //   console.error(e);
    // } finally {
    //   console.log("FINALLY");
    // }
    
//   });
// };

// getAllCameras();
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
