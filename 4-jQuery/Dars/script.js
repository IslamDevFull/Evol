////////////////////////////////////////////////////Test uchun joy\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// var typed = new Typed(".typing", {
//     strings: ["margin: <code class='number'>50px</code>", "margin: 150px", "margin: 250px",],
//     typeSpeed: 100,
//     backSpeed: 60,
//     backDelay: 5000,
//     loop: true
    // fadeOut: true,
    // startDelay: 5000,
    // smartBackspace: true,
    // cursorChar: '_',
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
    $(".down-1").hide();
    $(".drop-1").click(function(){
        $(".down-1").slideToggle(1000);
    });
    $(".down-2").hide();
    $(".drop-2").click(function(){
        $(".down-2").slideToggle(1000);
    });
    $(".down-3").hide();
    $(".drop-3").click(function(){
        $(".down-3").slideToggle(1000);
    });
    $(".down-4").hide();
    $(".drop-4").click(function(){
        $(".down-4").slideToggle(1000);
    });
});
// ///////////////////////////// CodeMiror \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
// /////////////////////////////// 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var HTMLId = CodeMirror.fromTextArea(document.getElementById("HTMLId"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var jQueryId = CodeMirror.fromTextArea(document.getElementById("jQueryId"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeId = document.getElementById("iframeId").contentWindow.document;
function codeId(){
    let codeHTML = HTMLId.getValue();
    let codeJquery = jQueryId.getValue();
    iframeId.write(codeHTML);
    iframeId.write(`<script>` + codeJquery + `</script>`);
    iframeId.close();
}
HTMLId.setSize("100%","250");
jQueryId.setSize("100%","250");
// /////////////////////////////// 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var HTMLClass = CodeMirror.fromTextArea(document.getElementById("HTMLClass"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var jQueryClass = CodeMirror.fromTextArea(document.getElementById("jQueryClass"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeClass = document.getElementById("iframeClass").contentWindow.document;
function codeClass(){
    let codeHTML = HTMLClass.getValue();
    let codeJquery = jQueryClass.getValue();
    iframeClass.write(codeHTML);
    iframeClass.write(`<script>` + codeJquery + `</script>`);
    iframeClass.close();
}
HTMLClass.setSize("100%","250");
jQueryClass.setSize("100%","250");
// /////////////////////////////// 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var HTMLElmt = CodeMirror.fromTextArea(document.getElementById("HTMLElmt"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var jQueryElmt = CodeMirror.fromTextArea(document.getElementById("jQueryElmt"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeElmt = document.getElementById("iframeElmt").contentWindow.document;
function codeElmt(){
    let codeHTML = HTMLElmt.getValue();
    let codeJquery = jQueryElmt.getValue();
    iframeElmt.write(codeHTML);
    iframeElmt.write(`<script>` + codeJquery + `</script>`);
    iframeElmt.close();
}
HTMLElmt.setSize("100%","250");
jQueryElmt.setSize("100%","250");
// /////////////////////////////// 4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var HTMLMulti = CodeMirror.fromTextArea(document.getElementById("HTMLMulti"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var jQueryMulti = CodeMirror.fromTextArea(document.getElementById("jQueryMulti"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeMulti = document.getElementById("iframeMulti").contentWindow.document;
function codeMulti(){
    let codeHTML = HTMLMulti.getValue();
    let codeJquery = jQueryMulti.getValue();
    iframeMulti.write(codeHTML);
    iframeMulti.write(`<script>` + codeJquery + `</script>`);
    iframeMulti.close();
}
HTMLMulti.setSize("100%","250");
jQueryMulti.setSize("100%","250");