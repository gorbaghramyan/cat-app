import categoryI from "./category";

interface catI {
    breeds: string[];
    categories: categoryI[];
    id: string;
    url: string;
    width: number;
    height: number;
}

export default catI;