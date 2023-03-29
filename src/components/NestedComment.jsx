import React from 'react'


const commentsData = [
    {
      name: "Sanya Kasaudhan",
      text: "Nahhh Justin Bieber got rizz",
      replies: [],
    },
    {
      name: "Tanya Kashyap",
      text: "What are you doing?",
      replies: [
        {
          name: "Sanya Kasaudhan",
          text: "Let's see how many legend listening to this song in 2023❤🎶🎧",
          replies: [],
        },
        {
          name: "Sudhanshu Kumar",
          text: "Such creative videos you’ve on this channel. Just subscribed!",
          replies: [
            {
              name: "Ranjana Kumar",
              text: "Love this video, I think I’ve watched it four times. ",
              replies: [
                {
                  name: "Aanshu Singh",
                  text: "When watching your videos, I accidentally hit ‘like’ and never knew when",
                  replies: [
                    {
                      name: "Sudhir Gupta",
                      text: "I truly love your channel. Keep doing the best work. ",
                      replies: [
                        {
                          name: "Suresh K",
                          text: "Following your channel from the last two years, interesting content!",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Abu Malik",
                      text: "I’ve never witnessed such awesome editing as this one.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Alisha Khurana",
      text: "Superb!!",
      replies: [],
    },
    {
      name: "Akanksha Gautam",
      text: "Beyond the expectation.",
      replies: [],
    },
  ];

  const Comment = ({data}) =>{
    const { name, text, replies } = data;
    return (
        <div className="flex shadow-sm bg-gray-100 rounded-lg my-2">
        <div className="flex">
          <img
            className="m-5 h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhSnoly9J1ySaRA45scYB4Q1otdhWAXtLlg&usqp=CAU"
            alt="img"
          />
          <div className="mt-3">
            <div className="text-lg font-medium">{name}</div>
            <div>{text}</div>
            <div className="flex ml-5 mt-3">
              <img className="h-5 w-5" src="https://cdn-icons-png.flaticon.com/128/9513/9513802.png"  alt="like"/>
              <img className="ml-5 h-5 w-5" src="https://cdn-icons-png.flaticon.com/128/880/880561.png"  alt="dislike"/>
              <div className="ml-5 text-lg">Reply</div>
            </div>
          </div>
        </div>
      </div>);
  }
  const CommentsList = ({comments}) => {
    // const { name, text, replies } = commentsData;
  return comments.map((comment,index)=>(
    <div>
    <Comment key={index} data={comment} />
        <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies} />
        </div>
    </div>
  ))
  }
  
const NestedComment = () => {
  return (
    <div className='ml-16'>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default NestedComment