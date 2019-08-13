var fact = $('#fact');
var button = $('button');


var funFact = ["Capybaras alert others to predators by barking like dogs.", "Capybaras can eat more than 3 kilograms of plants a day!",
"Capybaras are amazing swimmers!", "The capybara is the largest rodent in the world.",
"Capybaras are extremely social animals.", "Capybaras are also nicknamed the water pig.", "Capybaras have a symbiotic relationship with birds, leading them to be comfortable with other animals sitting on them.",
"Capybaras eat their own poop to aid in digestion.", "Capybaras are a protected species!", "The capybara's name means 'master of the grasses.'",
"Capybaras can grow over a foot and a half in height.", "Capybaras can weigh up to 140 pounds."];

var capybaraImage = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"];
var colorList = ["#6761A8","#FD5200", "#009DDC", "#2A2D34", "#009B72", "#FF9F1C", "#E3C0D3", "#404E4D", "#780116", "#42033D", "#0A2E36", "#8FC93A"];


button.on("click", changeRandom);
button.on("click", changeImg);
button.on("click", changeBackground);

function changeRandom(){
  var number = Math.random() * 15;
  var randomnumber = Math.floor(number);
  console.log("Button clicked.");
  console.log(randomnumber);
  fact.text(funFact[randomnumber]);
}

function changeImg(){
  var randomImageNumber = Math.floor(Math.random() * 11);
  var imgSource = (capybaraImage[randomImageNumber]);
  document.getElementById("imageid").src= imgSource;
}

function changeBackground(){
  var number = Math.random() * 12;
  var randomnumber = Math.floor(number);
  bgColor = (colorList[randomnumber]);
  document.body.style.background = bgColor;
}
