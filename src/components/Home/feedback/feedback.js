import FeedbackContainer from "./container";
const Feedback = () => {
  //image. when Clicked, it will open a modal with the image and a form to submit feedback
  const feedbacks = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/150",
      username: "username",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. <br/> Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/150",
      username: "username",
      feedback: "feedback",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/150",
      username: "username",
      feedback: "feedback",
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/150",
      username: "username",
      feedback: "feedback",
    },
    {
      id: 5,
      imageUrl: "https://via.placeholder.com/150",
      username: "username",
      feedback: "feedback",
    },
    {
      id: 6,
      imageUrl: "https://via.placeholder.com/150",
      username: "username",
      feedback: "feedback",
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
