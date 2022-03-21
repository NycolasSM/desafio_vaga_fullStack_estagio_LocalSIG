import "./style.css";

import InputWithMask from "react-input-mask";

type Props = {
  type: string;
  placeHolder?: string;
  id: string;
  name: string;
  icon: any;
  maxLenght?: number;
  isRequired?: boolean;
  mask?: string;
  value?: any;
  label?: string;
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
  mask,
  value,
  label,
  onChange,
}) => {
  return (
    <>
      {mask ? (
        <div className="register__client__form__field">
          <label className="register__client__form__field__icon" htmlFor={id}>
            {icon}
          </label>
          <InputWithMask
            className="register__client__form__field"
            type={type}
            placeholder={placeHolder}
            id={id}
            name={name}
            onChange={onChange}
            mask="999-999-999-99"
            alwaysShowMask={false}
            value={value}
          />
          <span>{label}</span>
        </div>
      ) : (
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
            value={value}
          />
          <span>{label}</span>
        </div>
      )}
    </>
  );
};

export default FormField;
