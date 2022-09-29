import React, { useRef, useState } from "react";

const Useref = () => {
  const [show, setShow] = useState(false);
  const number = useRef();
  const value = useRef();

  const Submit = (e) => {
    e.preventDefault();
    if (number.current?.value !== "" && value.current?.value !== "") {
      setShow(true);
    } else {
      alert("enter name");
    }
    console.log(number.current.value, value.current.value);
  };
  // console.log(name?.length,name)
  return (
    <div>
      <form class="row g-3" onSubmit={Submit}>
        <div class="col-md-4">
          <label for="validationServer01" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control is-valid"
            id="validationServer01"
            ref={number}
          />
        </div>
        <div class="col-md-4">
          <label for="validationServer02" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control is-valid"
            id="validationServer02"
            ref={value}
          />
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
          <br />
          <span>
            {show
              ? `your name is ${number?.current?.value} ${value?.current?.value} `
              : ""}
          </span>
          <br />
          <span>{number?.current?.value}</span>
          <span></span>
        </div>
      </form>
    </div>
  );
};

export default Useref;
