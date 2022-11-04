class Marker {

    constructor(id, latitude, longitude, title, image, race, text) {
        this.id = id,
        this.latitude = latitude,
            this.longitude = longitude,
            this.title = title,
            this.image = image,
            this.race = race,
            this.text = text
    }

    get getId(){
        return this.id;
    }
    set setId(value){
        this.id = value;
    }

    get getLatitude() {
        return this.latitude;
    }
    set setLatitude(value) {
        this.latitude = value;
    }

    get getLongitude() {
        return this.longitude;
    }
    set setLongitude(value) {
        this.longitude = value;
    }

    get getTitle() {
        return this.title;
    }
    set setText(value) {
        this.title = value;
    }

    get getImage() {
        return this.image;
    }
    set setImage(value) {
        this.image = value;
    }

    get getRace() {
        return this.race;
    }
    set setRace(value) {
        this.race = value;
    }

    get getText() {
        return this.text;
    }
    set setText(value) {
        this.text = value
    }



    showLonLat() {
        console.log("la latitude est de " + this.latitude + "\n" + "la longitude est de " + this.longitude);
    }


}

