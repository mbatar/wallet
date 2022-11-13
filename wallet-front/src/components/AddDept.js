import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { onCreateDept } from "../redux/actionCreators/onCreateDept";
function AddDept(props) {
  const dispatch = useDispatch();
  const [dept, setDept] = useState({
    total: 0,
    description: "",
    account_id: props.account_id,
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDept((v) => ({ ...v, [name]: value }));
  };
  const createDept = (e) => {
    dispatch(onCreateDept(dept).then(() => props.changeRender(e)));
  };
  return (
    <div>
      <FormGroup>
        <Label className="font-weight-bold" for="description">
          Borç Açıklaması
        </Label>
        <Input
          onChange={onChangeHandler}
          style={{ border: "3px solid #FF8C00" }}
          type="textarea"
          name="description"
          id="description"
          placeholder="Lütfen Doldurunuz. Ör: (Boya Aldım)"
        />
      </FormGroup>
      <FormGroup>
        <Label className="font-weight-bold" for="total">
          Tutar
        </Label>
        <Input
          onChange={onChangeHandler}
          style={{ border: "3px solid #FF8C00" }}
          type="number"
          name="total"
          id="total"
          placeholder="Lütfen Doldurunuz. Ör: (123)"
        />
      </FormGroup>
      <Button
        onClick={createDept}
        value="dept"
        className="btn btn-success w-100"
      >
        ONAYLA
      </Button>
    </div>
  );
}

export default AddDept;
