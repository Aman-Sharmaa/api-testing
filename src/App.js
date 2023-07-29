import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import axios from "axios";

function App() {
  const [file, setFile] = useState("");
  const handleUpload = () => {
    const FormData = require("form-data");

    let data = new FormData();
    data.append("file", file);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://python.easyexport.in/api/shipping_bill_ocr",
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  console.log(file);

  return (
    <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="file"
            autoFocus
            name="shippingBillFile"
            onChange={handleChange}
          />
          <Button variant="secondary" onClick={handleUpload}>
            &nbsp; Upload
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
