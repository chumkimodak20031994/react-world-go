import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Countries from "../components/countries/Countries";
import { Suspense } from "react";
const countryPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Countries countryPromise={countryPromise} />
      </Suspense>
    </>
  );
}

export default App;
