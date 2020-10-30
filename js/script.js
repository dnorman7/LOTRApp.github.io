
/*----- constants -----*/

const BASE_URL = "https://the-one-api.dev/v2/movie"

/*----- app's state (variables) (data) -----*/
let lotrData; 

/*----- cached element references -----*/
const $container = $('#container');


/*----- event listeners -----*/
$container.on('click', 'article.card', handleClick);


/*----- functions -----*/

//Cards will show up without having to call getData() in console
init();

function init() {
    getData()
}

//using AJAX here to get data
function getData() {
    $.ajax({url: BASE_URL,headers:{Authorization: 'Bearer rnR526SUQ5_I9IhklT-P'}}).then(function(data) {
       lotrData = data;
        console.log('Data: ', data);
        render();
    }, function(error) {
       console.log('Error: ', error);
    });
}

function handleClick() {
    alert('card clicked');
}

//mapping over object in data
function render() {
    const htmlArray = lotrData.docs.map(lotr => {
        return`
    <article class="card flex-ctr">
        <h3>${lotr.name}</h3>
    </article>
    `;
    });

    $container.html(htmlArray);
}
