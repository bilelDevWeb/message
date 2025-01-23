export const initialState = {
    posts: [],
  };
  
  export function postReducer(state, action) {
    switch (action.type) {
      case "ADD_POST":
        return { ...state, posts: [...state.posts, action.payload] };
      case "DELETE_POST":
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };
      default:
        return state; // Returns the current state if no action matches
    }
  }