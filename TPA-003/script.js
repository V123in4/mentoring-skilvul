const apiKey = '339f18bb88e49509ba211e440d6e6260';
const urlList = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

function getUrlSearch(query) {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1`;
}

const contentContainer = document.getElementById('content');

// function main() {
//   fetch(url)
//     .then(function (response) {
//       response.json()
//         .then(function (result) {
//           console.log(result.results);
//           const data = result.results;

//           data.forEach(function (movie) {
//             const div = document.createElement('div');
          
//             div.classList.add('box');
//             div.innerHTML = `
//               <h3>${movie.title}</h3>
//               <p>${movie.overview}</p>
//               <p>${movie.release_date}</p>
//             `;
            
//             contentContainer.appendChild(div);
//           });
//         })
//     })
// }

// main();

document.getElementById('searchInput').addEventListener('input', search);

async function search() {
  // e.preventDefault();
  const searchValue = document.getElementById('searchInput').value;

  console.log(searchValue);
  if (!searchValue || searchValue !== '' || searchValue !== ' ') {
    console.log('here')
    const response = await fetch(getUrlSearch(searchValue));
    const result = await response.json();
  
    const data = result.results;

    if (Array.isArray(data)) {
      contentContainer.innerHTML = '';
  
      data.forEach(function (movie) {
        const div = document.createElement('div');
      
        div.classList.add('box');
        div.innerHTML = `
          <h3>${movie.title}</h3>
          <p>${movie.overview}</p>
          <p>${movie.release_date}</p>
        `;
        
        contentContainer.appendChild(div);
      });
    };
  }
}

async function main() {
  const response = await fetch(urlList);
  const result = await response.json();

  const data = result.results;

  contentContainer.innerHTML = '';
  
  data.forEach(function (movie) {
    const div = document.createElement('div');
  
    div.classList.add('box');
    div.innerHTML = `
      <h3>${movie.title}</h3>
      <p>${movie.overview}</p>
      <p>${movie.release_date}</p>
    `;
    
    contentContainer.appendChild(div);
  });
}

main();
