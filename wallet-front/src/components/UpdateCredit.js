import React, { useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import { onUpdateCredit } from "../redux/actionCreators/onUpdateCredit";

function UpdateCredit() {
  const [total, setTotal] = useState(0);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTotal((v) => ({ ...v, [name]: value }));
  };
  const updateCredit = (e) => {
    dispatch(onUpdateCredit(props.id, total));
  };
  return (
    <div>
      <FormGroup>
        <Input
          type="number"
          className="border border-success"
          placeholder="Alacak Miktarı Giriniz"
          name="total"
          onChange={onChangeHandler}
        />
        <Button className="btn btn-success w-100" onClick={updateCredit}>
          ALACAK EKLE
        </Button>
      </FormGroup>
    </div>
  );
}

export default UpdateCredit;
