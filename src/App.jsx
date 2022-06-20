import {
  Footer,
  Blog,
  Possibility,
  Features,
  Header,
} from "./containers/Export-container";
import WhatGpt3 from "./containers/whatGpt3/WhatGpt3";
import { Cta, Brand, Navbar } from "./components/ExportComponent";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <WhatGpt3 />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
