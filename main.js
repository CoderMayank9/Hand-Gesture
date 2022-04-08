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
function speak()
{
var synth=window.speechSynthesis;
speakdata1="The first prediction is"+ prediction1;
speakdata2="And the second prediction is"+ prediction2;
var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
synth.speak(utterThis);
}
