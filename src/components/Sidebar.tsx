import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { fetchCategories } from "../interfaces/actionTypes";

function Sidebar(): JSX.Element {
  const { getCategories, getCats } = useActions();
  const categories = useSelector((state: fetchCategories) => state.categories);

  useEffect(() => {
    getCategories();
  }, []);

  const onCategorySelect = (id: number) => getCats(id);

  return (
    <div className="sidebar">
      {categories.map(category => <span key={category.id} onClick={() => onCategorySelect(category.id)}>{category.name}</span>)}
    </div>
  );
}

export default Sidebar;
