const map = L.map('map').setView([-1.68595, 19.58426], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const marker1 = L.marker([-1.68595, 19.58426]).addTo(map);
const marker2 = L.marker([-2.68550, 26.58420]).addTo(map);
const marker3 = L.marker([-4.68895, 19.58126]).addTo(map);
const marker4 = L.marker([-1.98095, 21.58026]).addTo(map);


marker1.bindPopup("<img class='grandsSinges' src='/assets/img/grandssinges.jpg' alt='grands singes'><b>Les Grands Singes!<br><a href='Plus d'infos'>Plus d'infos</a>").openPopup();


marker2.bindPopup("<b>Hello world!</b><br>I am a Tiger.").openPopup();


function bindPopup(e){
console.log(e);
}