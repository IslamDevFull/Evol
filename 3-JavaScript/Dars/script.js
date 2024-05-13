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
    $(".downs-5").hide();
    $(".drops-5").click(function(){
        $(".downs-5").slideToggle(1000);
    });
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
    $(".downV-1").hide();
    $(".dropV-1").click(function(){
        $(".downV-1").slideToggle(1000);
    });
    $(".downV-2").hide();
    $(".dropV-2").click(function(){
        $(".downV-2").slideToggle(1000);
    });
    $(".downV-3").hide();
    $(".dropV-3").click(function(){
        $(".downV-3").slideToggle(1000);
    });
// ///////////////////////////// Xususiyat \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
});
// ///////////////////////////// CodeMiror \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
// ///////////////////////////// 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editJsAlert = CodeMirror.fromTextArea(document.getElementById("editJsAlert"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeAlert = document.getElementById("iframeAlert").contentWindow.document;
function codeAlert(){
    let codeValue = editJsAlert.getValue();
    iframeAlert.write(`<script>` + codeValue + `</script>`);
    iframeAlert.close();
}
editJsAlert.setSize("100%","320");
// ///////////////////////////// 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editJsConfirm = CodeMirror.fromTextArea(document.getElementById("editJsConfirm"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeConfirm = document.getElementById("iframeConfirm").contentWindow.document;
function codeConfirm(){
    let codeValue = editJsConfirm.getValue();
    iframeConfirm.write(`<script>` + codeValue + `</script>`);
    iframeConfirm.close();
}
editJsConfirm.setSize("100%","320");
// ///////////////////////////// 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editJsPrompt = CodeMirror.fromTextArea(document.getElementById("editJsPrompt"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframePrompt = document.getElementById("iframePrompt").contentWindow.document;
function codePrompt(){
    let codeValue = editJsPrompt.getValue();
    iframePrompt.write(`<script>` + codeValue + `</script>`);
    iframePrompt.close();
}
editJsPrompt.setSize("100%","320");
// ///////////////////////////// 4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editJsPrint = CodeMirror.fromTextArea(document.getElementById("editJsPrint"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframePrint = document.getElementById("iframePrint").contentWindow.document;
function codePrint(){
    let codeValue = editJsPrint.getValue();
    iframePrint.write(`<script>` + codeValue + `</script>`);
    iframePrint.close();
}
editJsPrint.setSize("100%","320");
// ///////////////////////////// 5 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editJsWrite = CodeMirror.fromTextArea(document.getElementById("editJsWrite"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeWrite = document.getElementById("iframeWrite").contentWindow.document;
function codeWrite(){
    let codeValue = editJsWrite.getValue();
    iframeWrite.write(`<script>` + codeValue + `</script>`);
    iframeWrite.close();
}
editJsWrite.setSize("100%","320");
// ///////////////////////////// 6 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editJsWriteLn = CodeMirror.fromTextArea(document.getElementById("editJsWriteLn"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeWriteLn = document.getElementById("iframeWriteLn").contentWindow.document;
function codeWriteLn(){
    let codeValue = editJsWriteLn.getValue();
    iframeWriteLn.write(`<script>` + codeValue + `</script>`);
    iframeWriteLn.close();
}
editJsWriteLn.setSize("100%","320");
// ///////////////////////////// 7 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editHtmlInner = CodeMirror.fromTextArea(document.getElementById("editHtmlInner"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var editJsInner = CodeMirror.fromTextArea(document.getElementById("editJsInner"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeInner = document.getElementById("iframeInner").contentWindow.document;
function codeInner(){
    let codeHtmlValue = editHtmlInner.getValue();
    let codeJsValue = editJsInner.getValue();
    iframeInner.write(codeHtmlValue);
    iframeInner.write(`<script>` + codeJsValue + `</script>`);
    iframeInner.close();
}
editHtmlInner.setSize("100%","320");
editJsInner.setSize("100%","320");
// ///////////////////////////// 8 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editHtmlText = CodeMirror.fromTextArea(document.getElementById("editHtmlText"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var editJsText = CodeMirror.fromTextArea(document.getElementById("editJsText"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeText = document.getElementById("iframeText").contentWindow.document;
function codeText(){
    let codeHtmlValue = editHtmlText.getValue();
    let codeJsValue = editJsText.getValue();
    iframeText.write(codeHtmlValue);
    iframeText.write(`<script>` + codeJsValue + `</script>`);
    iframeText.close();
}
editHtmlText.setSize("100%","320");
editJsText.setSize("100%","320");
// ///////////////////////////// 9 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editHtmlId = CodeMirror.fromTextArea(document.getElementById("editHtmlId"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var editJsId = CodeMirror.fromTextArea(document.getElementById("editJsId"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeId = document.getElementById("iframeId").contentWindow.document;
function codeId(){
    let codeHtmlValue = editHtmlId.getValue();
    let codeJsValue = editJsId.getValue();
    iframeId.write(codeHtmlValue);
    iframeId.write(`<script>` + codeJsValue + `</script>`);
    iframeId.close();
}
editHtmlId.setSize("100%","320");
editJsId.setSize("100%","320");
// ///////////////////////////// 10 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editHtmlSrc = CodeMirror.fromTextArea(document.getElementById("editHtmlSrc"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var editJsSrc = CodeMirror.fromTextArea(document.getElementById("editJsSrc"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeSrc = document.getElementById("iframeSrc").contentWindow.document;
function codeSrc(){
    let codeHtmlValue = editHtmlSrc.getValue();
    let codeJsValue = editJsSrc.getValue();
    iframeSrc.write(codeHtmlValue);
    iframeSrc.write(`<script>` + codeJsValue + `</script>`);
    iframeSrc.close();
}
editHtmlSrc.setSize("100%","320");
editJsSrc.setSize("100%","320");
// ///////////////////////////// 11 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editHtmlStyle = CodeMirror.fromTextArea(document.getElementById("editHtmlStyle"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var editJsStyle = CodeMirror.fromTextArea(document.getElementById("editJsStyle"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeStyle = document.getElementById("iframeStyle").contentWindow.document;
function codeStyle(){
    let codeHtmlValue = editHtmlStyle.getValue();
    let codeJsValue = editJsStyle.getValue();
    iframeStyle.write(codeHtmlValue);
    iframeStyle.write(`<script>` + codeJsValue + `</script>`);
    iframeStyle.close();
}
editHtmlStyle.setSize("100%","320");
editJsStyle.setSize("100%","320");
// ///////////////////////////// 12 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editHtmlAdd = CodeMirror.fromTextArea(document.getElementById("editHtmlAdd"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var editCssAdd = CodeMirror.fromTextArea(document.getElementById("editCssAdd"),{
    mode: "css",
    lineNumbers: true,
    theme: "darcula"
});
var editJsAdd = CodeMirror.fromTextArea(document.getElementById("editJsAdd"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeAdd = document.getElementById("iframeAdd").contentWindow.document;
function codeAdd(){
    let codeHtmlValue = editHtmlAdd.getValue();
    let codeCssValue = editCssAdd.getValue();
    let codeJsValue = editJsAdd.getValue();
    iframeAdd.write(codeHtmlValue);
    iframeAdd.write(`<style>` + codeCssValue + `</style>`);
    iframeAdd.write(`<script>` + codeJsValue + `</script>`);
    iframeAdd.close();
}
editHtmlAdd.setSize("100%","320");
editCssAdd.setSize("100%","320");
editJsAdd.setSize("100%","320");
// ///////////////////////////// 13 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editHtmlRemove = CodeMirror.fromTextArea(document.getElementById("editHtmlRemove"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var editCssRemove = CodeMirror.fromTextArea(document.getElementById("editCssRemove"),{
    mode: "css",
    lineNumbers: true,
    theme: "darcula"
});
var editJsRemove = CodeMirror.fromTextArea(document.getElementById("editJsRemove"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeRemove = document.getElementById("iframeRemove").contentWindow.document;
function codeRemove(){
    let codeHtmlValue = editHtmlRemove.getValue();
    let codeCssValue = editCssRemove.getValue();
    let codeJsValue = editJsRemove.getValue();
    iframeRemove.write(codeHtmlValue);
    iframeRemove.write(`<style>` + codeCssValue + `</style>`);
    iframeRemove.write(`<script>` + codeJsValue + `</script>`);
    iframeRemove.close();
}
editHtmlRemove.setSize("100%","320");
editCssRemove.setSize("100%","320");
editJsRemove.setSize("100%","320");
// ///////////////////////////// 14 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\
var editHtmlReplace = CodeMirror.fromTextArea(document.getElementById("editHtmlReplace"),{
    mode: "xml",
    lineNumbers: true,
    theme: "panda-syntax"
});
var editCssReplace = CodeMirror.fromTextArea(document.getElementById("editCssReplace"),{
    mode: "css",
    lineNumbers: true,
    theme: "darcula"
});
var editJsReplace = CodeMirror.fromTextArea(document.getElementById("editJsReplace"),{
    mode: "javascript",
    lineNumbers: true,
    theme: "panda-syntax"
});
var iframeReplace = document.getElementById("iframeReplace").contentWindow.document;
function codeReplace(){
    let codeHtmlValue = editHtmlReplace.getValue();
    let codeCssValue = editCssReplace.getValue();
    let codeJsValue = editJsReplace.getValue();
    iframeReplace.write(codeHtmlValue);
    iframeReplace.write(`<style>` + codeCssValue + `</style>`);
    iframeReplace.write(`<script>` + codeJsValue + `</script>`);
    iframeReplace.close();
}
editHtmlReplace.setSize("100%","320");
editCssReplace.setSize("100%","320");
editJsReplace.setSize("100%","320");