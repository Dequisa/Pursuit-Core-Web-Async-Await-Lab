// let button = document.querySelector("button");
// button.addEventListener("click",drawCard);
console.log('good luck!')

async function shuffleDeck(){
  try{
  let shuffle= await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  deck_Id= shuffle.data.deck_id
  let hold =drawCard(deck_Id)
    }catch(err){console.log("This is the error:", err)}
}

async function drawCard(id){
  try{
    let button = document.querySelector("button");
button.addEventListener("click",drawCard);
    let select = document.getElementById('select_value');
    let numberOfCards = select.options[select.selectedIndex].text;
    console.log(numberOfCards)
    let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=${numberOfCards}`)
    let cards = draw.data.cards
    for(const element of cards){
      let img = document.createElement("img");
      let ul = document.getElementById("cardList")
      let li = document.createElement("li")
      li.id = element.value;
      img.src = element.image;
     li.appendChild(img)
     ul.appendChild(li);

    }


  }catch(err){console.log("this is your error:",err)}
}

// shuffleDeck()
