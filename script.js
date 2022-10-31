


// création de la carte
const map = L.map('map').setView([-1.68595, 19.58426], 5);


// création du layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




//changer le marqueur
 const blackIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
 const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
 const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
/////////////////////////////////////////////////////





//Creation des marqueurs
  const a = new Marker("-1.68595", "19.58426", "Les Grandes Singes", "./assets/img/grandssinges.jpg", "mammifère")
  const b = new Marker("1.2", "15.3", "Les Elephants", "./assets/img/elephantAfrique.jpg", "poisson")
  const c = new Marker("-2.2", "25.3", "Les Lions", "./assets/img/lion.jpg", "oiseau")
  
  const d = new Marker("-1.98595", "17.58426", "Les Grandes Singes", "./assets/img/grandssinges.jpg", "mammifère")



  //ajouter les marqueurs dans le tableau markerlist qui va permettre ensuite d'afficher les marqueur sur la map
  let markerList = [];
  markerList.push(a);
  markerList.push(b);
  markerList.push(c);
  markerList.push(d);
  
  function showMarker()
  {
      console.log(markerList[i]);
  }
  
  //boucle permettant d'afficher tout les marqueur 
  // condition qui permet de differencier les couleurs des marqueur selon la caracteristique de l'animal (race)
  for(let i = 0; i < markerList.length; i++)
  { 
      if(markerList[i].getRace === "mammifère"){
         markerList.push(L.marker([markerList[i].getLatitude, markerList[i].getLongitude],{icon: blackIcon}).addTo(map).bindPopup((`<img class='grandsSinges' src= ${markerList[i].getImage} alt='animaux d'Afrique'> ${markerList[i].getTitle} <button type='button' class='btn-marker mx-auto' data-bs-toggle='modal' data-bs-target='#animauxAfrique'>Plus d'info</button>
     ` )))
      }
      if(markerList[i].getRace === "oiseau"){
         markerList.push(L.marker([markerList[i].getLatitude, markerList[i].getLongitude],{icon: greenIcon}).addTo(map).bindPopup((`<img class='grandsSinges' src= ${markerList[i].getImage} alt='animaux d'Afrique'> ${markerList[i].getTitle} <button type='button' class='btn-marker mx-auto' data-bs-toggle='modal' data-bs-target='#animauxAfrique'>Plus d'info</button>
         ` )))
      }
      if(markerList[i].getRace === "poisson"){
         markerList.push(L.marker([markerList[i].getLatitude, markerList[i].getLongitude],{icon: blueIcon}).addTo(map).bindPopup((`<img class='grandsSinges' src= ${markerList[i].getImage} alt='animaux d'Afrique'> ${markerList[i].getTitle} <button type='button' class='btn-marker mx-auto' data-bs-toggle='modal' data-bs-target='#animauxAfrique'>Plus d'info</button>
         ` )))
      }
     ;
  }
  
  
  
  //ajout des marqueurs
  
  
  
  





