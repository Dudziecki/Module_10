import { IComment } from "../components/Post/types";

const initialState: IComment[] = [];

export const commentsReducer = (
  state: IComment[] = initialState,
  action: Actions,
): IComment[] => {
  switch (action.type) {
    case "add_comment": {
      const newComment: IComment = {
        id: state.length + 1,
        text: action.payload.text,
      };
      return [...state, newComment];
    }

    case "delete_comment": {
      const filtered = state.filter(
        (comment) => comment.id !== action.payload.id,
      );

      return filtered.map((comment, index) => ({
        ...comment,
        id: index + 1,
      }));
    }

    default:
      return state;
  }
};

export const addCommentAC = (text: string) => {
  return {
    type: "add_comment",
    payload: { text },
  } as const;
};

export const deleteCommentAC = (id: number) => {
  return {
    type: "delete_comment",
    payload: { id },
  } as const;
};

export type AddCommentAction = ReturnType<typeof addCommentAC>;
export type DeleteCommentAction = ReturnType<typeof deleteCommentAC>;

type Actions = AddCommentAction | DeleteCommentAction;
