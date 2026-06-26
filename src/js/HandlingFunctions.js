const handleDataChange = (e, setCardData, setErrors) => {
  const { name, value } = e.target;
  if (name != "name" && !/^\d*$/.test(value)) {
    return;
  }
  setCardData((p) => ({ ...p, [name]: value }));
  setErrors((prev) => ({ ...prev, [name]: "" }));
};

const handleSubmit = (e, cardData, setErrors, setApproved) => {
  e.preventDefault();
  let ErrorFounded = false;
  Object.keys(cardData).forEach((key) => {
    if (cardData[key].trim() == "") {
      setErrors((prev) => ({ ...prev, [key]: "Can`t be blank" }));
      ErrorFounded = true;
    }
  });
  if (!ErrorFounded) {
    setApproved(true);
  }
};

export { handleDataChange, handleSubmit };
