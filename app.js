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
  style: function (feature) {
    return {
      "color": "green",
      "fillColor": "green"

    }
  }
}).addTo(map).bindPopup("Forêt du bassin du Congo")


// zone des grand Lacs
L.geoJSON(grandLac, {
  style: function (feature) {
    return {
      "color": "orange",
      "fillColor": "orange"

    }
  }
}).addTo(map).bindPopup("La Région des Grands Lacs")


//zone Madagascar
L.geoJSON(madagascar, {
  style: function (feature) {
    return {
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
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});



//Creation des marqueurs
const a = new Marker(1, "-1.68595", "19.58426", "Les Grandes Singes", "./assets/img/grandssinges.jpg", "mammifère", "text1")
const b = new Marker(2, "1.2", "15.3", "Les Elephants", "./assets/img/elephantAfrique.jpg", "poisson", "text2")
const c = new Marker(3, "-2.2", "25.3", "Les Lions", "./assets/img/lion.jpg", "oiseau", "text3")
const d = new Marker(4, "-1.98595", "17.58426", "Les Grandes Singes", "./assets/img/grandssinges.jpg", "gentil", "text4")
const e = new Marker(5, "-6.053", "37.260", "Les Girafes", "./assets/img/girafes.jpg", "oiseau", "text5")
const f = new Marker(6, "-18.924", "46.441", "Le Lémurien", "./assets/img/girafes.jpg", "poisson", "text6")


//sert à stocker les objects instancier
let africaList = [];
africaList.push(a);
africaList.push(b);
africaList.push(c);
africaList.push(d);


let grandLacList = [];
grandLacList.push(e);


let madagascarList = [];
madagascarList.push(f);




//sert à stocker les marqueurs 
let africaVisibleList = []
let grandLacVisibleList = []
let madagascarVisibleList = []





//sert a stocker les marqueurs dans le bon layerGroup 
let africa = L.layerGroup([])
let grandLacsZone = L.layerGroup([])
let madagascarZone = L.layerGroup([])






function modifyText(value) {
  let text = document.getElementById('text')
  text.innerHTML = '<p>' + value + '</p>'

}

function modifyTitle(value) {
  let title = document.getElementById('title')
  title.innerHTML = "<p>" + value + "<p>"

}


function showMarker(data) {
  let marker;
  for (let i = 0; i < data.length; i++) {
    marker = (L.marker([data[i].getLatitude, data[i].getLongitude]));
    if (data[i].getRace === "poisson") {
      marker.setIcon(greenIcon)
    } else if (data[i].getRace === "mammifère") {
      marker.setIcon(blackIcon)
    } else if (data[i].getRace === "oiseau") {
      marker.setIcon(redIcon)
    } else if (data[i].getRace === "gentil") {
      marker.setIcon(blueIcon)
    }



    if (data == africaList) {
      africaVisibleList.push(marker)
      marker.bindPopup(`<img class='grandsSinges' src= ${africaList[i].getImage} alt='animaux d'Afrique'>` + data[i].getTitle + `<button onclick="modifyText('` + (data[i].getText) + `'); modifyTitle('` + data[i].getTitle + `')" type='button' class='btn-marker mx-auto' data-bs-toggle='modal' data-bs-target='#animauxAfrique'>Plus d'info</button>`)
      //afficher les layer sur la carte
      marker.addTo(africa);
    } else if (data == grandLacList) {
      grandLacVisibleList.push(marker)
      marker.bindPopup(`<img class='grandsSinges' src= ${grandLacList[i].getImage} alt='animaux d'Afrique'>` + data[i].getTitle + `<button onclick="modifyText('` + (data[i].getText) + `'); modifyTitle('` + data[i].getTitle + `')" type='button' class='btn-marker mx-auto' data-bs-toggle='modal' data-bs-target='#animauxAfrique'>Plus d'info</button>`)
      marker.addTo(grandLacsZone);

    }else{
      madagascarVisibleList.push(marker)
      marker.bindPopup(`<img class='grandsSinges' src= ${madagascarList[i].getImage} alt='animaux d'Afrique'>` + data[i].getTitle + `<button onclick="modifyText('` + (data[i].getText) + `'); modifyTitle('` + data[i].getTitle + `')" type='button' class='btn-marker mx-auto' data-bs-toggle='modal' data-bs-target='#animauxAfrique'>Plus d'info</button>`)
      marker.addTo(madagascarZone);
    }







  }
  africa.addTo(map);
  grandLacsZone.addTo(map);
  madagascarZone.addTo(map);
};



function removeMarkerOnMap(layerGroup) {
  layerGroup.clearLayers();
}