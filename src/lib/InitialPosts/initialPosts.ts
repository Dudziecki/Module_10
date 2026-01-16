import picture from "../../assets/flowers.png";
export const initialPosts = [
  {
    id: 1,
    author: {
      name: "Mike"
    },
    createdAt: "3 min ago",
    description: "Just finished a great workout session! Feeling energized and ready for the day. 💪",
    likesCount: 2,
    comments: [
      {
        id: 1,
        text: "Keep up the good work!"
      },
      {
        id: 2,
        text: "Looking strong!"
      }
    ],
    image: picture
  },
  {
    id: 2,
    author: {
      name: "Mike"
    },
    createdAt: "3 min ago",
    description: "Working on a new React project. Loving the component-based architecture! ⚛️",
    likesCount: 2,
    comments: [
      {
        id: 1,
        text: "React is awesome!"
      },
      {
        id: 2,
        text: "Can't wait to see it!"
      }
    ]
  }
];