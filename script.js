let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 39.8991, lng: -80.1864558 },
		zoom: 17,
		styles:
		[
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#9d935e"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#3f3b28"
            }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#5a5335"
            }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#4d4329"
            }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#6e6950"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#372f14"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#372f14"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "color": "#959358"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#cac697"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#d3d4a8"
            },
            {
                "visibility": "on"
            },
            {
                "invert_lightness": true
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#cdcf9b"
            },
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
            {
                "visibility": "simplified"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#e5df94"
            },
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#766d4b"
            },
            {
                "weight": "4.54"
            },
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#344144"
            },
            {
                "weight": "3.46"
            }
            ]
        }
        ]
    });

// Markers --------------------------------------

// CHAPEL
const chapMarker = new google.maps.Marker({
  position: { lat: 39.900658149216554, lng: -80.1871842693177 },
  map,
  title: "Robert's Chapel",
  icon: "https://i.imgur.com/dlaoV0A.png",
});
const infowindow = new google.maps.InfoWindow({
    content: "Robert's Chapel is a beautiful campus building designed for worship services and religous events.",
});
chapMarker.addListener("click", () => {
    infowindow.open({
        anchor: chapMarker,
        map,
        shouldFocus: false,
    });
});
// CAF
const cafMarker = new google.maps.Marker({
  position: { lat: 39.90039814496374, lng: -80.18795345925304 },
  map,
  title: "Benedum Dining Hall",
  icon: "https://i.imgur.com/fq4FDmK.png",
});
const infowindow2 = new google.maps.InfoWindow({
    content: "The Benedum Dining Hall serves delicious food to campus residents throughout the day.",
});
cafMarker.addListener("click", () => {
    infowindow2.open({
        anchor: cafMarker,
        map,
        shouldFocus: false,
    });
});
// MILLER
const millMarker = new google.maps.Marker({
  position: { lat: 39.89943869258607, lng: -80.18751550009951 },
  map,
  title: "A.B. Miller Hall",
  icon: "https://i.imgur.com/jQH1RPB.png",
});
const infowindow3 = new google.maps.InfoWindow({
    content: "A.B. Miller Hall is a historic building located in the center of campus where administrative offices stay.",
});
millMarker.addListener("click", () => {
    infowindow3.open({
        anchor: millMarker,
        map,
        shouldFocus: false,
    });
});
// HANNA
const hanMarker = new google.maps.Marker({
  position: { lat: 39.89942175826875, lng: -80.18706412140041 },
  map,
  title: "Hanna Hall",
  icon: "https://i.imgur.com/l1atlqC.png",
});
const infowindow4 = new google.maps.InfoWindow({
    content: "Hanna Hall is a very historic building where students take business courses.",
});
hanMarker.addListener("click", () => {
    infowindow4.open({
        anchor: hanMarker,
        map,
        shouldFocus: false,
    });
});
// FIELDHOUSE
const gymMarker = new google.maps.Marker({
  position: { lat: 39.89806928990658, lng: -80.18757942883632 },
  map,
  title: "Rudy Marissa Fieldhouse",
  icon: "https://i.imgur.com/6t1B2tm.png",
});
const infowindow5 = new google.maps.InfoWindow({
    content: "The Rudy Marissa Fieldhouse is where Waynesburg University's NCAA athletic events are held.",
});
gymMarker.addListener("click", () => {
    infowindow5.open({
        anchor: gymMarker,
        map,
        shouldFocus: false,
    });
});
// STEWART
const stewMarker = new google.maps.Marker({
  position: { lat: 39.89792413632152, lng: -80.1866443866553 },
  map,
  title: "Stewart Science Hall",
  icon: "https://i.imgur.com/4YESGY5.png",
});
const infowindow6 = new google.maps.InfoWindow({
    content: "Stewart Science Hall is an academic building where nursing, computer science, biology, chemistry, and other science classes are held.",
});
stewMarker.addListener("click", () => {
    infowindow6.open({
        anchor: stewMarker,
        map,
        shouldFocus: false,
    });
});
// CRED
const credMarker = new google.maps.Marker({
  position: { lat: 39.898081636436785, lng: -80.18625441755069 },
  map,
  title: "Center for Research and Economic Development",
  icon: "https://i.imgur.com/sklAruP.png",
});
const infowindow7 = new google.maps.InfoWindow({
    content: "Stewart Science Hall is an academic building where nursing, computer science, biology, chemistry, and other science classes are held.",
});
credMarker.addListener("click", () => {
    infowindow7.open({
        anchor: credMarker,
        map,
        shouldFocus: false,
    });
});
// THE NEST
const nestMarker = new google.maps.Marker({
  position: { lat: 39.89808767963055, lng: -80.18540573393247 },
  map,
  title: "The Nest",
  icon: "https://i.imgur.com/50SY4x9.png",
});
const infowindow8 = new google.maps.InfoWindow({
    content: "The Nest is a new store on campus, formerly an on-campus house, that sells university merchandise and offers a lounge upstairs.",
});
nestMarker.addListener("click", () => {
    infowindow8.open({
        anchor: nestMarker,
        map,
        shouldFocus: false,
    });
});
// CJ HOUSE
const cjMarker = new google.maps.Marker({
  position: { lat: 39.90032511655341, lng: -80.18888590737537 },
  map,
  title: "Crime Scene Investigation House",
  icon: "https://i.imgur.com/D9YnwsK.png",
});
const infowindow9 = new google.maps.InfoWindow({
    content: "This house is where the criminal justice classes simulate crime scene events.",
});
cjMarker.addListener("click", () => {
    infowindow9.open({
        anchor: cjMarker,
        map,
        shouldFocus: false,
    });
});
// GPAC
const gpacMarker = new google.maps.Marker({
  position: { lat: 39.89987293445909, lng: -80.18786943410326 },
  map,
  title: "Goodwin Performing Arts Center",
  icon: "https://i.imgur.com/leGzgt1.png",
});
const infowindow10 = new google.maps.InfoWindow({
    content: "At the GPAC, theater and other live performances are held for students to enjoy.",
});
gpacMarker.addListener("click", () => {
    infowindow10.open({
        anchor: gpacMarker,
        map,
        shouldFocus: false,
    });
});
// WILLISON
const willMarker = new google.maps.Marker({
  position: { lat: 39.89729089382027, lng: -80.1863105870005 },
  map,
  title: "Willison Residence Hall",
  icon: "https://i.imgur.com/da9Kp6L.png",
});
const infowindow11 = new google.maps.InfoWindow({
    content: "Willison Hall is an upperclass male dormitory. Each room can house up to three residents.",
});
willMarker.addListener("click", () => {
    infowindow11.open({
        anchor: willMarker,
        map,
        shouldFocus: false,
    });
});
// THAYER
const thayMarker = new google.maps.Marker({
  position: { lat: 39.899521711753486, lng: -80.18422970245072 },
  map,
  title: "Thayer Hall",
  icon: "https://i.imgur.com/da9Kp6L.png",
});
const infowindow12 = new google.maps.InfoWindow({
    content: "Thayer Hall is an underclass male dormitory that holds up to two students per room.",
});
thayMarker.addListener("click", () => {
    infowindow12.open({
        anchor: thayMarker,
        map,
        shouldFocus: false,
    });
});
// EAST
const eastMarker = new google.maps.Marker({
  position: { lat: 39.90035219957737, lng: -80.18551633037737 },
  map,
  title: "East Residence Hall",
  icon: "https://i.imgur.com/da9Kp6L.png",
});
const infowindow13 = new google.maps.InfoWindow({
    content: "East Hall is an upperclass female dormitory that houses up to three students per room.",
});
eastMarker.addListener("click", () => {
    infowindow13.open({
        anchor: eastMarker,
        map,
        shouldFocus: false,
    });
});
// SOUTH
const westMarker = new google.maps.Marker({
  position: { lat: 39.90035219957737, lng: -80.18632680358009 },
  map,
  title: "West Residence Hall",
  icon: "https://i.imgur.com/da9Kp6L.png",
});
const infowindow14 = new google.maps.InfoWindow({
    content: "West Hall is an upperclass female dormitory that houses up to three students per room.",
});
westMarker.addListener("click", () => {
    infowindow14.open({
        anchor: westMarker,
        map,
        shouldFocus: false,
    });
});
// SOUTH
const southMarker = new google.maps.Marker({
  position: { lat: 39.90027603905549, lng: -80.1859410944173 },
  map,
  title: "South Residence Hall",
  icon: "https://i.imgur.com/da9Kp6L.png",
});
const infowindow15 = new google.maps.InfoWindow({
    content: "South Hall is an upperclass female dormitory that houses up to three students per room.",
});
southMarker.addListener("click", () => {
    infowindow15.open({
        anchor: southMarker,
        map,
        shouldFocus: false,
    });
});
// POLLOCK
const polMarker = new google.maps.Marker({
  position: { lat: 39.899235713941415, lng: -80.18495185010345 },
  map,
  title: "Pollock Residence Hall",
  icon: "https://i.imgur.com/da9Kp6L.png",
});
const infowindow16 = new google.maps.InfoWindow({
    content: "Pollock Hall is an upperclass female dormitory that houses up to four students per room.",
});
polMarker.addListener("click", () => {
    infowindow16.open({
        anchor: polMarker,
        map,
        shouldFocus: false,
    });
});
// STOVER
const stoMarker = new google.maps.Marker({
  position: { lat: 39.89985396053392, lng: -80.18618967640602 },
  map,
  title: "Stover Campus Center",
  icon: "https://i.imgur.com/sklAruP.png",
});
const infowindow17 = new google.maps.InfoWindow({
    content: "Stover Campus Center is open 24/7 and holds the Beehive, along with several offices and classrooms. Communication Theory and Research, the best class at Waynesburg, is located in this building for some reason.",
});
stoMarker.addListener("click", () => {
    infowindow17.open({
        anchor: stoMarker,
        map,
        shouldFocus: false,
    });
});
// EBERLY
const ebeMarker = new google.maps.Marker({
  position: { lat: 39.899828955198245, lng: -80.1853456610255 },
  map,
  title: "Eberly Library",
  icon: "https://i.imgur.com/l1atlqC.png",
});
const infowindow18 = new google.maps.InfoWindow({
    content: "Have you ever been to the Eberly Library? If not you should, because it's great. They have books of all kinds to suit your needs.",
});
ebeMarker.addListener("click", () => {
    infowindow18.open({
        anchor: ebeMarker,
        map,
        shouldFocus: false,
    });
});
// BUHL
const buhlMarker = new google.maps.Marker({
  position: { lat: 39.89928712489452, lng: -80.18544938765004 },
  map,
  title: "Buhl Humanities Building",
  icon: "https://i.imgur.com/6t1B2tm.png",
});
const infowindow19 = new google.maps.InfoWindow({
    content: "Buhl Hall is where humanities classes are held. WCYJ-FM transmits a radio signal from here. The fourth floor holds the Department of Communication with the WCTV studio.",
});
buhlMarker.addListener("click", () => {
    infowindow19.open({
        anchor: buhlMarker,
        map,
        shouldFocus: false,
    });
});
// WILEY
const wileyMarker = new google.maps.Marker({
  position: { lat: 39.892981428349614, lng: -80.18181692135677 },
  map,
  title: "John F. Wiley Stadium",
  icon: "https://i.imgur.com/6t1B2tm.png",
});
const infowindow20 = new google.maps.InfoWindow({
    content: "Wiley Stadium is where outdoor Yellow Jacket sporting events are held. This is also known as 'the Home of The Yellow Jackets.' Be careful, it might be flooded.",
});
wileyMarker.addListener("click", () => {
    infowindow20.open({
        anchor: wileyMarker,
        map,
        shouldFocus: false,
    });
});

// COORDIANTES ------------------------------

// criminal justice house

const cjHouse = new google.maps.Polygon({
	paths: [
	{ lat: 39.900381516505455, lng: -80.18875312061515 },
	{ lat: 39.90030229555674, lng: -80.18875312061515 },
	{ lat: 39.900303838822865, lng: -80.1890005543931 },
	{ lat: 39.90038357419121, lng: -80.18899988384086 },
	{ lat: 39.900381516505455, lng: -80.18875312061515 },
	],
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});
cjHouse.setMap(map);

// GPAC

const GpacCoords = [
{ lat: 39.90003, lng: -80.18801},
{ lat: 39.90002, lng: -80.18771},
{ lat: 39.89980, lng: -80.18772},
{ lat: 39.89981, lng: -80.18802},
{ lat: 39.90003, lng: -80.18801} ];

const GpacPolygon = new google.maps.Polygon({
	paths: GpacCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});
GpacPolygon.setMap(map);

// Thayer Hall

const ThayerCoords = [
{ lat: 39.89980, lng: -80.18429},
{ lat: 39.89979, lng: -80.18416},
{ lat: 39.89947, lng: -80.18416},
{ lat: 39.89947, lng: -80.18415},
{ lat: 39.89940, lng: -80.18415},
{ lat: 39.89939, lng: -80.18409},
{ lat: 39.89922, lng: -80.18409},
{ lat: 39.89922, lng: -80.18430},
{ lat: 39.89980, lng: -80.18429} ];

const ThayerPolygon = new google.maps.Polygon({
	paths: ThayerCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});
ThayerPolygon.setMap(map);

// Pollock

const pollockCoords = [
{ lat: 39.89932966350404, lng: -80.18516459443458 }, 
{ lat: 39.89932674703466, lng: -80.18474261889916 }, 
{ lat: 39.89918383988418, lng: -80.18474185858288 }, 
{ lat:39.89918675635962, lng: -80.18516611506715 }, 
{ lat: 39.89932966350404 , lng: -80.18516459443458}
];

const PollockPolygon = new google.maps.Polygon({
    paths: pollockCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});
PollockPolygon.setMap(map);

// Stewart

const stewartCoords = [
{ lat: 39.89820313942542, lng: -80.18674222997413 },
{ lat: 39.898196966171525, lng: -80.1864800440406 },
{ lat: 39.8977313983387, lng: -80.1864981489516 },
{ lat: 39.89773808607581, lng: -80.18675966433287 },
{ lat: 39.89820313942542, lng: -80.18674222997413 },
];
const stewartpolygon = new google.maps.Polygon({
    paths: stewartCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});

stewartpolygon.setMap(map);

// SWEP

const southCoords = [
{ lat: 39.90036605487646, lng: -80.18613153937626 },
{ lat: 39.90036296834702, lng: -80.18572786691594 },
{ lat: 39.90022304553257, lng: -80.18572786691594 },
{ lat: 39.90022407437784, lng: -80.18613556268981 },
{ lat: 39.90036605487646, lng: -80.18613153937626 },
];
const southpolygon = new google.maps.Polygon({
    paths: southCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});

southpolygon.setMap(map);

const westCoords = [
{ lat: 39.90053787146326, lng: -80.18560984971823 },
{ lat: 39.90053787146326, lng: -80.18542477729457 },
{ lat: 39.900227082463, lng: -80.18542305089767 },
{ lat: 39.90022503189161, lng: -80.1856048100907 },
{ lat: 39.90053787146326, lng: -80.18560984971823 },
];
const westpolygon = new google.maps.Polygon({
    paths: westCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});

westpolygon.setMap(map);

const eastCoords = [
{ lat: 39.900556198377956, lng: -80.1864066888825 },
{ lat: 39.90055312253561, lng: -80.1862209202955 },
{ lat: 39.900233234177925, lng: -80.18622893908343 },
{ lat: 39.90023425946349, lng: -80.18641337120577 },
{ lat: 39.900556198377956, lng: -80.1864066888825 },
];
const eastpolygon = new google.maps.Polygon({
    paths: eastCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});

eastpolygon.setMap(map);

// willison

const willisonCoords = [
{ lat: 39.897538998708136, lng: -80.18620531789718 },
{ lat: 39.897541056479255, lng: -80.18638502589995 },
{ lat: 39.89711509654142, lng: -80.18639307252694 },
{ lat: 39.89711509654142, lng: -80.18621604673316 },
{ lat: 39.897538998708136, lng: -80.18620531789718 }
];
const willisonPolygon = new google.maps.Polygon({
    paths: willisonCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});
willisonPolygon.setMap(map);

// Eberly

const eberlyCoords = [

{ lat: 39.90005564956326, lng: -80.18550590686736 },
{ lat: 39.900048962052296, lng: -80.18519074730044 },
{ lat: 39.899941961787555, lng: -80.18518940619633 },
{ lat: 39.89993681753948, lng: -80.18515185526945 },
{ lat: 39.89970121057905, lng: -80.185167277972 },
{ lat: 39.89970223943216, lng: -80.18530608229189 },
{ lat: 39.89968474892733, lng: -80.18530675284416 },
{ lat: 39.89968526335401, lng: -80.18535302095081 },
{ lat: 39.89970532599135, lng: -80.18535167984626 },
{ lat: 39.899705950640275, lng: -80.18551325365327 },
{ lat: 39.89984227353221, lng: -80.18550855978738 },
{ lat: 39.899843816810794, lng: -80.18553672298216 },
{ lat: 39.89992406713929, lng: -80.18553404077309 },
{ lat: 39.899924581564186, lng: -80.18550855978684 },
{ lat: 39.90005564956326, lng: -80.18550590686736 }
];

const eberlyPolygon = new google.maps.Polygon({
    paths: eberlyCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});

eberlyPolygon.setMap(map);

// Fieldhouse

const fieldhouseCoords = [
{ lat: 39.89822129557472, lng: -80.18785727074538 },
{ lat: 39.89821720506465, lng: -80.18727432259585 },
{ lat: 39.89798540909532, lng: -80.18727609987678 },
{ lat: 39.89798677260331, lng: -80.18785904802633 },
{ lat: 39.89822129557472, lng: -80.18785727074538 },];
const fieldhousePolygon = new google.maps.Polygon({
    paths: fieldhouseCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});
fieldhousePolygon.setMap(map);
// Hanna

const hannaCoords = [
{ lat: 39.899575902129406, lng: -80.18715171790629 },
{ lat: 39.89957230113685, lng: -80.18694183506034 },
{ lat: 39.89937424625455, lng: -80.18694787003034 },
{ lat: 39.89937784725752, lng: -80.18715708232408 },
{ lat: 39.899575902129406, lng: -80.18715171790629 }
];

const hannaPolygon = new google.maps.Polygon({
    paths: hannaCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});

hannaPolygon.setMap(map);

// CRED

const CREDCoords = [
{ lat: 39.89820789567786, lng: -80.1863954019053 },
{ lat: 39.898204677891705, lng:  -80.18609970550332 },
{ lat: 39.89802287272942, lng:  -80.18610389977852 },
{ lat: 39.89802930831865,  lng:  -80.18640588759332 },
{ lat: 39.89820789567786, lng: -80.1863954019053 }
];
const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});

CREDPolygon.setMap(map);

// CAF

const CafCoords = [

{lat: 39.900203456792106, lng: -80.18817887398245},
{lat: 39.900590052054156, lng: -80.18815381174599},
{lat: 39.90059271868695, lng: -80.1880958202088},
{lat: 39.90067519885253, lng: -80.18808489059572},
{lat: 39.900671765515945, lng: -80.18796763513225},
{lat: 39.900583998544434, lng: -80.18796936448713 },
{lat: 39.900573572016434, lng: -80.18770358656951},
{lat: 39.90018903667797, lng: -80.18772506848647},
];

const cafPolygon = new google.maps.Polygon({
    paths: CafCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});
cafPolygon.setMap(map);

// The nest >:(

const theNest = [
{lat: 39.8982031743014, lng: -80.18528256249408},
{lat: 39.89803340961704, lng: -80.1852906091205},
{lat: 39.89803958288567, lng: -80.18549915085532},
{lat: 39.89820883311696, lng: -80.18549512754211},
];
const nestPolygon = new google.maps.Polygon({
    paths: theNest,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});
nestPolygon.setMap(map);

// Chapel

const chapelCoords = [
{ lat: 39.90094412190922, lng: -80.18730816171713 },
{ lat: 39.900937434485016, lng:-80.18702518866414  },
{ lat: 39.90050687827982, lng:-80.18703994081373  },
{ lat: 39.90051099364375, lng: -80.18732090220995 },
{ lat: 39.90094412190922, lng: -80.18730816171713 }
];
const chapelPolygon = new google.maps.Polygon({
    paths: chapelCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
});
chapelPolygon.setMap(map);

// Buhl

 const BuhlCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
];

 const Buhlpolygon = new google.maps.Polygon({
        paths: BuhlCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
    });

    Buhlpolygon.setMap(map);
// Stover
    const StoverCoords = [
    { lat: 39.899772227541916, lng: -80.18636360069222 },
    { lat: 39.89980309309625, lng: -80.18636695345333 },
    { lat: 39.89980309309625, lng: -80.18640517492993 },
    { lat: 39.89999548807153, lng: -80.18639712830327 },
    { lat: 39.89999548807153, lng: -80.18635823627444 },
    { lat: 39.90002841122172, lng: -80.18635756572223 },
    { lat: 39.90002326698055, lng: -80.18596864543396 },
    { lat: 39.89976502557723, lng: -80.18597803316504 },
    { lat: 39.899772227541916, lng: -80.18636360069222 },
    ];

     const Stoverpolygon = new google.maps.Polygon({
        paths: StoverCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
    });

    Stoverpolygon.setMap(map);
// Miller
    const MillerCoords = [
    { lat: 39.89939727765804, lng: -80.1877995788888 },
    { lat: 39.89939419108494, lng: -80.18761718866978 },
    { lat: 39.89937772935947, lng: -80.18761718866978 },
    { lat: 39.89937515721452, lng: -80.18760713038564 },
    { lat: 39.899367955208106, lng: -80.1876057892811 },
    { lat: 39.89936744077903,  lng: -80.1874254107189 },
    { lat: 39.89937515721452, lng: -80.1874227285098 },
    { lat: 39.899376186072516, lng: -80.18741602298704 },
    { lat: 39.89939933537334, lng: -80.18741535243477 },
    { lat: 39.89939984980218, lng: -80.1872289389021 },
    { lat: 39.89955932254984, lng: -80.18723229166346 },
    { lat: 39.89956343797066, lng: -80.18743748065987 },
    { lat: 39.899593274764335, lng: -80.18743748065987 },
    { lat: 39.89959481804641, lng: -80.18759103713101 },
    { lat: 39.8995618946879, lng: -80.18759304878785 },
    { lat: 39.89956086583266, lng: -80.18779555557518 },
    { lat: 39.89939727765804, lng: -80.1877995788888 },
];
      const Millerpolygon = new google.maps.Polygon({
    paths: MillerCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
  });

      Millerpolygon.setMap(map);
// Wiley
  const WileyCoords = [
  { lat: 39.89375286969348, lng: -80.18233152586367 },
  { lat: 39.89373172627137, lng: -80.18165911210684 },
  { lat: 39.89324965447746, lng: -80.18092607088016 },
  { lat: 39.89256037049631, lng: -80.1817087164004 },
  { lat: 39.892890212775455, lng: -80.1823811301572 },
  { lat: 39.89375286969348, lng: -80.18233152586367 },
  ];
 const Wileypolygon = new google.maps.Polygon({
    paths: WileyCoords,
    strokeColor: "#1f1601",
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor: "#2b1d14",
    fillOpacity: 1,
  });
 Wileypolygon.setMap(map);


// end bracket below, DON'T DELETE
}