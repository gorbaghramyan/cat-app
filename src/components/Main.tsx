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
        {cats.map((cat) => <img key={cat.id} width={cat.width} height={cat.height} src={cat.url}></img>)}
    </div>
  );
}

export default Main;
