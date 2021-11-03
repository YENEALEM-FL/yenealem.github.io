function dataFilling(){
var name="Account type:" + document.getElementById("txtAccount").value + "  "+
	"deposit:" + document.getElementById("txtDeposit").value;
document.getElementById("txtAreaAccount").value = document.getElementById("txtAreaAccount").value +"\n" + name;
}
