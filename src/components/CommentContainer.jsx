const commentsList = [
  {
    id: "1",
    name: "Nidhin Sankar",
    text: "this is the comment in the comment container",
    replies: [
      {
        id: "2",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
      },
      {
        id: "3",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
      },
      {
        id: "4",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
      },
      {
        id: "5",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
        replies: [
          {
            id: "30",
            name: "Nidhin Sankar",
            text: "this is the comment in the comment container",
          },
          {
            id: "31",
            name: "Nidhin Sankar",
            text: "this is the comment in the comment container",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Nidhin Sankar",
    text: "this is the comment in the comment container",
  },
  {
    id: "7",
    name: "Nidhin Sankar",
    text: "this is the comment in the comment container",
    replies: [
      {
        id: "8",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
      },
      {
        id: "9",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
        replies: [
          {
            id: "32",
            name: "Nidhin Sankar",
            text: "this is the comment in the comment container",
          },
          {
            id: "33",
            name: "Nidhin Sankar",
            text: "this is the comment in the comment container",
          },
        ],
      },
      {
        id: "10",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
      },
      {
        id: "11",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
        replies: [
          {
            id: "34",
            name: "Nidhin Sankar",
            text: "this is the comment in the comment container",
          },
          {
            id: "54",
            name: "Nidhin Sankar",
            text: "this is the comment in the comment container",
            replies: [
              {
                id: "65",
                name: "Nidhin Sankar",
                text: "this is the comment in the comment container",
              },
              {
                id: "64",
                name: "Nidhin Sankar",
                text: "this is the comment in the comment container",
              },
            ],
          },
        ],
      },
      {
        id: "12",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
      },
    ],
  },
  {
    id: "13",
    name: "Nidhin Sankar",
    text: "this is the comment in the comment container",
    replies: [
      {
        id: "14",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
        replies: [
          {
            id: "69",
            name: "Nidhin Sankar",
            text: "this is the comment in the comment container",
          },
          {
            id: "96",
            name: "Nidhin Sankar",
            text: "this is the comment in the comment container",
          },
        ],
      },
      {
        id: "15",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
      },
      {
        id: "16",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
      },
      {
        id: "17",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
        replies: [
          {
            id: "45",
            name: "Nidhin Sankar",
            text: "this is the comment in the comment container",
          },
          {
            id: "44",
            name: "Nidhin Sankar",
            text: "this is the comment in the comment container",
          },
        ],
      },
      {
        id: "18",
        name: "Nidhin Sankar",
        text: "this is the comment in the comment container",
      },
    ],
  },
  {
    id: "19",
    name: "Nidhin Sankar",
    text: "this is the comment in the comment container",
  },
  {
    id: "20",
    name: "Nidhin Sankar",
    text: "this is the comment in the comment container",
  },
];

const Comment = ({ data }) => {
  return (
    <div className="flex p-2 bg-gray-100 items-center my-2" key={data?.id}>
      <img
        className="h-8"
        src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
        alt="user-icon"
      />
      <div className="px-1">
        <p>{data?.name}</p>
        <p>{data?.text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments?.map((comment) => (
    <>
      <Comment data={comment} />
      {comment?.replies?.length > 0 && (
        <div className="ml-5 border">
          <CommentList comments={comment?.replies} />
        </div>
      )}
    </>
  ));
};

const CommentContainer = () => {
  return (
    <div className="w-[70%]">
      <CommentList comments={commentsList} />
    </div>
  );
};

export default CommentContainer;
