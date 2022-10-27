class Marker{

   
    constructor(latitude, longitude){
        this.latitude = latitude,
        this.longitude = longitude  
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
     

    showLonLat(){
        console.log("la latitude est de " + this.latitude + "\n" + "la longitude est de " + this.longitude); 

      
                
    }


}








