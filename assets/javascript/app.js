var correct = 0;
var incorrect = 0;
var items = ["infinityedge.png", "deathcap.png", "sunfire.png", "frozenheart.png", "frozenfist.png", "triforce.png", "frozenmallet.png"];
var answers = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];
var optionA = ["Excalibur", "Rabadon's Deathcap", "Veil of Discord", "Frozen Staff", "Thousand Years of Pain", "Delta Sword", "Frozen Mallet"];
var optionB = ["Yellow Sword Thingy", "Wooglet's Witchcap", "Invisibility Cloak", "Frozen Heart", "Iceborn Gauntlet", "Guardian Angel", "Mjolnir"];
var optionC = ["Infinity Edge", "Sorting Hat", "Sunfire Cape", "Rylai's Crystal Scepter", "Wolverine Fist", "Ethereal Blade", "Guardian's Hammer"];
var optionD = ["Zeal", "Hood of Defiance", "Phoenix Armor", "Glacial Shroud", "Frozen Fist", "Trinity Force", "Hammer of Justice"];
var unanswered = items.length;
var userAnswer = [];
var check = ["C", "A", "C", "B", "B", "D", "A"];

$("#done").hide();

$("#start").on("click", function() {
  $("#start").hide();
  $("#done").show();
  $("#timer").html("<h2>Time Remaining: 30 seconds</h2>")
  var number = 30;
  var intervalId;

  function run() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#timer").html("<h2>Time Remaining: " + number + " seconds</h2>");
    if (number === 0) {
      getAnswers();
      getScore();
      stop();
      result();
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  $("#done").click(function() {
    getAnswers();
    getScore();
    stop();
    result();
  });

  run();
  printForm();
});

function getScore() {
  for (var i = 0; i < check.length; i++) {
    if (userAnswer[i] != null) {
      if (userAnswer[i] === check[i]) {
        correct++;
        unanswered--;
      }
      else {
        incorrect++;
        unanswered--;
      }
    }
  }
}

function getAnswers() {
  for (var i = 1; i <= items.length; i++) {
    userAnswer.push($("input[name=q" + i + "]:checked", ".questions").val());
  }
}

function result() {
  $("#timer").empty();
  $(".questions").empty();
  $("#done").hide();
  $("#main").append("<h2><b>All Done!</b></h2><br>");
  $("#main").append("<p id='right'>Correct Answers: " + correct + "</p>");
  $("#main").append("<p id='wrong'>Incorrect Answers: " + incorrect + "</p>");
  $("#main").append("<p id='blank'>Unanswered: " + unanswered + "</p>");
}

function printForm() {
  for (var i = 0; i < items.length; i++) {
    var image = $("<img>");
    image.attr("src", "assets/images/" + items[i]);
    var choiceA = $("<label>");
    var inputA = $("<input>");
    inputA.attr("type", "radio");
    inputA.attr("name", answers[i]);
    inputA.attr("value", "A");
    var choiceB = $("<label>");
    var inputB = $("<input>");
    inputB.attr("type", "radio");
    inputB.attr("name", answers[i]);
    inputB.attr("value", "B");
    var choiceC = $("<label>");
    var inputC = $("<input>");
    inputC.attr("type", "radio");
    inputC.attr("name", answers[i]);
    inputC.attr("value", "C");
    var choiceD = $("<label>");
    var inputD = $("<input>");
    inputD.attr("type", "radio");
    inputD.attr("name", answers[i]);
    inputD.attr("value", "D");
    choiceA.append(inputA);
    choiceB.append(inputB);
    choiceC.append(inputC);
    choiceD.append(inputD);
    choiceA.append(optionA[i]);
    choiceB.append(optionB[i]);
    choiceC.append(optionC[i]);
    choiceD.append(optionD[i]);
    $(".questions").append(image);
    $(".questions").append("<br><br>");
    $(".questions").append(choiceA);
    $(".questions").append(choiceB);
    $(".questions").append(choiceC);
    $(".questions").append(choiceD);
    $(".questions").append("<br><br>"); 
  }
}