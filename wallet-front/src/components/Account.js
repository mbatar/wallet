import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Col,
  Row,
  Button,
} from "reactstrap";
import { useDispatch } from "react-redux";
import AddCredit from "./AddCredit";
import AddDept from "./AddDept";
import { onDeleteAccount } from "../redux/actionCreators/onDeleteAccount";
import ShowInfo from "./ShowInfo";

function Account(props) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [addCredit, setAddCredit] = useState(false);
  const [addDept, setAddDept] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const changeChecked = () => {
    setIsChecked((v) => !v);
  };
  const changeRender = (e) => {
    switch (e.target.value) {
      case "credit":
        setAddCredit((v) => !v);
        break;
      case "dept":
        setAddDept((v) => !v);
        break;
      default:
        console.log("error");
        break;
    }
  };
  const handleShowInfo = () => {
    setShowInfo((v) => !v);
  };

  const deleteAccount = () => {
    dispatch(onDeleteAccount(props.item.id));
  };

  return (
    <div>
      <Card className="my-3" style={{ border: "3px solid #FF8C00" }}>
        <CardHeader className="d-flex justify-content-between">
          <h4
            onClick={changeChecked}
            className="d-inline-block my-auto"
            style={{ cursor: "pointer" }}
          >
            {props.item.name}
          </h4>
          <div>
            <span onClick={handleShowInfo} style={{ cursor: "pointer" }}>
              Detay
            </span>
            <span
              onClick={deleteAccount}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              Sil
            </span>
          </div>
        </CardHeader>
        <CardBody className={isChecked ? "d-block" : "d-none"}>
          {addCredit ? (
            <AddCredit changeRender={changeRender} account_id={props.item.id} />
          ) : addDept ? (
            <AddDept changeRender={changeRender} account_id={props.item.id} />
          ) : showInfo ? (
            <ShowInfo
              showInfo={handleShowInfo}
              account_id={props.item.id}
              account_name={props.item.name}
              credits={props.item.credits}
              depts={props.item.depts}
            />
          ) : (
            <div>
              <CardText>Yetkili Kişi: {props.item.person_name} </CardText>
              <CardText>Tel: {props.item.tel}</CardText>
              <CardText>Adres: {props.item.address}</CardText>
              <CardText>Borç Toplamı: {props.item.totaldept} TL</CardText>
              <CardText>Alacak Toplamı: {props.item.totalcredit} TL</CardText>
              <CardText>Bakiye: {props.item.balance} TL</CardText>
              <Row className="mt-4">
                <Col>
                  <Button
                    value="credit"
                    className="btn btn-success w-100"
                    onClick={changeRender}
                  >
                    ALACAK EKLE
                  </Button>
                </Col>
                <Col>
                  <Button
                    value="dept"
                    className="btn btn-danger w-100"
                    onClick={changeRender}
                  >
                    BORÇ EKLE
                  </Button>
                </Col>
              </Row>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default Account;
