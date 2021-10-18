//set time every second
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {

        var todaysDate = moment();
        $("#headerDate").text(todaysDate.format("dddd, MMMM Do YYYY, h:mm:ss a"));
      
    }, 1000);
}
setTime();
console.log(moment().format('LTS'));

// setting up the grid 
var j = 1;
var startTime = 9;
for (var i = 3; i < 30; i++){
    var idNum = i - 2;
    var id2String = JSON.parse(idNum);
    console.log(id2String)
    var appended2 = $(".row");
    var gridPopul8r = $("<div>");
    gridPopul8r.attr("Class", "col ");
    gridPopul8r.attr("id", "Cell-" + id2String);
    appended2.append(gridPopul8r);

    

    //setting up the first column
    
    var noonOrNah = "AM";
    if(i%3 == 0){

      
        if(j >= 4){
            noonOrNah = "PM";
        };
        if(j === 5){
           startTime = "1";
        };
        j++;

        var tmCell = $("<h3>");
        tmCell.attr("id", id2String + "Cell");
        tmCell.attr("Class", "time-Block hour");
        tmCell.text(startTime + ":00" + " " + noonOrNah);
        gridPopul8r.append(tmCell);
        startTime++;
        gridPopul8r.attr("Class", "col-2");
        gridPopul8r.css("display", "flex");
        gridPopul8r.css("flex-direction", "column");
        gridPopul8r.css("justify-content", "center");
        gridPopul8r.css("text-align", "center");
        
        
       console.log('mod0');

    };

    //setting up the second column 
    if(i%3 == 1){

        
        var tasks = $("<input>");
        tasks.attr("id",  id2String + "Cell");
        tasks.attr("type", "text");
        tasks.attr("Class", "description");
        tasks.css("background-color", "yellow");
        tasks.css("min-width", "100%");

        gridPopul8r.append(tasks);
        gridPopul8r.attr("Class", "col-8");
        gridPopul8r.css("display", "flex");
        gridPopul8r.css("flex-direction", "column");
        gridPopul8r.css("justify-content", "center");
        
        console.log('mod1');

    };

    //setting up the third column
    if(i%3 == 2){
        

        var save = $("<button>");
        save.attr("id", id2String + "Cell");
        save.attr("Class", "saveBtn");
        save.text("       SAVE         ");
        gridPopul8r.append(save);
        gridPopul8r.attr("Class", "col-2 ");
        gridPopul8r.css("display", "flex");
        gridPopul8r.css("flex-direction", "column");
        gridPopul8r.css("justify-content", "center");

        console.log('mod2' + i);

    };

}
var cellIds = ['2','5','8','11','14','17','20','23','26'];
var timez = ['9','10','11','12','13','14','15','16','17'];

for(var i = 0; i < 9; i++){
   
    if (timez == moment().hour()){
        var highLightCell = "#Cell-" + cellIds[i];
        console.log(highLightCell);
        $(highLightCell).css('background-color', "#ff6961");
        for(var j = 9-i; j <= 9; j++){
            var iPlus = 1;
            var iMinus = i;
            var highLightCell = "#Cell-" + cellIds[i + iPlus];
            $(highLightCell).css('background-color', "#77dd77");
            iplus++;
            var highLightCell = "#Cell-" + cellIds[i + iMinus];
            $(highLightCell).css('background-color', "gray");
            iMinus--;
        }
    }

    if (moment().hour() > 17){
        $('.description').css("background-color", "gray");
    }

    if (moment().hour() < 5){
        $('.description').css("background-color", "#77dd77");
    }

}

var saveButton = document.querySelectorAll(".saveBtn");

saveButton.forEach(saveButton => {

    saveButton.addEventListner('click', (e)=>{

        console.log('someone hit me');

    });

});

localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
renderMessage();
