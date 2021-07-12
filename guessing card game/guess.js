let c1=[
    {
        image:"images/img2.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"images/img2.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"images/img3.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"images/img3.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"images/img4.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"images/img4.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"images/img5.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"image/img5.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"images/img6.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"images/img6.jpg",
        value:5,
        status:"closed"
    },




]


// durnsten shuffling alogorithm

for(let i=c1.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
    temp=c1[i];
    c1[i]=c1[j];
    c1[j]=temp;
}


let cardsCopy=c1;




function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCards(${index})">
                </div>
            </div>     
        `;
    });

    document.getElementById('c1').innerHTML=cardsString;

}



displayCards(c1);


let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCards(index){

    console.log(c1);

    c1[index].status="opened";
    if(cardCount===1){
        val1=c1[index].value;
        cardCount++;
    }
    else if(cardCount==2){
        val2=c1[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reset after one guess
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("GAME OVER");
            location.reload();
        }

    }

    displayCards(c1);

} 