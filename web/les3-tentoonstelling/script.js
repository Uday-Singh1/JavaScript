const myImage = document.getElementById('myImage');
const myTitle = document.getElementById('myTitle');

const informatie = document.getElementById('informatie');

let paintings = [
"img/painting0.jpg",
"img/painting1.jpg",
"img/painting2.jpg",
"img/painting3.jpg",
"img/painting4.jpg",
"img/painting5.jpg",
"img/mqdefault.jpg",
"img/zhongxina.jpg"
]

let titles = [
    "De schilderijen van Uday",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen",
    "Boerderij in de provence",
    "The guy from Fortnite",
    "ZHong Xina people say you can't see him"
];

let info = [
    "Hier komt informatie",
    "november 1888 Pesjkinmuseum Moskouw",
    "juni 1889 Museum of Modern Art New York",
    "september 1888 Mus�e d'Orsay Parijs",
    "januari 1889 Neue Pinakothek Munchen",
    "september 1888 National Gallery of ArtWashington D.C.",
    "october 2021 Its about drive its about power America",
    "2010 Still can't see him North Korea"
]












function changeImage(index){
    myTitle.innerHTML = titles[index];
    informatie.innerHTML = info[index];
    myImage.src = paintings[index];
}


