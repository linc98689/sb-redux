window.onload = function(e){
    const h1 = document.querySelector("h1");
    h1.innerText = EMOJIS["DEFAULT"];

    const btnAngry = document.querySelector("#angry");
    btnAngry.addEventListener("click", function(e){
        store.dispatch({type: "ANGRY"});
        const face = store.getState();
        h1.innerText = EMOJIS[face.type];
    });
    
    const btnHappy = document.querySelector("#happy");
    btnHappy.addEventListener("click", function(e){
        store.dispatch({type: "HAPPY"});
        const face = store.getState();
        h1.innerText = EMOJIS[face.type];
    });
    
    const btnSad = document.querySelector("#sad");
    btnSad.addEventListener("click", function(e){
        store.dispatch({type: "SAD"});
        const face = store.getState();
        h1.innerText = EMOJIS[face.type];
    });
    
    const btnSurprise = document.querySelector("#surprise");
    btnSurprise.addEventListener("click", function(e){
        store.dispatch({type: "SURPRISE"});
        const face = store.getState();
        h1.innerText = EMOJIS[face.type];
    });
    
};
