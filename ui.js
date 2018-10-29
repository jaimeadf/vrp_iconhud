// Credits: Marmota#2533
$(document).ready(function(){
    window.addEventListener('message', function(event) {
        var data = event.data
        $("#armor").css("width",data.armor + "%");
        $("#health").css("width",data.health + "%");
        $("#hunger").css("width",100 - data.hunger + "%");
        $("#thirst").css("width",100 - data.thirst + "%");
    });
});