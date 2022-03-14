
const getImage = async () => {

    try {
        const apiKey = "oevkH2leXBqB9scIAiy61szmSLgvY44X";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        console.log(url);
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append( img );
    } catch (error) {
        console.error(error);
    }
}

getImage();


// const apiKey = "oevkH2leXBqB9scIAiy61szmSLgvY44X";

// const peticion = fetch(
//   `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
// );

// peticion
//   .then((resp) => resp.json())
//   .then(({ data , meta}) => {
//     const { url } = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append( img );


//   })
//   .catch(console.warn);
