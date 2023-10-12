//your code here
// An array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'Led Zeppelin', 'Pink Floyd'];

// Function to remove articles from band names for sorting
function removeArticles(name) {
  return name.replace(/^(the|a|an) /i, '').trim();
}

// Sort the band names lexicographically after removing articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the <ul> element by its ID
let bandList = document.getElementById('band');

// Loop through the sorted band names and create <li> elements
for (let name of bandNames) {
  let listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
}
