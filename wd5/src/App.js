// import React from 'react';

function App(){
  const apiKey = 'AIzaSyCzsyEhEjXpxHjNcFzG3Kuhj3WXWCNiBrw';
  const search = 'Svekis';
  const url = `https://www.googleapis.com/youtube/v3/search/?part=snippet&key=${apiKey}&q=${search}&maxResults=20`;

  console.log(url);
  const output = document.querySelector('.output');
  const button = document.createElement('button');
  button.textContent = 'Get Data';
  output.append(button);

  button.addEventListener('click', (e)=> {
    fetch(url).then(rep=>rep.json()).then((data)=>{
      console.log(data.items);
    })
  })

}





export default App;
