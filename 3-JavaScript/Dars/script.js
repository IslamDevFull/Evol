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
    // $(".down-1").hide();
    // $(".drop-1").click(function(){
    //     $(".down-1").slideToggle(1000);
    // });
    // $(".down-2").hide();
    // $(".drop-2").click(function(){
    //     $(".down-2").slideToggle(1000);
    // });
// ///////////////////////////// Xususiyat \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
    $(".downs-1").hide();
    $(".drops-1").click(function(){
        $(".downs-1").slideToggle(1000);
    });
    $(".downs-2").hide();
    $(".drops-2").click(function(){
        $(".downs-2").slideToggle(1000);
    });
    $(".downs-3").hide();
    $(".drops-3").click(function(){
        $(".downs-3").slideToggle(1000);
    });
    $(".downs-4").hide();
    $(".drops-4").click(function(){
        $(".downs-4").slideToggle(1000);
    });
    // $(".downs-5").hide();
    // $(".drops-5").click(function(){
    //     $(".downs-5").slideToggle(1000);
    // });
    $(".downs-6").hide();
    $(".drops-6").click(function(){
        $(".downs-6").slideToggle(1000);
    });
    $(".downs-7").hide();
    $(".drops-7").click(function(){
        $(".downs-7").slideToggle(1000);
    });
    $(".downs-8").hide();
    $(".drops-8").click(function(){
        $(".downs-8").slideToggle(1000);
    });
    $(".downs-9").hide();
    $(".drops-9").click(function(){
        $(".downs-9").slideToggle(1000);
    });
    $(".downs-10").hide();
    $(".drops-10").click(function(){
        $(".downs-10").slideToggle(1000);
    });
    $(".downs-11").hide();
    $(".drops-11").click(function(){
        $(".downs-11").slideToggle(1000);
    });
    $(".downs-12").hide();
    $(".drops-12").click(function(){
        $(".downs-12").slideToggle(1000);
    });
    $(".downs-13").hide();
    $(".drops-13").click(function(){
        $(".downs-13").slideToggle(1000);
    });
    $(".downs-14").hide();
    $(".drops-14").click(function(){
        $(".downs-14").slideToggle(1000);
    });
    $(".downs-15").hide();
    $(".drops-15").click(function(){
        $(".downs-15").slideToggle(1000);
    });
    $(".downs-16").hide();
    $(".drops-16").click(function(){
        $(".downs-16").slideToggle(1000);
    });
    $(".downV-1").hide();
    $(".dropV-1").click(function(){
        $(".downV-1").slideToggle(1000);
    });
    $(".downV-2").hide();
    $(".dropV-2").click(function(){
        $(".downV-2").slideToggle(1000);
    });
// ///////////////////////////// Xususiyat \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
});
// ///////////////////////////// CodeMiror \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
// ///////////////////////////// 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editAlert = CodeMirror.fromTextArea(document.getElementById("editAlert"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeAlert = document.getElementById("iframeAlert").contentWindow.document;
function codeAlert(){
    let codeValue = editAlert.getValue();
    iframeAlert.write(`<script>` + codeValue + `</script>`);
    iframeAlert.close();
}
editAlert.setSize("100%","320");
// ///////////////////////////// 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editConfirm = CodeMirror.fromTextArea(document.getElementById("editConfirm"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeConfirm = document.getElementById("iframeConfirm").contentWindow.document;
function codeConfirm(){
    let codeValue = editConfirm.getValue();
    iframeConfirm.write(`<script>` + codeValue + `</script>`);
    iframeConfirm.close();
}
editConfirm.setSize("100%","320");
// ///////////////////////////// 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editPrompt = CodeMirror.fromTextArea(document.getElementById("editPrompt"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframePrompt = document.getElementById("iframePrompt").contentWindow.document;
function codePrompt(){
    let codeValue = editPrompt.getValue();
    iframePrompt.write(`<script>` + codeValue + `</script>`);
    iframePrompt.close();
}
editPrompt.setSize("100%","320");
// ///////////////////////////// 4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editPrint = CodeMirror.fromTextArea(document.getElementById("editPrint"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframePrint = document.getElementById("iframePrint").contentWindow.document;
function codePrint(){
    let codeValue = editPrint.getValue();
    iframePrint.write(`<script>` + codeValue + `</script>`);
    iframePrint.close();
}
editPrint.setSize("100%","320");
// ///////////////////////////// 5 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editWrite = CodeMirror.fromTextArea(document.getElementById("editWrite"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeWrite = document.getElementById("iframeWrite").contentWindow.document;
function codeWrite(){
    let codeValue = editWrite.getValue();
    iframeWrite.write(`<script>` + codeValue + `</script>`);
    iframeWrite.close();
}
editWrite.setSize("100%","320");