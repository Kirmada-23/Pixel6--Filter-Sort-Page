import { useLoadData } from "./hooks/useLoadData";
import UserTable from "./components/UserTable";
import "./index.css";

function App() {
  const limit = 10;
  const skip = 0;
  const { data, loading, error } = useLoadData(limit, skip);

  if (loading) return <div className="center">Loading...</div>;
  if (error) return <div className="center">Error: {error}</div>;

  return (
    <div className="container">
      <UserTable data={data} />
    </div>
  );
}

export default App;
