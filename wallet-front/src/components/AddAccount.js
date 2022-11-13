import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { onSubmitData } from "../redux/actionCreators/onSubmitData";

function AddAccount(props) {
  const dispatch = useDispatch();
  const [account, setAccount] = useState({
    name: "",
    person_name: "",
    tel: "",
    address: "",
  });
  useEffect(() => {
    console.log(account);
  }, [account]);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAccount((v) => ({ ...v, [name]: value }));
  };
  const createAccount = () => {
    dispatch(onSubmitData(account));
  };

  return (
    <div>
      <h1 className="text-white">Hesap Ekle</h1>
      <Form>
        <FormGroup>
          <Label className="text-white font-weight-bold" for="name">
            Şirket İsmi
          </Label>
          <Input
            style={{ border: "3px solid #FF8C00" }}
            onChange={onChangeHandler}
            type="text"
            name="name"
            id="name"
            placeholder="Lütfen Doldurunuz. Ör: (Güneş İnşaat)"
          />
        </FormGroup>
        <FormGroup>
          <Label className="text-white font-weight-bold" for="person_name">
            Yetkili Kişi
          </Label>
          <Input
            style={{ border: "3px solid #FF8C00" }}
            onChange={onChangeHandler}
            type="text"
            name="person_name"
            id="person_name"
            placeholder="Lütfen Doldurunuz. Ör: (Ahmet Güneş)"
          />
        </FormGroup>
        <FormGroup>
          <Label className="text-white font-weight-bold" for="tel">
            Tel
          </Label>
          <Input
            style={{ border: "3px solid #FF8C00" }}
            onChange={onChangeHandler}
            type="number"
            name="tel"
            id="tel"
            placeholder="Lütfen Doldurunuz. Ör: (01112223344)"
          />
        </FormGroup>
        <FormGroup>
          <Label className="text-white font-weight-bold" for="address">
            Adres
          </Label>
          <Input
            style={{ border: "3px solid #FF8C00" }}
            onChange={onChangeHandler}
            type="textarea"
            name="address"
            id="address"
            placeholder="Lütfen Doldurunuz. Ör: (Akçaabat/TRABZON)"
          />
        </FormGroup>
      </Form>
      <Button
        style={{ backgroundColor: "#FF8C00", fontWeight: "bold" }}
        onClick={createAccount}
      >
        EKLE
      </Button>
    </div>
  );
}
export default AddAccount;
