var arr = [
	'band',
	'field',
	'field2',
	'gear',
	'glass',
	'glass2',
	'pour2'
];
var idx = Math.floor(Math.random() * arr.length);

$("div.background").addClass("photo-" + arr[idx]);