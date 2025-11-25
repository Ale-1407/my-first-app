import List from "./List";
import Items from "./Items";

export default function Main({children}) {
    return <main>{children}</main>;
}

Main.List = List;
Main.List.Items = Items;