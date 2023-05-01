const form = document.getElementById('upload-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  // Get the JSON file or URL from the form
  const jsonUpload = document.getElementById('json-upload');
  const urlInput = document.getElementById('url-input');
  
  let file;
  let url;
  
  if (jsonUpload.files.length > 0) {
    file = jsonUpload.files[0];
  } else if (urlInput.value) {
    url = urlInput.value;
  } else {
    alert('Please upload a JSON file or provide a URL link.');
    return;
  }
  
  // Call a function to parse the JSON and look up the stats
  if (file) {
    parseJsonFile(file);
  } else {
    parseJsonUrl(url);
  }
}
function parseJsonFile(file) {
  const reader = new FileReader();
  
  reader.addEventListener('load', (event) => {
    const jsonString = event.target.result;
    const json = JSON.parse(jsonString);
    
    // Call a function to display the stats table
    displayStatsTable(json);
  });
  
  reader.readAsText(file);
}

function parseJsonUrl(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => {
      // Call a function to display the stats table
      displayStatsTable(json);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error loading JSON file from URL.');
    });
}
