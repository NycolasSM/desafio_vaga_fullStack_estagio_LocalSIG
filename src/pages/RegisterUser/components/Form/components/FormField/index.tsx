import "./style.css";

type Props = {
  type: string;
  placeHolder: string;
  id: string;
  name: string;
  icon: any;
  maxLenght?: number;
  isRequired?: boolean;
  onChange?: (event: any) => void;
};

const FormField: React.FC<Props> = ({
  type,
  placeHolder,
  id,
  name,
  icon,
  isRequired = true,
  maxLenght,
  onChange,
}) => {
  return (
    <>
      <div className="register__client__form__field">
        <label className="register__client__form__field__icon" htmlFor={id}>
          {icon}
        </label>
        <input
          type={type}
          placeholder={placeHolder}
          id={id}
          name={name}
          onChange={onChange}
          maxLength={maxLenght}
          required={isRequired}
        />
      </div>
    </>
  );
};

export default FormField;
