import { useState, useEffect } from "react";

const FormattedDate = () => {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(
    () => setFormattedDate(new Date().toLocaleString("en-US")),
    []
  );

  return formattedDate;
};

export default FormattedDate;