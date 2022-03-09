import { useSelector } from "react-redux";
import { fetchCats } from "../interfaces/actionTypes";
import Cat from "../models/cat";

function Main(): JSX.Element {
  const cats: Cat[] = useSelector((state: fetchCats) => state.cats);

  if (!cats?.length) {
    return <div className="no-category">Choose a category</div>;
  }

  cats.sort((a: Cat, b: Cat) => a.height - b.height);

  return (
    <div className="catContainer">
      {cats.map((cat) => <span><img key={cat.id} alt="" src={cat.url}></img></span>)}
    </div>
  );
}

export default Main;
