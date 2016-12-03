var arr = ['band','field','field2','glass','glass2','gear','ice','pour','pour2'];
var idx = Math.floor(Math.random() * arr.length);

$("body").addClass("photo-" + arr[idx]);