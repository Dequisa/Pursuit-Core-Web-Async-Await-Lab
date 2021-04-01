let ul = document.getElementById("cardList");
let p = document.getElementById("remaining");
console.log('good luck!')
var deck_Id=""



async function shuffleDeck(){
  try{
   let shuffle= await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
   deck_Id=   shuffle.data.deck_id
   console.log(shuffle.data)
  // let hold =drawCard(deck_Id)
    }catch(err){console.log("This is the error:", err)}
}

async function drawCard(id){
  try{
    let select = document.getElementById('select_value');
    let numberOfCards = select.options[select.selectedIndex].text;
    console.log(numberOfCards)
    let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_Id}/draw/?count=${numberOfCards}`)
    let cards = await draw.data.cards
    for(const element of cards){
      // console.log(element)
      let img = document.createElement("img");
      let li = document.createElement("li")
      li.id = element.value;
      img.src = element.image;
     li.appendChild(img)
     ul.appendChild(li);
    }
    ul.replaceChild(ul);
    p.textContent = `${draw.data.remaining} card(s) left`
  }catch(err){console.log("this is your error:",err)}

  
}

shuffleDeck()

let button = document.querySelector("button");
button.addEventListener("click",drawCard);