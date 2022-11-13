import React, { useEffect } from "react";
import Account from "./Account";
import { useSelector } from "react-redux";

function AccountList() {
  const { accounts } = useSelector((state) => state.appReducer);
  useEffect(() => {
    console.log(accounts);
  }, [accounts]);
  return (
    <div>
      <h1 className="text-white">Hesap Listesi</h1>
      {accounts.map((item, index) => {
        let account = { ...item };
        return <Account item={account} key={index} />;
      })}
    </div>
  );
}
export default AccountList;
