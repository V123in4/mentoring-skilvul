const apiKey = '339f18bb88e49509ba211e440d6e6260';
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

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

async function main() {
  const response = await fetch(url);
  const result = await response.json();

  const data = result.results;

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
