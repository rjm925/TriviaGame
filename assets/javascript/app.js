var correct = 0;
var incorrect = 0;
var questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];
var answers = ["q1", "q2", "q3", "q4", "q5"];
var optionA = ["Answer A1", "Answer A2", "Answer A3", "Answer A4", "Answer A5"];
var optionB = ["Answer B1", "Answer B2", "Answer B3", "Answer B4", "Answer B5"];
var optionC = ["Answer C1", "Answer C2", "Answer C3", "Answer C4", "Answer C5"];
var unanswered = questions.length;
var userAnswer = [];
var check = ["A", "B", "C", "B", "A"];

$("#done").hide();

$("#start").on("click", function() {
  $("#start").hide();
  $("#done").show();
  $("#timer").html("<h2>Time Remaining: 30 seconds</h2>")
  var number = 15;
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
  userAnswer.push($('input[name=q1]:checked', '.questions').val());
  userAnswer.push($('input[name=q2]:checked', '.questions').val());
  userAnswer.push($('input[name=q3]:checked', '.questions').val());
  userAnswer.push($('input[name=q4]:checked', '.questions').val());
  userAnswer.push($('input[name=q5]:checked', '.questions').val());
  console.log(userAnswer);
}

function result() {
  $("#timer").empty();
  $(".questions").empty();
  $("#done").hide();
  $("#main").append("<h3>All Done!</h3>");
  $("#main").append("<br>Correct Answers: " + correct);
  $("#main").append("<br>Incorrect Answers: " + incorrect);
  $("#main").append("<br>Unanswered: " + unanswered);
}

function printForm() {
  for (var i = 0; i < questions.length; i++) {
    var ask = $("<h3>");
    ask.append(questions[i]);
    ask.append("<br>");
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
    choiceA.append(inputA);
    choiceB.append(inputB);
    choiceC.append(inputC);
    choiceA.append(optionA[i]);
    choiceB.append(optionB[i]);
    choiceC.append(optionC[i]);
    $(".questions").append(ask);
    $(".questions").append(choiceA);
    $(".questions").append(choiceB);
    $(".questions").append(choiceC);  
  }
}