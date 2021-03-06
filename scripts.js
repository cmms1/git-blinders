function convertPhone(input) {
  var inputlength = input.length;
  input = input.toLowerCase();
  var phonenumber = "";
  for (i = 0; i < inputlength; i++) {
    var character = input.charAt(i);

    switch (character) {
      case "0":
        phonenumber += "0";
        break;
      case "1":
        phonenumber += "1";
        break;
      case "2":
        phonenumber += "2";
        break;
      case "3":
        phonenumber += "3";
        break;
      case "4":
        phonenumber += "4";
        break;
      case "5":
        phonenumber += "5";
        break;
      case "6":
        phonenumber += "6";
        break;
      case "7":
        phonenumber += "7";
        break;
      case "8":
        phonenumber += "8";
        break;
      case "9":
        phonenumber += "9";
        break;

      case "a":
      case "b":
      case "c":
        phonenumber += "2";
        break;
      case "d":
      case "e":
      case "f":
        phonenumber += "3";
        break;
      case "g":
      case "h":
      case "i":
        phonenumber += "4";
        break;
      case "j":
      case "k":
      case "l":
        phonenumber += "5";
        break;
      case "m":
      case "n":
      case "o":
        phonenumber += "6";
        break;
      case "p":
      case "q":
      case "r":
      case "s":
        phonenumber += "7";
        break;
      case "t":
      case "u":
      case "v":
        phonenumber += "8";
        break;
      case "w":
      case "x":
      case "y":
      case "z":
        phonenumber += "9";
        break;

      default:
        phonenumber += character;
    }
  }

  return phonenumber;
}

function getNumberInputData() {
  var inputVal = document.getElementById("number-input").value;
  var numberSpan = document.getElementById("number-span");

  var convertedNumber = convertPhone(inputVal);
  numberSpan.innerHTML = `This is converted number: ${convertedNumber}`;
}

function searchForgottenReport() {
  var inputReport = document.getElementById("report1-input").value;
  var inputAverageReport = document.getElementById("average-report-input")
    .value;
  var forgottenReportSpan = document.getElementById("forgotten-report-span");

  if (inputReport < 0 || inputReport > 100) {
    forgottenReportSpan.innerHTML = `Report 1: invalid report value!`;
    return;
  }

  if (inputAverageReport < 0 || inputAverageReport > 100) {
    forgottenReportSpan.innerHTML = `Average report: invalid average value!`;
    return;
  }

  var forgottenReport = inputAverageReport * 2 - inputReport;

  forgottenReportSpan.innerHTML = `This is your forgotten report: ${forgottenReport}`;
}
