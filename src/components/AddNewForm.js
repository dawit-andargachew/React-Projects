import { useRef } from "react";
import "./add_new.css";

function AddNewForm(props, props__2) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  //submitHandler function
  function submitHandler(event) {
    /* removes the default event when submit which sends a request for the server, 
    but by preventing the default react handles the process */
    event.preventDefault();

    // extracts user input
    const enterdTitle = titleInputRef.current.value;
    const entedImage = imageInputRef.current.value;
    const enterdAdress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const newData = {
      title: enterdTitle,
      image: entedImage,
      address: enterdAdress,
      description: enteredDescription,
    };

    // Make the -> newData <- accessible to send to backend in the ->"AddNew"<- component
    props.Collected_data(newData);

    /* helps to clear each input box after submit */
    const inputs = document.querySelectorAll(".clear_after");
    props__2.clear_the_inputs_box(inputs);
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={submitHandler}>
          {/* title */}
          <div className="sinlge-input-part title">
            <label htmlFor="title">Title</label>
            <input
              className="clear_after"
              type="text"
              required
              id="title"
              ref={titleInputRef}
            />
          </div>

          {/* image */}
          <div className="sinlge-input-part image">
            <label htmlFor="image">Image</label>
            <input
              className="clear_after"
              type="url"
              required
              id="image"
              ref={imageInputRef}
            />
          </div>

          {/* address */}
          <div className="sinlge-input-part address">
            <label htmlFor="address">Address</label>
            <input
              className="clear_after"
              type="text"
              required
              id="address"
              ref={addressInputRef}
            />
          </div>

          {/* description */}
          <div className="sinlge-input-part description">
            <label htmlFor="description">Desctiption</label>
            <textarea
              className="clear_after"
              name="description"
              id="description"
              required
              rows={5}
              ref={descriptionInputRef}
            ></textarea>
          </div>
          {/* button */}
          <div className="button-div">
            <button className="button">Add New Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewForm;
