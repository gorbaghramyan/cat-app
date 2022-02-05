import categoryI from "../interfaces/category";

class Category implements categoryI {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export default Category;