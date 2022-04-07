import AddNewForm from "./AddNewForm";
import { useHistory } from "react-router-dom";

function AddNew() {
  const the_history = useHistory();

  /* it has access to 2 variables in the -> AddNewForm <- component
        [data 1], the dummy data entered by the user, and
        [data 2], the document.querySelectorAll() elements of all input boxs
   */
  function DataHandler(data, data_to_clear) {
    // resolves [data 1]
    fetch(
      "https://react-getting-started-e0e8c-default-rtdb.firebaseio.com/Products.json", // google firebase api link
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      // redirct to products page after data is entered
      the_history.replace("/products");

      // resolves [data 2]
      data_to_clear.forEach((one) => {
        one.value = "";
      });
    });
  }

  return (
    <div>
      <AddNewForm clear_the_inputs_box={AddNew} Collected_data={DataHandler} />
    </div>
  );
}

export default AddNew;
