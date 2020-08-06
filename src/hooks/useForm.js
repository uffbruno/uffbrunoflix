import { useState } from 'react';

// custom hook (pesquisar depois)
export default function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function onChangeHandler(eventInfo) {
    setValue(eventInfo.target.getAttribute('name'),
      eventInfo.target.value);
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    values,
    onChangeHandler,
    clearForm,
  };
}
