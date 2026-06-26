import { useContext } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { DataContext } from "./context/DataContext";
import ApprovedPage from "./components/ApprovedPage";

const App = () => {
  const { approved } = useContext(DataContext);
  return (
    <div className="min-w-93.75 flex flex-col md:flex-row w-screen min-h-screen items-center ">
      <Header />
      <div className="m-auto flex flex-col gap-5">
        {approved ? <ApprovedPage /> : <Form />}
        <footer className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Ahmed Essam</a>.
        </footer>
      </div>
    </div>
  );
};

export default App;
