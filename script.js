


// création de la carte
const map = L.map('map').setView([-1.68595, 19.58426], 5);


// création du layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




//changer le marqueur
 const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  

  const a = new Marker("-1.68595", "19.58426", "Les Grandes Singes")
  const b = new Marker("1.2", "15.3", "Les Elephants")
  const c = new Marker("-2.2", "25.3", "Les Lions")
  
  const markerList = [];
  
  markerList.push(a);
  markerList.push(b);
  markerList.push(c);
  
  
  
  
  for(let i = 0; i < markerList.length; i++)
  {  
    L.marker([markerList[i].getLatitude, markerList[i].getLongitude],{icon: greenIcon}).addTo(map).bindPopup((markerList[i].getText) + ("<button type='button' class='btn-marker mx-auto' data-bs-toggle='modal' data-bs-target='#grandSinges'>Plus d'info</button>"));
  }
  
  
  
  //ajout des marqueurs
  
  
  
  

 //marker.bindPopup("<img class='grandsSinges' src='/assets/img/grandssinges.jpg' alt='grands singes'><b>Les Grands Singes!<br><button type='button' class='btn-marker ms-5' data-bs-toggle='modal' data-bs-target='#grandSinges'>Plus d'info</button>");





