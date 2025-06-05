import Header from "./components/Header";
import { MovieProvider } from "./components/contexts/MovieContext";

export default function App() {
  return (
    <>
      <MovieProvider>
        <Header />
      </MovieProvider>
    </>
  );
}
