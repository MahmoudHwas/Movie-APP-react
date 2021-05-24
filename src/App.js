import SimpleBottomNavigation from "./component/MainNavs";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./component/Header/Header";
import Trending from "./page/Trending/Trending";
import Movie from "./page/Movie/Movie";
import Series from "./page/Series/Series";
import Search from "./page/Search/Search";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
      <Container>
        <Switch>
          <Route path="/" component={Trending} exact/>
          <Route path="/movie" component={Movie} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
        </Switch>
      </Container>
    </div>
     <SimpleBottomNavigation/>
     </BrowserRouter>
  )
}

export default App;
