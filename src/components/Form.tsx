import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm();

  const handlerSubmit = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    onNewSub(inputValues);
    dispatch({ type: "clear" });
  };

  const hadleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const hadleClear = () => {
    dispatch({ type: "clear" });
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          onChange={hadleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="Nick"
        />
        <input
          onChange={hadleChange}
          type="number"
          name="subMonths"
          placeholder="subMonths"
          value={inputValues.subMonths}
        />
        <input
          onChange={hadleChange}
          type="text"
          name="avatar"
          placeholder="avatar"
          value={inputValues.avatar}
        />

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={hadleChange}
          name="description"
          placeholder="description"
          value={inputValues.description}
        ></textarea>

        <button onChange={hadleClear} type="button">
          Clear the Form
        </button>
        <button>Save new Sub!</button>
      </form>
    </div>
  );
};
export default Form;
