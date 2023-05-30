function submitFunction() {
    alert("Your message has been sent. To send another message click on the reset form button.")
    document.getElementById("hiddenContent").style.display = 'block'
    document.getElementById("visibleContent").style.display = 'none'

  }

  function resetFunction() {
    document.getElementById("gForm").reset();
    document.getElementById("hiddenContent").style.display = 'none'
    document.getElementById("visibleContent").style.display = 'block'

}