function populate () {

    if(quiz.isEnded ()) {
        //showScore();

    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getElementById().text;

    }
}

var question = [
    new Questions ("Which color flag during an F1 race indicates that normal racing conditions are being applied?", ["White", "Yellow","Yellow and red striped"], "Green"),
    new Questions ("What is the highest speed of an F1 car ever recorded?", ["400 km/h (248.5 m/h)","423.3 km/h (263.02 m/h)", "351.6 km/h (218.47m/h)"], "372.6 km/h (231.5m/h)"),
    new Questions ("How much weight does a car tire lose in one Formula 1 race?", ["250g (0.55 lb)", "1kg (2.2 lb)", "2kg (4.4lb)"], "500g (1.1 lb)"),
    new Questions ("How many points are earned by the driver who wins a Formula 1 race?", ["18", "22, 20"], "25"),
    new Questions ("Which color flag during the F1 race indicates a slippery track?", ["Black", "Orange", "White"], "Yellow and red striped"),
    new Questions ("How many separate components is a Formula 1 racing car made of?", ["40,000", "3,500", "200,00"], "80,000"),
    new Questions ("What is the maximum time taken in a modern pit stop with no errors?", ["10 sec", "20 sec", "30 sec"], "3 sec"),
    new Questions ("Who is the oldest racer to have won the F1 race?", ["Alain Prost", "Lewis Hamilton", "Jim Clark"], "Juan Fangio"),
    new Questions ("What is the average water loss from the body of a driver in one race?", ["4 liters (1.05 gallons)", "500 ml (0.13 gallons)", "2 liters (0.52 gallons)"], "3 liters (0.79 gallons)")
];


var quiz = new Quiz (questions);

populate();
