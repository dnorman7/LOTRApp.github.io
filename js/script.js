
/*----- constants -----*/

const BASE_URL = "https://the-office.p.rapidapi.com/1?rapidapi-key=3a776a8587mshb5a0763267e1f8ep177e80jsn31769ef05f15"
/*----- app's state (variables) (data) -----*/
let officeData; 

/*----- cached element references -----*/
const $container = $('#container');


/*----- event listeners -----*/
$container.on('click', '.card', handleClick);


/*----- functions -----*/

//using AJAX here to get data
function getData() {
    $.ajax(BASE_URL).then(function(data) {
        console.log('Data: ', data);
    }, function(error) {
       console.log('Error: ', error);
    });
}

function handleClick() {
    alert('card was clicked');
}

