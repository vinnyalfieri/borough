$(document).ready(function(){    
  for (var i = 0; i < data.length; i++) {
    var borough = data[i].borough;
    var boroughName = data[i].borough.name;
    var mappings = data[i].mappings;
    var formattedName = formatBoroughName(borough)
    var list = prepareList(mappings, boroughName);
       
    var toDom = "<div id='" + borough.id + "' class='borough'>" + formattedName + list + "</div>";
    appendAreaA(toDom);
    appendAreaB(formattedName);
  };

  var listen = new Listener();
});


function formatBoroughName(borough){
  var returnData = "<h1 " + "id='" + borough.id + "'>" + borough.name + "</h1>";
  return returnData;
};

function appendAreaA(newData){
  $(".area-a").append(newData);
};

function appendAreaB(newData){
  $(".area-b").append(newData);
};

function prepareNeighborhoodList(neighborhood, boroughName){
  var returnString = "<ul>";
  for (var n = 0; n < neighborhood.length; n++) {
    if (neighborhood[n].name === boroughName){
    } else {
    returnString += "<li>" + neighborhood[n].name + "</li>";
    };
  };
  returnString += "</ul>";
  return returnString;
};

function prepareList(mappings, boroughName){
  var returnString = "<ul>";
  for (var p = 0; p < mappings.length; p++) {
    var mappingName = mappings[p].macro.name;
    if (mappingName != boroughName){
    returnString += "<li>" + mappingName + "</li>";
    }
    var neighborhoodsList = prepareNeighborhoodList(mappings[p].neighborhoods, boroughName);
    returnString += neighborhoodsList;
  };
  returnString += "</ul>";
  return returnString;
};


function Listener(){
  $('.area-a > .borough').click(function(){
    $('.area-b').children("h1").css("background-color","white");
    var id = this.id;
    $('.area-b').children("#" + id).css("background-color","yellow");
  });

};