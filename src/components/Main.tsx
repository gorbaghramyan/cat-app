import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { fetchCats } from "../interfaces/actionTypes";
import Cat from "../models/cat";

function Main(): JSX.Element {
  const cats: Cat[] = useSelector((state: fetchCats) => state.cats);
  const { getMoreCats } = useActions();

  const loadMore = () => {
    if (cats.length) {
      getMoreCats(cats[0].categories[0].id);
    }
  }

  if (!cats?.length) {
    return <div className="no-category">Choose a category</div>;
  }

  cats.sort((a: Cat, b: Cat) => a.height - b.height);

  return (
    <div className="catContainer">
      {cats.map((cat, i) => <span key={i}><img alt="" src={cat.url}></img></span>)}
      <button onClick={loadMore}>More</button>
    </div>
  );
}

export default Main;
