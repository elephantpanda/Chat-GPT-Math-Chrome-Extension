function removeTags(s){
    var div = document.createElement("div");
    div.innerHTML = s;
    return div.innerText; 
}

function product(a,b){
    return a*b;
}
function sum(a,b){
    return a+b;
}
function difference(a,b){
    return a-b;
}
function quotient(a,b){
    return a/b;
}



function GO(){
    var array = [];

    var elements = document.body.getElementsByTagName("*");

    for(var i = 0; i < elements.length; i++) {
        var current = elements[i];
        if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
            // Check the element has no children && that it is not empty
            array.push(current);
        }
    } 
    //array.push(document.body);

    for(i=0;i<array.length;i++){
        if(array[i].tagName!="textarea"){
            var text = array[i].textContent;//.replaceAll('\n',' '); //<br>
            
            scripts = text.match("\\[gptscript\\]((.|\n)*?)\\[/gptscript\\]");
            if(scripts){
                //alert(eval("function ABC(){"+scripts[1]+"};ABC()"));
                try{
                   var scriptText = removeTags(scripts[1].replace("\n"," "));
                   console.log("SCRIPTTEXT="+scriptText);
                   var result = eval("function ABC(){"+scriptText+"};ABC()");
                   array[i].innerHTML = text.replace("\n","<br>").replace(scripts[0], "<b>"+result+"</b>");
                }catch(e){
                    array[i].innerHTML = text.replace("\n","<br>").replace(scripts[0],"<font color=red>[script-error]"+scripts[1]+"[/script-error]</font><br><font color=purple><b>"+e+"</b></font>\n");
                    //textarea.innerText = "The script generated an error: "+e+"\n Please try again.";
                }

                console.log(scripts)
            }
        }
    }
}
GO();



setInterval(GO,3000);
