function animate() {
  var elem = document.getElementById("logo");
  print(elem)
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

function openTab(event, tabName){
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for(i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for(i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active","");
  }

tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

<button class="tablinks" onclick="openTab(event, 'Before Trip')" id="defaultOpen">Before Trip</button>

<script>
document.getElementByID("defaultOpen").click();
</script>

