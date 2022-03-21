import "./style.css";

import axios from "axios";
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

  function onSubmitForm(event: any) {
    event.preventDefault();

    let isValidDate = false;
    let isValidCPF = false;

    const validateDate = () => {
      const inputDate = form.birthDate;
      const dateToCompare = new Date(inputDate.split("/").reverse().join("/"));
      const currentDate = new Date();

      if (dateToCompare < currentDate) {
        isValidDate = true;
      } else {
        isValidDate = false;
      }
    };

    function refreshPage() {
      window.location.reload();
    }

    function formatCpf() {
      const cpfWithoutSpecialCharacters = form.cpf.replace(/-(?!>)/g, "");
      setForm({ ...form, cpf: cpfWithoutSpecialCharacters });

      isValidCPF = true;
    }

    validateDate();
    // validateCPF(); // criar a função
    formatCpf();

    if (isValidDate && isValidCPF) {
      axios
        .post("http://localhost:3001/clients", form)
        .then(() => {
          refreshPage();
          alert("usuário cadastrado");
        })
        .catch((e) => {
          alert(e.response.data.error);
        });
    } else {
      alert("data inserida esta incorreta");
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
          mask="cpf"
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
