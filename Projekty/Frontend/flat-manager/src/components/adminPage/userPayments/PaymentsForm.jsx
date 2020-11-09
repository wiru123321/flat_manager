import React from 'react';
import { Table,Form,Col } from "react-bootstrap";

const PaymentsForm = ({onPointerLeave,user,handleRentCostChange,handleRubbishCostCostChange,handleWaterCostCostChange,index,info,option}) => {
    return (
        <tr>
      <td style={{width:"5%"}}>{index+1}</td>
      <td>{info.name}</td>
      <td>{info.surname}</td>
      <td style={{width:"15%",textAlign:"center",justifySelf:"center"}}>
        <Form>
  <Form.Row>
    <Col>
    {user.rentCost} zł
    </Col>
    <Col>
    {
        option?<Form.Control size="sm" type="number" placeholder="Czynsz" onChange={handleRentCostChange} value={user.rentCost} onMouseOutCapture={onPointerLeave}/>:
        <>{user.userRentPayment} zł</>
    }
    
    </Col>
  </Form.Row>
</Form></td>
      <td style={{width:"15%",textAlign:"center"}}>
      <Form>
  <Form.Row>
    <Col>
    {user.waterCost} zł 
    </Col>
    <Col>
    {
        option?<Form.Control size="sm" type="number" placeholder="Woda" onChange={handleWaterCostCostChange} value={user.waterCost} onMouseOutCapture={onPointerLeave}/>:
        <>{user.userWaterCost} zł</>
    }
    
    </Col>
  </Form.Row>
</Form>
        </td>
      <td style={{width:"15%",textAlign:"center",}}>
      <Form>
  <Form.Row>
    <Col>
    {user.rubbishCost} zł 
    </Col>
    <Col>
    {
        option? <Form.Control size="sm" type="number" placeholder="Śmieci" onChange={handleRubbishCostCostChange} value={user.rubbishCost} onMouseOutCapture={onPointerLeave}/>:
        <>{user.userRubbishPayment} zł </>
    }
   
    </Col>
  </Form.Row>
</Form></td>
    </tr>
    );
};

export default PaymentsForm;