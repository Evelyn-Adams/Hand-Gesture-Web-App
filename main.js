/**  <label>Snapshot - </label>
  <div id="result"></div>
  <br><br>
  <button class="btn btn-success" onclick="check()">Predict Emotion</button> */

  function take_snapshot(){
      
    l='<label>Snapshot - </label>';
    result='<div id="result"></div><br><br>';
    button=' <button class="btn btn-success" onclick="check()">Predict Emotion</button>'
    document.getElementById("div_result").innerHTML=l+result+button;
}