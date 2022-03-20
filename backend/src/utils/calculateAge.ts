const getClientAge = (clientBirthday: Date) => {
  const birthdayDate = new Date(clientBirthday);
  const birthdayYear = birthdayDate.getFullYear();
  const currentDate = new Date();

  const clientAge = calculateClientAge();

  function calculateClientAge() {
    let age = currentDate.getFullYear() - birthdayYear;

    const isTheBirthdayMonthGreaterThanTheCurrentMonth =
      // no javaScript quando se usa a data atual ele retorna o mes começando do zero por isso precisa acrescentar +1
      birthdayDate.getMonth() > currentDate.getMonth() + 1;

    const isTheBirthdayMonthEqualsThanTheCurrentMonth =
      // no javaScript quando se usa a data atual ele retorna o mes começando do zero por isso precisa acrescentar +1
      birthdayDate.getMonth() == currentDate.getMonth() + 1;

    const isTheBirthdayGreaterThanTheCurrentDay =
      birthdayDate.getDate() > currentDate.getDate();

    if (isTheBirthdayMonthGreaterThanTheCurrentMonth) {
      age = age - 1;
    } else if (isTheBirthdayMonthEqualsThanTheCurrentMonth) {
      if (isTheBirthdayGreaterThanTheCurrentDay) {
        age = age - 1;
      }
    }

    return age;
  }

  return clientAge;
};

export { getClientAge };
