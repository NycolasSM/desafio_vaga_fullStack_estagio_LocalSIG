import "./style.css";

import axios from "axios";
import { useState } from "react";

import FormField from "./components/FormField";
import { cpfValidation } from "../../../../utils/validateCPF";

import { AiOutlineUser } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

const FormRegisterClient = () => {
  const [form, setForm] = useState({
    fullName: "",
    birthDate: "",
    cpf: "",
  });

  async function onSubmitForm(event: any) {
    event.preventDefault();

    let isValidDate = false;
    let isValidCPF = false;
    const cpfFormated = form.cpf.replace(/-(?!>)/g, "");

    function validateDate() {
      const inputDate = form.birthDate;
      const dateToCompare = new Date(inputDate.split("/").reverse().join("/"));
      const currentDate = new Date();

      if (dateToCompare < currentDate) {
        isValidDate = true;
      } else {
        alert("data inserida esta incorreta");
      }
    }

    async function validateCPF() {
      if (cpfValidation(cpfFormated) === true) {
        console.log(cpfFormated);
        isValidCPF = true;
      } else {
        console.log(cpfFormated);
        alert("cpf invalido");
      }
    }

    async function cleanFields() {
      setForm({
        fullName: "",
        birthDate: "",
        cpf: "",
      });
    }

    validateDate();
    validateCPF();

    if (isValidDate && isValidCPF) {
      axios
        .post("http://localhost:3001/clients", {
          fullName: form.fullName,
          birthDate: form.birthDate,
          cpf: cpfFormated,
        })
        .then(() => {
          alert("usuário cadastrado");
          cleanFields();
        })
        .catch((e) => {
          alert(e.response.data.message);
        });
    }
  }

  function formChange(event: any) {
    const { name, value } = event.target;

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
          value={form.fullName}
          onChange={(event) => formChange(event)}
        />
        <FormField
          icon={<FaRegAddressCard size={22} />}
          type="text"
          placeHolder="CPF"
          id="cpf"
          name="cpf"
          mask="cpf"
          value={form.cpf}
          onChange={(event) => formChange(event)}
        />
        <FormField
          icon={<BsCalendar3 size={22} />}
          type="date"
          placeHolder="Data de Nascimento"
          id="birthDate"
          name="birthDate"
          value={form.birthDate}
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
