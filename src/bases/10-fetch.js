const apiKey = "oevkH2leXBqB9scIAiy61szmSLgvY44X";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((resp) => resp.json())
  .then(({ data , meta}) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );


  })
  .catch(console.warn);
