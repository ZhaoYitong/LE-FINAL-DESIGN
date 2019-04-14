function keydown(e)
{
    var e = e||event;
    var currKey = e.keyCode||e.which||e.charCode;
    if(currKey == 13)
    {
        checkLogin();
    }
}
function checkLogin(){
    var username = $("input[name=username]").val();
    var password = $("input[name=password]").val();

    if ($.trim(username) == "" ||　$.trim(password) == "") {
        return false;
    }
    window.location.href = username == "admin" && password == 1818? "index.html":"login.html";
}
function validatePwd(str){   
    if(str.length!=0){    
        reg=/^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/;     
        if(!reg.test(str)){    
            return false;  
        } else {
            return true;
        }   
    }
    return false;    
}
$(document).ready(function(){

	var login = $('#loginform');
	var recover = $('#recoverform');
	var speed = 400;

    if($.browser.msie == true && $.browser.version.slice(0,3) < 10) {
        $('input[placeholder]').each(function(){ 
	        var input = $(this);
	        $(input).val(input.attr('placeholder'));
	        $(input).focus(function(){
	             if (input.val() == input.attr('placeholder')) {
	                 input.val('');
	             }
	        });
	        $(input).blur(function(){
	            if (input.val() == '' || input.val() == input.attr('placeholder')) {
	                input.val(input.attr('placeholder'));
	            }
	        });
	    });    
    }
});