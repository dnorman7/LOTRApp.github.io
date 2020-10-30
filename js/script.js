/*----- constants -----*/

const BASE_URL = "https://the-one-api.dev/v2/movie"

/*----- app's state (variables) (data) -----*/
//let lotrData; 

let myId = ""
let lotrData, lotrDetail;

/*----- cached element references -----*/
const $container = $('#container');


/*----- event listeners -----*/
$container.on('click', 'article.card', handleClick);


/*----- functions -----*/

//Cards will show up without having to call getData() in console
init();

function init() {
    getData();
}

//using AJAX here to get data
function getData(detailInfo) {
    console.log('detailInfo', detailInfo)
    let Info;
    
    if (detailInfo === undefined) {
        url = BASE_URL
    } else {
        url = detailInfo;
    }
    // fetching data using AJAX
    
    $.ajax({
        url: BASE_URL,
        headers: {
            Authorization: 'Bearer rnR526SUQ5_I9IhklT-P'
        }
    }).then(function (data) {
        if (detailInfo === undefined) {
            lotrData = data;
            
            render();
        } else {
            lotrDetail = data;
            //callig render to display Modal
            render(true);
        }
        
    }, function (error) {
        console.log('Error: ', error);
    });
    
}

function handleClick() {
    getData(this.dataset);
}



function getId (lotr) {
    myId = lotr
}

//mapping over object in data
function render(showModal) {
    if(showModal === true) {
        //getting one piece of the data by finding it by the ID    
        const singleData = lotrDetail.docs.find(name => name._id == myId)
        
        //shows modal
        const $modalContent = $(`
            <p>Academy Award Wins: ${singleData.academyAwardWins}</p>
            <p>Academy Award Nominations: ${singleData.academyAwardNominations}</p>
            <p>Rotten Tomatos Score: ${singleData.rottenTomatesScore}</p>
            <p>Runtime in Minutes: ${singleData.runtimeInMinutes}</p>
        `);

        const $modal = $('#lotrModal');
        $modal.html($modalContent)
        $modal.modal();

    } else {
        const htmlArray = lotrData.docs.map(lotr => {
            return `
        <article onclick='getId(${JSON.stringify(lotr._id)})'  data-info="${lotr.academyAwardWins}" class="card flex-ctr">
            <h3>${lotr.name}</h3>
        </article>
        `;
        });

        $container.html(htmlArray);
    }

}