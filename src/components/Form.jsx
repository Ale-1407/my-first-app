import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";



export default function Form({children, onSubmit}) {
    return (
        <>
            <form onSubmit={onSubmit} className="space">
                {children}
            </form>
        </>
    )
}

Form.Input = Input;
Form.TextArea = TextArea;
Form.Button = Button;

