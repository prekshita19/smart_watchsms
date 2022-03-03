let dates = new Date();
let date = dates.getDate();
console.log(date);
let day = dates.getDay();

let week_days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
day = week_days[day];
// console.log(day)

let hour = dates.getHours();
// console.log(hour)
let minutes = dates.getMinutes();
// console.log(minutes)

document.querySelector("#smalltime").innerHTML = hour + ":" + minutes;
document.querySelector("#timenow").innerHTML = hour + ":" + minutes;
document.querySelector("#daytoday").innerHTML = day;

function displaymessages() {
  // console.log('clicked Messages.....');

  document.getElementById("innersquare").style =
    "background-color:rgba(0, 0, 0, 0.233);margin-top: 0px;margin-bottom: 0px;";
  languages = ["Java", "HTML", "CSS"];
  let html1 = "";
  for (i in languages) {
    console.log(parseInt(i) + 1, languages[i]);
    html1 +=
      "<div> <button style='background-color:rgba(0,0,0,0);height:50px;width:75%;color:white;border:solid white;margin:2px;border-radius:75px;;' id='" +
      languages[i] +
      "' onclick='" +
      languages[i] +
      "()'>";
    html1 += parseInt(i) + parseInt(1) + ". " + languages[i];
    html1 += "</div>";
  }
  // console.log(html1);
  document.getElementById("body1").innerHTML = html1;
  document.getElementById("images").style = "background-color:black;margin-top:15px;border-radius:25px;";
  document.createElement
}

function Java() {
  console.log("called");
  document.getElementById("body1").innerHTML =
    "<p style='color:white;padding:10px;'>Java is a high level programming language developed by Sun Microsystems</p>";
  // document.getElementById("images").innerHTML = "";
}


function HTML() {
  document.getElementById("body1").innerHTML =
    "<p style='color:white;padding:10px;'>I help you to design your front end apps.</p>";
}
function CSS() {
  document.getElementById("body1").innerHTML =
    "<p style='color:white;padding:10px;'>I provide aid to HTML to look good....</p>";
}

