// création de la carte
const map = L.map('map').setView([-1.68595, 19.58426], 5);


// création du layer

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



///////////////////////////////////////////////////////////////////////////////////////

// zone foret equatorial du congo 
L.geoJSON(data, {
    style: function(feature){
      return{
        "color": "green",
        "fillColor": "green"
        
      }
    }
  }).addTo(map).bindPopup("Forêt du bassin du Congo")
  

// zone des grand Lacs
  L.geoJSON(grandLac, {
    style: function(feature){
      return{
        "color": "orange",
        "fillColor": "orange"
        
      }
    }
  }).addTo(map).bindPopup("La Région des Grands Lacs")


  //zone Madagascar
  L.geoJSON(madagascar, {
    style: function(feature){
      return{
        "color": "#FA5858",
        "fillColor": "#FA5858",
        "fillOpacity": 0.1
        
      }
    }
  }).addTo(map).bindPopup("Madagascar")
  



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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



//Creation des marqueurs
const a = new Marker(1,"-1.68595", "19.58426", "Les Grandes Singes", "./assets/img/grandssinges.jpg", "mammifère", "text1")
const b = new Marker(2,"1.2", "15.3", "Les Elephants", "./assets/img/elephantAfrique.jpg", "poisson", "text2" )
const c = new Marker(3,"-2.2", "25.3", "Les Lions", "./assets/img/lion.jpg", "oiseau", "text3")
const d = new Marker(4,"-1.98595", "17.58426", "Les Grandes Singes", "./assets/img/grandssinges.jpg", "mammifère", "text4" )


//ajouter les marqueurs dans le tableau markerlist qui va permettre ensuite d'afficher les marqueur sur la map
let africaList = [];
africaList.push(a);
africaList.push(b);
africaList.push(c);
africaList.push(d);


let africaVisibleList = []



let dict = {
    1: "text1",
    2: "lorem2",
    3: "text3",
    4: "text4",
};


function modifyText(value){
    let text = document.getElementById('text')
    text.innerHTML = '<p>'+ value +'</p>'
   console.log(text);


}

function modifyTitle(value){
    let title = document.getElementById('title')
    title.innerHTML = "<p>" + value + "<p>"
    console.log(value);
}




let africa = L.layerGroup([])

function showMarker(data){
    let marker;
    for(let i = 0; i < data.length; i++){
        marker = (L.marker([data[i].getLatitude, data[i].getLongitude]));
        if(data[i].getRace === "poisson"){
           marker.setIcon(greenIcon)
        }

        africaVisibleList.push(marker)
        marker.bindPopup( `<img class='grandsSinges' src= ${africaList[i].getImage} alt='animaux d'Afrique'>`+ data[i].getTitle + `<button onclick="modifyText('`+ (data[i].getText) + `'); modifyTitle('`+ data[i].getTitle + `')" type='button' class='btn-marker mx-auto' data-bs-toggle='modal' data-bs-target='#animauxAfrique'>Plus d'info</button>`)
        marker.addTo(africa);  
    }
   africa.addTo(map);
};



function removeMarkerOnMap(layerGroup){
    layerGroup.clearLayers();
}
