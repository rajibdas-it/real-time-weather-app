import LoadingAvatar from "../assets/loading-avatar.svg";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
      <img src={LoadingAvatar} alt="" className="rounded-full h-28 w-28" />
    </div>
  );
};

export default Loading;
