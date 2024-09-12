import FeedbackContainer from "./container";
const Feedback = () => {
  //image. when Clicked, it will open a modal with the image and a form to submit feedback
  const feedbacks = [
    {
      id: 1,
      imageUrl: "/gallery/cat.png",
      username: "Yeo Yi Xin:",
      feedback: "Such a stunning effect! Absolutely loving it!",
    },
    {
      id: 2,
      imageUrl: "/gallery/wed.png",
      username: "No user feedback so far",
      feedback: "No feedback so far",
    },
    {
      id: 3,
      imageUrl: "/gallery/flower.png",
      username: "No user feedback so far",
      feedback: "No feedback so far",
    },
    {
      id: 4,
      imageUrl: "/gallery/sloth.png",
      username: "No user feedback so far",
      feedback: "No feedback so far",
    },
    {
      id: 5,
      imageUrl: "/gallery/scenery.png",
      username: "No user feedback so far",
      feedback: "No feedback so far",
    },
    {
      id: 6,
      imageUrl: "/gallery/ts.png",
      username: "No user feedback so far",
      feedback: "No feedback so far",
    },
  ];
  return (
    <div className="w-full h-full grid grid-cols-3 place-items-center">
      {feedbacks.map((feedback) => (
        <FeedbackContainer key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
};
export default Feedback;
