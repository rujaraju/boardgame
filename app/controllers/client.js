var relX
var relY
var toBeMoved;
var highestZ = 0
 
function checkTouchDevice() {
   return 'ontouchstart' in document.documentElement;
}

var isTouchScreen = checkTouchDevice()

$("#board").mousemove(function(event){ 
            event.preventDefault()
            relX = Math.round(event.pageX - $(this).offset().left);
            relY = Math.round(event.pageY - $(this).offset().top);
            $("#"+toBeMoved).css("top", relY-7 +"px")
            $("#"+toBeMoved).css("left", relX-7 +"px")
            $("#"+toBeMoved + "overlay").css("top", relY-7 +"px")
            $("#"+toBeMoved + "overlay").css("left", relX-7 +"px")

        });

if (isTouchScreen){
    $("#board").on('touchmove', function(event){ 
            event.preventDefault()
            alert("anything")
            relX = Math.round(event.pageX - $(this).offset().left);
            relY = Math.round(event.pageY - $(this).offset().top);
            $("#"+toBeMoved).css("top", relY-7 +"px")
            $("#"+toBeMoved).css("left", relX-7 +"px")
            $("#"+toBeMoved + "overlay").css("top", relY-7 +"px")
            $("#"+toBeMoved + "overlay").css("left", relX-7 +"px")

        });
}
        
function move(id){
            console.log(id)
            if (id.length < 3){return}
            if (toBeMoved == undefined){
                 toBeMoved = id
                 highestZ++
                 $("#" + id).css("z-index", highestZ)
                 $("#" + id + "overlay").css("z-index", highestZ)
            } else {
                toBeMoved = undefined
            }
}

        function moveIt(){
            move(event.target.id.split("overl")[0])
}



function kasta(){
    console.log("working")
    var values = [1,2,3,4,5,6]
    var value
    var valueArr = []
    for (var i = 0; i < 20; i++){
    value = values[Math.floor(Math.random()*6)]
    valueArr.push(value)
    var echo = i+0
    setTimeout(function(){$("#thedice").attr("src", "/public/img/dice" + valueArr[0] + ".jpg"); valueArr.shift()}, i*80)
  
    }
    console.log(valueArr)
}

        
//});