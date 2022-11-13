import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { onCreateCredit } from "../redux/actionCreators/onCreateCredit";
import { useDispatch } from "react-redux";
function AddCredit(props) {
  const dispatch = useDispatch();
  const [credit, setCredit] = useState({
    total: 0,
    description: "",
    account_id: props.account_id,
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCredit((v) => ({ ...v, [name]: value }));
  };
  const createCredit = (e) => {
    dispatch(onCreateCredit(credit).then(() => props.changeRender(e)));
  };
  return (
    <div>
      <FormGroup>
        <Label className="font-weight-bold" for="description">
          Alacak Açıklaması
        </Label>
        <Input
          onChange={onChangeHandler}
          style={{ border: "3px solid #FF8C00" }}
          type="textarea"
          name="description"
          id="description"
          placeholder="Lütfen Doldurunuz. Ör: (Boya Aldı)"
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
        onClick={createCredit}
        value="credit"
        className="btn btn-success w-100"
      >
        ONAYLA
      </Button>
    </div>
  );
}

export default AddCredit;
