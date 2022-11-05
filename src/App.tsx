import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return(
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle/>
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App;
