const { createStore, combineReducers, applyMiddleware } = require("redux")
const { logger } = require('redux-logger')

const BUY_CAKE = 'BUY_CAKE'
const BUY_KELEPON = 'BUY_KELEPON'

//action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//action
function buyKelepon() {
    return {
        type: BUY_KELEPON,
        info: 'Buy Kelepon'
    }
}

const initialCakeState = {
    numOfCakes: 10
}

const initialKeleponState = {
    numOfKelepon: 20
}

//(previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const keleponReducer = (state = initialKeleponState, action) => {
    switch (action.type) {
        case BUY_KELEPON: return {
            ...state,
            numOfKelepon: state.numOfKelepon - 1
        }

        default: return state
    }
}

//Cool Combine Reducer 
const rootReducer = combineReducers({
    kelepon: keleponReducer,
    cake: cakeReducer
})


const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => { })
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyKelepon())
store.dispatch(buyKelepon())
unsubscribe()