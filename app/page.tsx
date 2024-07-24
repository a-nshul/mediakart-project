import Board from "../components/Board";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        <h1 className="text-6xl font-bold">Tic Tac Toe</h1>
        <Board />
      </main>
    </div>
  );
};

export default Home;
