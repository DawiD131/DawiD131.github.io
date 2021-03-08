const formatDate = (dateToFormat, interuptionSign = "-") => {
  const date = new Date(dateToFormat);
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  return `${year}${interuptionSign}${month}${interuptionSign}${day}`;
};

const factsFormValidation = (inputValue) => {
  const validationInfo = {
    isValidated: false,
    message: "",
  };

  if (inputValue < 1) {
    validationInfo.message = "Wartość musi być większa od 0";
  } else if (inputValue > 500) {
    validationInfo.message = "Wartość musi być mniejsza niz 500";
  } else {
    validationInfo.isValidated = true;
  }
  return validationInfo;
};

const employeeFormValidation = (inputValue, taskContent) => {
  const validationInfo = {
    isValidated: false,
    message: "",
  };

  if (inputValue === null) {
    validationInfo.message = "Musisz wybrać pracownika";
  } else if (taskContent.length <= 2) {
    validationInfo.message = "Opis zadania musi być dłuzszy od 2 znaków";
  } else {
    validationInfo.isValidated = true;
  }

  return validationInfo;
};
