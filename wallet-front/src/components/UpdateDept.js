import React, { useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";

function UpdateDept() {
  const [total, setTotal] = useState(0);
  const updateDept = () => {};
  return (
    <div>
      <FormGroup>
        <Input
          type="text"
          className="border border-danger"
          placeholder="Borç Miktarı Giriniz"
        />
        <Button className="btn btn-danger w-100">BORÇ EKLE</Button>
      </FormGroup>
    </div>
  );
}

export default UpdateDept;
