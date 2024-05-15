
let initialState = {
    friendsNames:[
        {id: 1, name: "Alexaner"},
        {id: 2, name: "Dmitry"},
        {id: 3, name: "Viktoria" }
    ],
    friendsAges: [
        {id: 1, age:"34 goda" },
        {id: 2, age:"28 let"},
        {id: 3, age:"37 let"}
    ]

}

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;