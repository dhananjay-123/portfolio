const ProgressBarHorizontal = ({
  progress = 0,
  className = "w-full h-3",
}) => {
  return (
    <div className={`relative ${className} bg-gray-800 rounded-full overflow-hidden`}>
      <div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all"
        style={{ width: `${progress * 130}%` }}
      />
    </div>
  );
};

export default ProgressBarHorizontal;
