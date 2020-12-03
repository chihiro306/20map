var map;
var marker;


//コンビニ
x1list = kinshicho_conveni.results;
var place_conveni = [
    
]
for(let i=0;i<x1list.length;++i){
    x = kinshicho_conveni.results[i].geometry.location;
    y = kinshicho_conveni.results[i].name;
    x["name"]=y;
    place_conveni.push(x);
}

//薬局
x2list = kinshicho_drugstore.results;
var place_drugstore = [

]
for(let i=0;i<x2list.length;++i){
    x = kinshicho_drugstore.results[i].geometry.location;
    y = kinshicho_drugstore.results[i].name;
    x["name"]=y;
    place_drugstore.push(x);
}

//病院
x3list = kinshicho_hospital.results;
var place_hospital=[
    
]
for(let i=0;i<x3list.length;++i){
    x = kinshicho_hospital.results[i].geometry.location;
    y = kinshicho_hospital.results[i].name;
    x["name"]=y;
    place_hospital.push(x);
}

//スーパー
x4list = kinshicho_supermarket.results;
var place_supermarket = [
    
]
for(let i=0;i<x4list.length;++i){
    x = kinshicho_supermarket.results[i].geometry.location;
    y = kinshicho_supermarket.results[i].name;
    x["name"]=y;
    place_supermarket.push(x);
}

//警察署
x5list = kinshicho_police.results;
var place_police = [
    
]
for(let i=0;i<x5list.length;++i){
    x = kinshicho_police.results[i].geometry.location;
    y = kinshicho_police.results[i].name;
    x["name"]=y;
    place_police.push(x);
}

//郵便局
x6list = kinshicho_postoffice.results;
var place_postoffice = [
    
]
for(let i=0;i<x6list.length;++i){
    x = kinshicho_postoffice.results[i].geometry.location;
    y = kinshicho_postoffice.results[i].name;
    x["name"]=y;
    place_postoffice.push(x);
}

var Center = {lat: 35.712084,lng: 139.814584};
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: Center,
        zoom: 14,
        styles: [{
            featureType:'poi.business',
            stylers: [
                { visibility: 'off' }
            ]
        },
        {
            featureType:'poi.medical',
            stylers: [
                { visibility: 'off' }
            ]
        }]
    });
};
function Conveni() {
    for(var i=0;i<place_conveni.length;i++){
        marker = new google.maps.Marker({
            position: {lat: place_conveni[i].lat, lng: place_conveni[i].lng},
            map: map,
            title: place_conveni[i].name,
            icon: {
                url: './conveni.png',
                scaledSize: new google.maps.Size(30,28)
            }
        });
    }
}

function Drug() {
    for(var i=0;i<place_drugstore.length;i++){
        marker = new google.maps.Marker({
            position: {lat: place_drugstore[i].lat, lng: place_drugstore[i].lng},
            map: map,
            title: place_drugstore[i].name,
            icon: {
                url: './drugstore.png',
                scaledSize: new google.maps.Size(30,30)
            }
        });
    }
}
function Super() {
    for(var i=0;i<place_supermarket.length;i++){
        marker = new google.maps.Marker({
            position: {lat: place_supermarket[i].lat, lng: place_supermarket[i].lng},
            map: map,
            title: place_supermarket[i].name,
            icon: {
                url: './supermarket.png',
                scaledSize: new google.maps.Size(30,30)
            }
        });
    }
}
function Hospital() {
    for(var i=0;i<place_hospital.length;i++){
        marker = new google.maps.Marker({
            position: {lat: place_hospital[i].lat, lng: place_hospital[i].lng},
            map: map,
            title: place_hospital[i].name,
            icon: {
                url: './hospital.png',
                scaledSize: new google.maps.Size(30,25)
            }
        });
    }
}
function Police() {
    for(var i=0;i<place_hospital.length;i++){
        marker = new google.maps.Marker({
            position: {lat: place_police[i].lat, lng: place_police[i].lng},
            map: map,
            title: place_police[i].name,
            icon: {
                url: './police.png',
                scaledSize: new google.maps.Size(30,30)
            }
        });
    }
}
function Post() {
    for(var i=0;i<place_hospital.length;i++){
        marker = new google.maps.Marker({
            position: {lat: place_postoffice[i].lat, lng: place_postoffice[i].lng},
            map: map,
            title: place_postoffice[i].name,
            icon: {
                url: './post_office.png',
                scaledSize: new google.maps.Size(30,25)
            }
        });
    }
}
