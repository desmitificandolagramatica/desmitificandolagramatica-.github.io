function forceValues(){
	let inputs = document.getElementsByTagName('input')
    let textareas = document.getElementsByTagName('textarea')
    let spans = document.getElementsByTagName('span')

	for(let i =0;i<inputs.length;i++){
        inputs[i].setAttribute("value", inputs[i].value)
        if(inputs[i].checked)
            inputs[i].setAttribute("checked", inputs[i].checked)
	}

	for(let i =0;i<textareas.length;i++){
        textareas[i].innerHTML = textareas[i].value
    }

    for(let i =0;i<spans.length;i++){
       spans[i].setAttribute("style", spans[i].getAttribute("style"))
    }

}
function printData(){
	forceValues()
	let ww= window.open('', 'PRINT')
	ww.document.write('<html><head><title>' + document.title  + '</title>');
	ww.document.write(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="../../assets/css/main.css">`)
    ww.document.write(` <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">`)
    ww.document.write('</head><body >');
    ww.document.write(document.getElementById('data').innerHTML);
    ww.document.write(`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>`)
    ww.document.write('</body></html>');
    ww.document.close(); // necessary for IE >= 10

    ww.focus(); // necessary for IE >= 10

    ww.print();
    //ww.close();
}

function readImg(input, id) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
        	let d = document.getElementById(id)
        	d.setAttribute("src", e.target.result)
        	d.hidden = false
        };

        reader.readAsDataURL(input.files[0]);
    }
}