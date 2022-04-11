prediction1 = "";
prediction2 = "";
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function snapshot()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
});
}
console.log("ml5version: ",ml5.version);
Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HUVcBu6LL/model.json',modelloaded);
function modelloaded()
{
console.log("Model Is Loaded");
}
function check() 
{
img=document.getElementById("captured_image");
Classifier.classify(img,gotresults);
}
function gotresults(error,results) 
{
if(error)
{
console.error(error);
}
else 
{
console.log(results);
document.getElementById("result_emotion").innerHTML=results[0].label;
document.getElementById("result_emotion2").innerHTML=results[1].label;
prediction1=results[0].label;
prediction2=results[1].label;
if(results[0].label=="Amazing")
{
document.getElementById("result_emoji").innerHTML="&#128076;";
}
if(results[0].label=="Best")
{
document.getElementById("result_emoji").innerHTML="&#128077;";
}
if(results[0].label=="Victory")
{
document.getElementById("result_emoji").innerHTML="&#9996;";
}
}
}