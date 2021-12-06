prediction="";

Webcam.set({
  width:350,
  height:300,
  image_format:'png',
  png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera")

  function take_snapshot(){
      
    l='<label>Snapshot - </label>';
    result='<div id="result"></div><br><br>';
    button=' <button class="btn btn-success" onclick="check()">Predict Emotion</button>'
    document.getElementById("div_result").innerHTML=l+result+button;

    

    Webcam.snap(function(data_uri){
      document.getElementById("div_result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OHfLoVvc4/model.json",modelLoaded);
function modelLoaded(){
  console.log("model loaded");
}

function speak(){
  var synth=window.speechSynthesis;
  speak_data="Prediction is "+prediction;
  var utterThis=new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis)
}