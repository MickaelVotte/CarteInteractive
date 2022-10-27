class Marker{

   
    constructor(latitude, longitude, text){
        this.latitude = latitude,
        this.longitude = longitude,
        this.text = text
    }

    get getLatitude(){
        return this.latitude;
    }
    set setLatitude(value){
        this.latitude = value;
    }
     

    get getLongitude(){
        return this.longitude;
    }
    set setLongitude(value){
        this.longitude = value;
    }
     

    get getText(){
        return this.text;
    }
    set setText(value){
        this.text = value
    }


    showLonLat(){
        console.log("la latitude est de " + this.latitude + "\n" + "la longitude est de " + this.longitude); 

      
                
    }


}








