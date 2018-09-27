/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];
//Write your function here
function buildTable(){
  var headerRow = document.querySelector("table").insertRow(0);
  headerRow.style.fontSize="25px";
  // Referenced https://www.w3schools.com/jquery/jquery_css.asp
  $("table").css("width", "600px")
            .css("text-align","center");
  $(headerRow.insertCell(0)).text("First Name");
  $(headerRow.insertCell(1)).text("Last Name");
  $(headerRow.insertCell(2)).text("Position");
  $(headerRow.insertCell(3)).text("Year");
  for (i=0; i<players.length; i++){
    var object = players[i];
    var nextRow = document.querySelector("table").insertRow(i+1);
    $(nextRow.insertCell(0)).text(object.first);
    $(nextRow.insertCell(1)).text(object.last);
    $(nextRow.insertCell(2)).text(object.position);
    var yearCell = nextRow.insertCell(3);
    yearCell.innerHTML=object.year;
    if (object.year == "Senior"){
      nextRow.style.fontWeight="bold";
    }
  }
  $("td").css("padding-top","10px")
  $("td").css("padding-bottom","10px")
}
/*
EXTRA CREDIT: Write a function that compares the list above with the list below,
finds the players that made the All-State team, and displays a message with the results:
"Congratulations to Springfield's 2018 North Carolina All-State honorees: ____."
Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/
var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
    {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
   {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
   {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
   first:'Darleen',
   last: 'Lawrence',
   position: 'Guard',
   school: 'Everton High School'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  school: 'Springfield High School'
  }
];

function compareTables(){
  for (i=0; i<players.length; i++){
    var player = players[i];
    for (x=1; x<allStars.length;x++){
      var starPlayer = allStars[x];
      if (player.first == starPlayer.first && player.last == starPlayer.last && player.position ==starPlayer.position){
        // Create elements referenced https://www.w3schools.com/jsref/met_document_createelement.asp
        var newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.innerHTML = "<br>Congratulations to "+starPlayer.school+
        "\'s 2018 North Carolina All-State honorees: "+starPlayer.first+" "+starPlayer.last+".";
      }
    }
  }
}


// Execute the functions
buildTable();
compareTables();
