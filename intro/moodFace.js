window.onload = function(e){
    const h1 = document.querySelector("h1");
    h1.innerText = EMOJIS["DEFAULT"];

    const btnAngry = document.querySelector("#angry");
    btnAngry.addEventListener("click", function(e){
        store.dispatch({type: "ANGRY"});
    });
    
    const btnHappy = document.querySelector("#happy");
    btnHappy.addEventListener("click", function(e){
        store.dispatch({type: "HAPPY"});
    });
    
    const btnSad = document.querySelector("#sad");
    btnSad.addEventListener("click", function(e){
        store.dispatch({type: "SAD"});
    });
    
    const btnSurprise = document.querySelector("#surprise");
    btnSurprise.addEventListener("click", function(e){
        store.dispatch({type: "SURPRISE"});
    });

    store.subscribe(function(){
        const face = store.getState();
        h1.innerText = EMOJIS[face.type];
    })
    
};
