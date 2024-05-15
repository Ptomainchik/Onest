

let initialState = {
stylesMusics: [
    {id: 1, stylemusic: "Rock"},
    {id: 2, stylemusic: "Jazz"},
    {id: 3, stylemusic: "Rap"},
    {id: 4, stylemusic: "HeavyMetall"},
    {id: 5, stylemusic: "Classic"},
],
sings: [
    {id: 1, quantity: "435 sings" },
    {id: 2, quantity: "241 sings" },
    {id: 3, quantity: "23 sings" },
    {id: 4, quantity: "507 sings" },
    {id: 5, quantity: "170 sings" },
]
}

const musicReducer = (state = initialState, action) => {

    return state;
}

export default musicReducer;