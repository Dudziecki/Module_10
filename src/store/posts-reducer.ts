import { DEFAULT_USER } from '../lib/constants/constants';
import { IAuthor, IComment } from '../components/Post/types';

export interface IPost {
  id: number;
  author: IAuthor;
  createdAt: string;
  description: string;
  image?: string;
  likesCount: number;
  comments: IComment[];
}

const initialState: IPost[] = [];

export const postsReducer = (
  state: IPost[] = initialState,
  action: Actions,
): IPost[] => {
  switch (action.type) {
    case 'add_post': {
      const newPost: IPost = {
        id: state.length + 1,
        author: DEFAULT_USER,
        createdAt: 'just now',
        description: action.payload.description,
        image: action.payload.image,
        likesCount: 0,
        comments: [],
      };

      return [newPost, ...state];
    }

    default:
      return state;
  }
};

export const addPostAC = (payload: { description: string; image?: string }) =>
  ({
    type: 'add_post',
    payload,
  }) as const;

type Actions = ReturnType<typeof addPostAC>;
