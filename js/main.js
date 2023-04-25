let slider_buttons = document.querySelectorAll("div.shop-slider > span");
let cards_card = document.getElementsByClassName('cards-card')
let product_page = Math.ceil(cards_card.length/4);
let l = 0;
let movePer = 33.2;
let maxMove = 203;

	// mobile_view	
    let mob_view = window.matchMedia("(max-width: 768px)");
    if (mob_view.matches)
    {
        movePer = 50.36;
        maxMove = 504;
    }
    
    let right_mover = ()=>{
        l = l + movePer;
        if (cards_card == 1){l = 0; }
        for(const i of cards_card)
        {
            if (l > maxMove){l = l - movePer;}
            i.style.left = '-' + l + '%';
        }
    
    }
    let left_mover = ()=>{
        l = l - movePer;
        if (l<=0){l = 0;}
        for(const i of cards_card){
            if (product_page>1){
                i.style.left = '-' + l + '%';
            }
        }
    }
    slider_buttons[1].onclick = ()=>{right_mover();}
    slider_buttons[0].onclick = ()=>{left_mover();}