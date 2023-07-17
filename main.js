var number=prompt("Enter the fibonacci series number");
var a=0;
var b=1;
var fibnoacciValue;
document.write("The fibnoacciseries number of"+number+"<br>");
document.write(a+"<br>");
document.write(b+"<br>");
for(var i=0;i<=number;i++){
	fibnoacciValue=a+b;
	document.write(fibnoacciValue+"<br>");
	console.log(fibnoacciValue)
	a=b;
	b=fibnoacciValue;
}