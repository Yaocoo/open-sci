function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function post(URL, params) {  
    var temp = document.createElement("form");  
    temp.action = URL;  
    temp.method = "post";  
    temp.style.display = "none";  
    for (var p in params) {    
        var opt = document.createElement("textarea");    
        opt.name = p;    
        opt.value = params[p];     // alert(opt.name)
            
        temp.appendChild(opt);  
    }  
    document.body.appendChild(temp);  
    temp.submit();  
    return temp;
}