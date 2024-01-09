let btn_1 = document.querySelector(".btn_1");
let btn_2 = document.querySelector(".btn_2");
let card = document.querySelectorAll('.card');
btn_1.addEventListener("click",()=>{
    for(let i = 0; i < card.length; i++){
        card[i].classList.add("hover");
        card[i].src="";
        btn_1.style.display = "none";
        btn_2.style.display = "block";
        
    }
})
btn_2.addEventListener("click",()=>{
    let i = 0;
    for(let i = 0; i < card.length; i++){
        card[i].classList.remove("hover");
        btn_1.style.display = "block";
        btn_2.style.display = "none";
    }
    card_change[Math.floor(Math.random() * card_change.length)]();
})

/* 버튼을 클릭하면 이미지의 url이 섞인다? */
let card_change=[card_change_1,card_change_2,card_change_3,card_change_4]
let card_set={
    card_1 : "images/girl_1.jpg",
    card_2 : "images/girl_2.jpg",
    card_3 : "images/girl_3.jpg",
    card_4 : "images/girl_4.jpg",
}

function card_change_1(){
    card[0].src = card_set.card_2;
    card[1].src = card_set.card_1;
    card[2].src = card_set.card_4;
    card[3].src = card_set.card_3;
}
function card_change_2(){
    card[0].src = card_set.card_3;
    card[1].src = card_set.card_1;
    card[2].src = card_set.card_2;
    card[3].src = card_set.card_4;
}
function card_change_3(){
    card[0].src = card_set.card_4;
    card[1].src = card_set.card_1;
    card[2].src = card_set.card_3;
    card[3].src = card_set.card_2;
}
function card_change_4(){
    card[0].src = card_set.card_1;
    card[1].src = card_set.card_4;
    card[2].src = card_set.card_3;
    card[3].src = card_set.card_2;
}