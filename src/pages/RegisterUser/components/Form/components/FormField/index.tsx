import { useRef } from "react";

import "./style.css";

type Props = {
  type: string;
  placeHolder: string;
  id: string;
  name: string;
  icon: any;
  onChange?: () => void;
};

const FormField: React.FC<Props> = ({
  type,
  placeHolder,
  id,
  name,
  icon,
  onChange,
}) => {
  const ref = useRef();

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
          onFocus={() => (ref.current!.type = "date")}
          onBlur={() => (ref.current.type = "text")}
        />
      </div>
    </>
  );
};

export default FormField;
