import React from "react";
import { Table } from "reactstrap";

function ShowInfo(props) {
  return (
    <div>
      <h2 className="mb-3">Alacak Hareketleri</h2>
      <Table className="mb-5" bordered hover>
        <thead>
          <tr>
            <th>Açıklama</th>
            <th>Tutar</th>
            <th>Oluşturulma Zamanı</th>
          </tr>
        </thead>
        <tbody>
          {props.credits.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.total} TL</td>
                <td>{item.created_at}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h2 className="mb-3">Borç Hareketleri</h2>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Açıklama</th>
            <th>Tutar</th>
            <th>Oluşturulma Zamanı</th>
          </tr>
        </thead>
        <tbody>
          {props.depts.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.total} TL</td>
                <td>{item.created_at}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowInfo;
