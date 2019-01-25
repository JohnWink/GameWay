function checkOut() { // is used when the "buy" button is pressed on any description page
    alert("The game has been successfully bought!");
    
  }

  function openForm() { // a hidden Div appears after clicking a "requirements" button
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {// the once visible Div is hidden after clicking the "close" button
    document.getElementById("myForm").style.display = "none";
}