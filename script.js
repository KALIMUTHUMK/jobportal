

/*function fun()
{

  let a = document.getElementById("in1").value;
  let b = parseInt(document.getElementById("in2").value);

  if(a=="kali" && b == 1234)
  {
    
   window.open("http://127.0.0.1:5500/sign.html")
  }
  else
    {
      alert("wrong input");
    }
};*/



fun = () => {
 
  let a= document.getElementById("in1").value;
  let b = parseInt(document.getElementById("in2").value);

  if (a=="kali" && b == 1234) {


         window.location.href="file:///C:/dynamic1/index.html";
      }
      
      else {
          alert("invalid username & Password");
      }
  };