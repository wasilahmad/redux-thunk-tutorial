
export const asyncAgeUp = (val) => {
    return {
        type: 'AGE_UP', // action type
        val: val        // action payload
    }
}

export const ageUp = val => {
    return dispach => {
        // loading action until response comes from server
        dispach(isLoading());

        // async action
        setTimeout(() => {
            // dispatch action for increament age value
            dispach(asyncAgeUp(val));
        }, 2000);
    }
}

export const isLoading = () => {
    return {
        type: 'LOADING'
    }
}

export const asyncAgeDown = (val) => {
    return {
        type: 'AGE_DOWN',
        val: val
    }
}

export const ageDown = val => {
    return dispach => {
        dispach(isLoading());
        setTimeout(() => {
            dispach(asyncAgeDown(val));
        }, 2000);
    }
}
