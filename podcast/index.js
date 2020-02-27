var API_KEY = 'api_key=nOL9RdzkjVbBSToCAGvB0qaImzh0Ra7C';
var ENDPOINT_BASE = 'api.giphy.com/v1/gifs/search';


var iframe_string = "<iframe src='https://giphy.com/embed/W3keANaGsQLC5Ri8DM' width='480' height='480' frameBorder='0'></iframe>"


function obtainIframe(url) {
    return `<iframe src='${url}' width='480' height='480' frameBorder='0'></iframe>`;
}

async function bringmeMyFuckingGifis() {
    var response = await fetch(`http://${ENDPOINT_BASE}?q=cat&${API_KEY}`)
    var gifs = await response.json();
    console.log(gifs.data)
    var gifsArray = gifs.data;
    

    //RECORRER LOS GIFS
    for (let index = 0; index < gifsArray.length; index++) {
        
        const gif = gifsArray[index];
        
        var url = gif.embed_url;
        
        console.log(url)
        
        var giphyContainer = document.getElementById('gifis');
        
        giphyContainer.innerHTML = iframe_string;
    }
}

bringmeMyFuckingGifis()










