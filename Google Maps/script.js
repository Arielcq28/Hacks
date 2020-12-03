
function initMap(){
    // MAP OPTIONS
    const options = {
        zoom: 13, //The closer to the zero, the farthest of the map
        center: {
            lat: 9.9981,
            lng: -84.1198
        }
    }

    // BASICS
    
    // NEW MAP
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    /*
    // Listen for click map
    google.maps.event.addListener(map, 'click', (event) =>{
        
        addMarker( {coords: event.latLng} )
        
    });

    // ADD MARKER
    var marker = new google.maps.Marker({
        position: {
            lat: 10.0028,
            lng: -84.1085
        },
        map: map,
        icon: 'https://img.icons8.com/emoji/1x/hot-pepper.png'
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<p>[TEXT]</p>'
    });

    marker.addListener('click', () =>{
        infoWindow.open(map, marker);
    })
    */

    let markers = [
        { 
            coords: {lat: 10.0028, lng: -84.1085 },
            iconImage: 'https://img.icons8.com/emoji/1x/hot-pepper.png',
            content: '<p> Jardines de Roma </p>'
        },
        { 
            coords: {lat: 10.0071, lng: -84.1318 },
            iconImage: 'https://img.icons8.com/emoji/1x/cucumber-emoji.png'
        },
        { 
            coords: {lat: 9.9981, lng: -84.1198 },
            iconImage: 'https://img.icons8.com/emoji/1x/garlic-emoji.png'
        },
        { 
            coords: {lat: 10.0191, lng: -84.1237 },
            content: '<p> Barva </p>'
        }
    ];

    // Loop trough markers
    markers.map(item => addMarker(item));

    function addMarker(props){

        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            // icon: props.iconImage
        });

        // Check for custom icon
        props.iconImage ? marker.setIcon(props.iconImage) : null;

        // Check for info content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', () =>{
                infoWindow.open(map, marker);
            })
        }

    }
    
}