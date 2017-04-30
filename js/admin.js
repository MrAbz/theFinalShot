function showAdminLink() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function addImage() {
var pass = document.getElementById('pass').value;
  if(pass=="7"){
     $('<br><br>Image Name: &nbsp; <input type="text" name= "imageName" id="imageName">').appendTo('#myDIV');
     $('<br><br>Category: &nbsp; <input type="radio" name= "category" value="catNature" >Nature <input type="radio" name="category" value="catMaterial" >Materisalistic <input type="radio" name= "category" value="catQuotes" >Quotes<br>').appendTo('#myDIV');
     $('<br><br>Wallpaper Link: &nbsp; <input type="text" name= "wallpaper" id="wallpaper">').appendTo('#myDIV');
     $('<br><br>Display Link: &nbsp; <input type="text" name= "displayLink" id="displayLink">').appendTo('#myDIV');
     $('<br><br>Purchase Link: &nbsp; <input type="text" name= "purchase" id="purchase">').appendTo('#myDIV');
     $('<br><br><button id= "submit" onClick="submitImage()">Add Image</button>').appendTo('#myDIV');
  }
  document.getElementById('pass').value='';
}

function submitImage() {
  var count = $(".item").children().length;
  var currentCount = count/2;
  var imageName = document.getElementById('imageName').value;
  var category = $("input[name='category']:checked").val();
  var wallpaper = document.getElementById('wallpaper').value;
  var displayLink = document.getElementById('displayLink').value;
  var purchase = document.getElementById('purchase').value;
  var element = $(".item");
  element.innerHTML = "New Header";
  alert("done");
}
