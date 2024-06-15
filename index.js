function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
  }
  
  // Call the function to ensure the event listener is set up
  addingEventListener();
  