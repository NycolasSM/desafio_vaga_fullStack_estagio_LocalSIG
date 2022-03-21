import "./style.css";

import { useState } from "react";

import FormField from "./components/FormField";

import { AiOutlineUser } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

const FormRegisterClient = () => {
  const [form, setForm] = useState({
    fullName: "",
    birthDate: "",
    cpf: "",
  });

  const [signError, setSignError] = useState();

  function onSubmitForm(event: any) {
    event.preventDefault();

    const isDateInvalid = () => {
      const inputDate = "22/03/2022";
      const dateToCompare = new Date(inputDate.split("/").reverse().join("/"));
      const currentDate = new Date();

      if (dateToCompare > currentDate) {
        return true;
      } else {
        return false;
      }
    };

    if (isDateInvalid() === true) {
      alert("data informada está invalida");
    } else {
      console.log("enviou");
    }
  }

  function formChange(event: any) {
    const { name, value } = event.target;
    console.log(form);

    setForm({ ...form, [name]: value });
  }

  return (
    <form className="register__client__form" onSubmit={onSubmitForm}>
      <div className="register__client__form__container">
        <FormField
          icon={<AiOutlineUser size={22} />}
          type="text"
          placeHolder="Nome Completo"
          id="fullName"
          name="fullName"
          onChange={(event) => formChange(event)}
        />
        <FormField
          icon={<FaRegAddressCard size={22} />}
          type="text"
          placeHolder="CPF"
          id="cpf"
          name="cpf"
          onChange={(event) => formChange(event)}
        />
        <FormField
          icon={<BsCalendar3 size={22} />}
          type="date"
          placeHolder="Data de Nascimento"
          id="birthDate"
          name="birthDate"
          onChange={(event) => formChange(event)}
        />
        <button className="register__client__form__button" type="submit">
          Registrar Cliente
        </button>
      </div>
    </form>
  );
};

export default FormRegisterClient;
