interface SquareProps {
    value: string | null;
    onClick: () => void;
  }
  
  const Square: React.FC<SquareProps> = ({ value, onClick }) => {
    const emoji = value === "cat" ? "🐱" : value === "dog" ? "🐶" : null;
  
    return (
      <button
        className="bg-white border border-gray-300 w-20 h-20 flex justify-center items-center text-4xl focus:outline-none"
        onClick={onClick}
      >
        {emoji}
      </button>
    );
  };
  
  export default Square;
  