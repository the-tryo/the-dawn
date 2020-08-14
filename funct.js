function addFields() {
  var number = document.getElementById("sem").value;
  var sems = document.getElementById("sems");
  if (number < 9 && number > 0) {
    while (sems.hasChildNodes()) {
      sems.removeChild(sems.lastChild);
    }
    for (i = 0; i < number; i++) {
      sems.appendChild(document.createTextNode("Semester " + (i + 1)));
      var input = document.createElement("input");
      input.type = "text";
      input.id = i + 1;
      input.placeholder = "Enter your SPI";
      input.className += "ml-4";
      sems.appendChild(input);
      sems.appendChild(document.createElement("br"));
      sems.appendChild(document.createElement("br"));
    }
    var Button = document.createElement("button");
    Button.textContent = "Calculate";
    Button.className += "btn btn-primary mt-2";
    Button.onclick = function calc() {
      var cpi = 0;
      var sum = 0;
      for (j = 1; j <= number; j++) {
        if (j == 2) {
          cpi += document.getElementById(j).value * 28;
          sum += 28;
        }
        if (j == 4) {
          cpi += document.getElementById(j).value * 29;
          sum += 29;
        } else {
          cpi += document.getElementById(j).value * 26;
          sum += 26;
        }
      }
      sems.appendChild(document.createElement("br"));
      var res = document.createElement("h4");
      if (cpi / sum > 7)
        res.textContent = "Hola!! Your CPI is " + cpi / sum + ".";
      else res.textContent = "Lol! you sucks!, Your CPI is " + cpi / sum + ".";
      sems.appendChild(res);
    };
    sems.appendChild(Button);
  } else alert("Thoda sa sahi daal le...CHUTIYE!");
}
