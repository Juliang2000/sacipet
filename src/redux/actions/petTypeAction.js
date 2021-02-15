export const DOG_ACTION = 'DOG_ACTION';
export const CAT_ACTION = 'CAT_ACTION';
export const HAMSTER_ACTION = 'HAMSTER_ACTION';
export const RESET_ACTION = 'RESET_ACTION';

export const dog_action = (petType) => {
    return {
        type: DOG_ACTION,
        payload: petType
    }
}

export const cat_action = (petType) => {
    return {
        type: CAT_ACTION,
        payload: petType
    }
}

export const hamster_action = (petType) => {
    return {
        type: HAMSTER_ACTION,
        payload: petType
    }
}

export const reset_action = (petType) => {
    return {
        type: RESET_ACTION,
        payload: petType
    }
}

