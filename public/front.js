// $.ajax({
//     url: "/api/birds",
//     method: "get",
// }).then(res=>{
//     console.log(res)
//     res.forEach(obj => {
//         $(".blue-grey")
//         .append("<div>")
//         .addClass("col m3")
//         .append("<p>")
//         .text(obj.name + " and it can fly:" + obj.canFly )
        
//     });
// })



$(".test").on("click", function(event){
    if($(".filled-in").val() === "on"){
        $(".filled-in").val(true)
    }else{
        $(".filled-in").val(false)
    }
    console.log("click")
    const birdObj = {
        name: $("#bird_name").val(),
        canFly: $(".filled-in").val()

    }
    console.log(birdObj)
    $.ajax({
        url: "/api/birds",
        method: "POST",
        data: birdObj
    }).then(res=>{
        console.log(res)
        
    })
})