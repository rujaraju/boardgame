var relX
var relY
var toBeMoved;
var highestZ = 0

function is_touch_enabled() { 
    return ( 'ontouchstart' in window ) ||  
           ( navigator.maxTouchPoints > 0 ) ||  
           ( navigator.msMaxTouchPoints > 0 ); 
}

function checkTouchDevice() {
   return 'ontouchstart' in document.documentElement;
}

alert(is_touch_enabled())
alert(checkTouchDevice())

$("#board").mousemove(function(event){            
            relX = Math.round(event.pageX - $(this).offset().left);
            relY = Math.round(event.pageY - $(this).offset().top);
            var relBoxCoords = "(" + relX + "," + relY + ")";
            //$("#redpiece").attr("top", relY +"px")
            $("#"+toBeMoved).css("top", relY-7 +"px")
            $("#"+toBeMoved).css("left", relX-7 +"px")
            $("#"+toBeMoved + "overlay").css("top", relY-7 +"px")
            $("#"+toBeMoved + "overlay").css("left", relX-7 +"px")
            //console.log(relBoxCoords);
            //console.log($("#redpiece").attr("top"))
        });
        
        function test(){
            test3(event.target.id)
}

        function test3(id){
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

        function test2(){
            test3(event.target.parentElement.id)
}

        function test4(){
            test3(event.target.id.split("overl")[0])
}

function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
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