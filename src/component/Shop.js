import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State/index";
function Shop() {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h1>Deposit/Withdraw Money</h1>
      <button
        classNamelas="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        onClick={() => {
          dispatch(withdrawMoney(100));
        }}
      >
        -
      </button>
      Update Balance
      <button
        classNamelas="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        onClick={() => {
          dispatch(depositMoney(100));
        }}
      >
        +
      </button>
    </div>
  );
}

export default Shop;
