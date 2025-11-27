import List from "./List";
import Items from "./Items";
import Form from "./Form";

export default function Main({children, className}) {
    return <main className={className}>{children}</main>;
}

Main.List = List;
Main.List.Items = Items;

Main.Form = Form;
Main.Form.Input = Form.Input;
Main.Form.TextArea = Form.TextArea;
Main.Form.Button = Form.Button;