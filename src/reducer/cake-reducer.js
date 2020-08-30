const { createStore } = require("redux")

const BUY_CAKE = 'BUY_CAKE'
const BUY_KELEPON = 'BUY_KELEPON'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyKelepon() {
    return {
        type: BUY_KELEPON,
        info: 'Buy Kelepon'
    }
}

const initialState = {
    numOfCakes: 10,
    numOfKelepon: 20
}

//(previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case BUY_KELEPON: return {
            ...state,
            numOfKelepon: state.numOfKelepon - 1
        }

        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyKelepon())
store.dispatch(buyKelepon())
unsubscribe()