function showDialog(title,msg) {
	$("#myModal").find(".modal-header h3").html(title);
    $("#myModal").attr('class','modal');
    $("#myModal").find(".modal-body p").html(msg);
    setTimeout(function(){
        $("#myModal").attr('class','modal hide');
    },3000);
}

function keydown(e)
{
    e = e||event;
    let currKey = e.keyCode||e.which||e.charCode;
    if(currKey == 13)
    {
        checkLogin();
    }
}

function checkLogin(){
    let username = $("input[name=username]").val();
    let password = $("input[name=password]").val();
    if ($.trim(username) == "" ||　$.trim(password) == "") {
        return false;
    }

    $.ajax({
        url:'/login/',
        data: {
            username : username,
            password : password
        },
        type:'post',
        success:function(data) {
        },
        error : function() {}
    });
}


