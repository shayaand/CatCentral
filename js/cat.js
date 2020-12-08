function gettingKitty() {
var key = 'e084d131-2757-4e92-9a5b-d0e52c2ec4d0';
var query = "https://api.thecatapi.com/v1/images/search";
var img = document.querySelector("#randomcat").src;

$.getJSON(query,function(json){
  console.log(JSON.stringify(json));
  var img = json[0].url;
  document.querySelector("#randomcat").src = img;
});
}