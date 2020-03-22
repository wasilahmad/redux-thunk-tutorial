const initialState = { age:21, loading: false };

const reducer = ( state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'AGE_UP'){
        newState.age += action.val;// payload
        newState.loading = false;
    }

    if(action.type === 'AGE_DOWN'){
        newState.age -= action.val; // payload
        newState.loading = false;
    }

    if(action.type === 'LOADING'){
        newState.loading = true;
    }

    return newState
}

export default reducer;
