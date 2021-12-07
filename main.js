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
    button='<button class="btn btn-success" onclick="check()" >Predict Emotion</button>';
    document.getElementById("div_result").innerHTML=l+result+button;

    

    Webcam.snap(function(data_uri){
      document.getElementById("div_result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/g7oHCoAC_/model.json",modelLoaded);
function modelLoaded(){
  console.log("model loaded");
}

function speak(){
  var synth=window.speechSynthesis;
  speak_data="Prediction is "+prediction;
  var utterThis=new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
}

function check(){
document.getElementById("captured_image");
classifier.classify(img,gotResult);
}

function gotResult(error,results){

  if(error){
    console.error(error);
  } else{
    console.log(results);
    document.getElementById("result_emotion_emoji").innerHTML=results[0].label;
    prediction=results[0].label;

    if(results[0].label=="Good Job"){
      document.getElementById("updated_emoji").innerHTML="&#128077;";
    }

    if(results[0].label=="Loser"){
      document.getElementById("updated_emoji").innerHTML="&#9757;";
    }

    if(results[0].label=="Dislike"){
      document.getElementById("updated_emoji").innerHTML="&#128078;";
    }

    if(results[0].label=="Rock"){
      document.getElementById("updated_emoji").innerHTML="&129304;";
    }

    if(results[0].label=="Peace"){
      document.getElementById("updated_emoji").innerHTML="&#9996;";
    }
  }


}
