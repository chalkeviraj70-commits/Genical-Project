$(function(){
    $("#lgi1").click(function(){
        // alert("hi")
        $(".navbar").toggle(500)
    })
})


$(function(){
    if(localStorage.getItem("isLoggedIn")==="true"){
        $("#insystem").hide()
        $("#outsystem").show()
    }
    else
    {
        $("#insystem").show()
        $("#outsystem").hide()
    }

})