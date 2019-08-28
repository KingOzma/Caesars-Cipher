function rot13(str){
	var result = "";
	for (var i=0; i<str.length; i++){
		var ascii = str[i].charCodeAt();
		if (ascii >= 65 && ascii <= 77){
			result += String.fromCharCode(ascii + 13);
		} else if (ascii >= 78 && ascii <= 90){
			result += String.fromCharCode(ascii - 13);
		} else{
		  result += str[i];
		}
	}
	return result;
}

rot13("SERR PBQR PNZC")