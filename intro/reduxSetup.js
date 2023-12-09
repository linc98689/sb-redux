const EMOJIS={
    "DEFAULT": "🍀",
    "ANGRY":"😠",
    "SAD":"😢",
    "HAPPY":"😃",
    "SURPRISE":"😲"
};

const faceReducer = (state={type:"DEFAULT"}, action)=>{
    switch(action.type){
        case "ANGRY": 
            return {...state, type: "ANGRY"};
        case "HAPPY": 
            return {...state, type: "HAPPY"};
        case "SAD": 
            return {...state, type: "SAD"};
        case "SURPRISE": 
            return {...state, type: "SURPRISE"};
        default: 
            return {...state, type: "DEFAULT"};
    }
};

const store = Redux.createStore(faceReducer);



