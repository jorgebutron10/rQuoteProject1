/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// for background color change
function bgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    }
/***
Array of quotes
***/
var quotes = [{
quote: "Im a dreamer I have to dream and reach for the stars and if I miss a star then I grab a handful of clouds",
source: "Mike Tyson",
},
{
quote: "The first step toward success is taken when you refuse to be acaptive of the environment in which you first find yourself",
source: "Mark Caine",
},
{
quote: "Those who dare to fail miserably can achieve greatly",
source: "John F. Kennedy",
},
{
quote: "It is hard to fail, but it is worse never to have tried to succeed",
source:"Theodore Roosevelt",
},
{
quote:"It ain't about how hard you hit,It's about how hard you can get hit and keep moving forward",
source:"Sylvester Stallon",
citation:"Rocky Balboa" ,
year:"Dec 22, 2006"
}];
console.log(quotes)



function getRandomQuote(){
  var randomIndex = Math.floor(Math.random() * (quotes.length));
  for(var i = 0; i< quotes.length;i++){
  return quotes[randomIndex];
  }
}


// calls the quote
function printQuote(){

  // call to change the background color
  bgColor();

  var getQuote = getRandomQuote();
  var htmlString = '';

  htmlString += '<p class="quote"> ' + getQuote.quote + '</p>';
  htmlString += '<p class="source"> ' + getQuote.source;

  if (getQuote.citation && getQuote.year !== undefined) {
    htmlString += '<span class="citation">' + getQuote.citation + '</span>'
    htmlString += '<span class="year">' + getQuote.year + '</span>';
} else if (getQuote.citation !== undefined) {
    htmlString += '<span class="citation">' + getQuote.citation + '</span>'
} else if (getQuote.year !== undefined) {
    htmlString += '<span class="citation">' + getQuote.citation + '</span>'
}

// close <p> tag
htmlString += '</p>';

// inner html
document.getElementById('quote-box').innerHTML = htmlString;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
