import Header from "./components/Header";
import Main from "./components/Main";
import { MovieProvider } from "./components/contexts/MovieContext";

export default function App() {
  return (
    <>
      <MovieProvider>
        <Header />
        <Main />
      </MovieProvider>
    </>
  );
}
