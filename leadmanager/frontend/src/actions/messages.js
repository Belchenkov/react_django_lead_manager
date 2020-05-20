import {
    CREATE_MESSAGES,
    GET_MESSAGES
} from "./types";

// Create Message
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGES,
        payload: msg
    }
};
