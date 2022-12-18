function myFunction(){
  var n = document.getElementById("noun").value;
  var v = document.getElementById("verb").value;
  var a = document.getElementById("adjective").value;
  var ad = document.getElementById("adverb").value;
  
document.getElementById("phrase").innerHTML = "Do you " + v + "your" +
    a + n + ad + "? That's hilarious!";
  

}
  