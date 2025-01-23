import React, { createContext, useReducer, useContext} from "react";

const PostContext = createContext();

const initialState = {
    post: [],
};

function postReducer(state, action) {
    switch (action.type) {
        case "ADD_POST":
            return { ...state, post:[...state.post, action.payload] };
            default:
                throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function PostProvider({ children }) {
    const [state, dispatch] = useReducer(postReducer, initialState);

    return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
    );
};

export function usePostContext() {
    const context = useContext(PostContext);
    if (!context) {
      throw new Error("usePostContext must be used within a PostProvider");
    }
    return context;
  }