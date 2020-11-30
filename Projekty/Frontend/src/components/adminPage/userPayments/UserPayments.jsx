import React, { useState } from 'react';
import { updateUser } from "../../../features/userSlice/userSlice";
import { useDispatch } from "react-redux";
import PaymentsForm from "./PaymentsForm";
import { useAlert } from "react-alert";

const UserPayments = ({ user, index, option, dataToSubmit }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [userPaymentsState, setUserPaymentsState] = useState({
    rentCost: user.flatsDTO.userAccountDTO.rentCost,
    rubbishCost: user.flatsDTO.userAccountDTO.rubbishCost,
    waterCost: user.flatsDTO.userAccountDTO.waterCost,
    userRentPayment: user.flatsDTO.userAccountDTO.userRentPayment,
    userRubbishPayment: user.flatsDTO.userAccountDTO.userRubbishPayment,
    userWaterCost: user.flatsDTO.userAccountDTO.userWaterCost,
    paymentDate: dataToSubmit,
    userPaymentDate: user.flatsDTO.userAccountDTO.userPaymentDate,
    isActive: user.flatsDTO.userAccountDTO.isActive
  });

  const handleRentCostChange = (event) => {
    setUserPaymentsState({
      ...userPaymentsState,
      rentCost: event.target.value,
    });
  };
  const submit = (event) => {
    dispatch(updateUser(user.login, userPaymentsState, alert));
  }

  const handleRubbishCostCostChange = (event) => {
    setUserPaymentsState({
      ...userPaymentsState,
      rubbishCost: event.target.value,
    });
  };

  const handleWaterCostCostChange = (event) => {
    setUserPaymentsState({
      ...userPaymentsState,
      waterCost: event.target.value,
    });
  };

  return (
    <>
      <PaymentsForm user={userPaymentsState} handleRentCostChange={handleRentCostChange} handleRubbishCostCostChange={handleRubbishCostCostChange} handleWaterCostCostChange={handleWaterCostCostChange} index={index} info={user} onPointerLeave={submit} option={option} />
    </>
  );
}

export default UserPayments;