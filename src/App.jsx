import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./component/MyNav";
import Carosello from "./component/Carosello";
import Carosello2 from "./component/Carosello2";
import MyNavtwo from "./component/MyNavtwo";

function App() {
  return (
    <div className="App">
      <MyNav
        image="https://ongpng.com/wp-content/uploads/2023/04/7.Netflix-Logo-1728x734-1.png"
        link1="Home"
        link2="TvShow"
        link3="Movies"
        link4="Recently Added"
        link5="MyList"
        link7="KIDS"
        link8="MyList"
      />
      <MyNavtwo />
      <h2>Le tue serie preferite</h2>
      <Carosello />
      <Carosello2 />
    </div>
  );
}

export default App;
