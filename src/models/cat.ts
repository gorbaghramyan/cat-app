import catI from "../interfaces/cat";
import Category from "./category";

class Cat implements catI {
  id: string;
  url: string;
  categories: Category[];
  breeds: string[];
  width: number;
  height: number;

  constructor(
    id: string,
    url: string,
    categories: Category[],
    breeds: string[],
    width: number,
    height: number
  ) {
    this.id = id;
    this.url = url;
    this.categories = categories;
    this.breeds = breeds;
    this.width = width;
    this.height = height;
  }
}

export default Cat;
