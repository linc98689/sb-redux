import {v4 as uuid4} from "uuid";

const updateLocal = (state)=>{
    localStorage.setItem("todos-redux", JSON.stringify(state));
};

// initialization
let INIT = localStorage.getItem("todos-redux");
if (INIT === null)
    INIT = {};
else
    INIT = JSON.parse(INIT);

// reducer
const todoReducer = (state=INIT, action)=>{
    let result = {};
    switch(action.type){
        case "ADD_NEW":
            result =  {...state, [uuid4()]: action.payload};
            break;
        case "DELETE_ITEM":
            for(let key in state){
                if (key !== action.payload)
                    result[key] = state[key];
            }
            break;
            
        default:
            result = state;
    }
    updateLocal(result);
    return result;
}

export default todoReducer;
