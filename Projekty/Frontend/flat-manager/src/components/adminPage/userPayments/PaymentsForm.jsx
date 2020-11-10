import React from 'react';
import { Table,Form,Col,InputGroup,FormControl } from "react-bootstrap";
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const PaymentsForm = ({onPointerLeave,user,handleRentCostChange,handleRubbishCostCostChange,handleWaterCostCostChange,index,info,option}) => {
  const color = 'red';
  function calc(a,b){
return a-b;
  }
    return (
        <tr style={{width:"100%"}}>
      <td style={{width:"3%"}}>{index+1}</td>
      <td>{info.name}</td>
      <td>{info.surname}</td>
      <td style={{width:"25%",textAlign:"center",justifySelf:"center"}}>
        <Form>
  <Form.Row>
  
    {
        option?<InputGroup className="mb-2 mr-sm-2">
    <FormControl placeholder="Czynsz"  type="number" onChange={handleRentCostChange} value={user.rentCost} onMouseOutCapture={onPointerLeave} />
     <InputGroup.Prepend>
      <InputGroup.Text>zł</InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>:<>
  {user.rentCost==user.userRentPayment?
  <><Col><CheckCircleIcon style={{color:"green"}}/> Opłata:{user.rentCost}zł</Col><Col>Wpłacono:{user.userRentPayment}zł</Col></>
  :<><><ErrorIcon style={{color:"red"}}/> Opłata:{user.rentCost}zł</><Col>Wpłacono:{user.userRentPayment}zł</Col></>
  }
  </>
    }
  </Form.Row>
</Form></td>
      <td style={{width:"25%",textAlign:"center"}}>
      <Form>
  <Form.Row>
    {
        option?<InputGroup className="mb-2 mr-sm-2">
        <FormControl placeholder="Woda"  type="number" onChange={handleWaterCostCostChange} value={user.waterCost} onMouseOutCapture={onPointerLeave}/>
         <InputGroup.Prepend>
          <InputGroup.Text>zł</InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>:
        <>
        {user.waterCost==user.userWaterCost?
        <><Col><CheckCircleIcon style={{color:"green"}}/> Opłata:{user.waterCost}zł</Col><Col>Wpłacono:{user.userWaterCost}zł</Col></>
        :<><Col><ErrorIcon style={{color:"red"}}/> Opłata:{user.waterCost} zł</Col><Col>Wpłacono:{user.userWaterCost}zł</Col></>
        }
        </>
    }
  </Form.Row>
</Form>
        </td>
      <td style={{width:"25%",textAlign:"center"}}>
      <Form>
  <Form.Row>
    {
        option?<InputGroup className="mb-2 mr-sm-2">
        <FormControl placeholder="Śmieci"  type="number" onChange={handleRubbishCostCostChange} value={user.rubbishCost} onMouseOutCapture={onPointerLeave}/>
         <InputGroup.Prepend>
          <InputGroup.Text>zł</InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>:
        <>
        {user.rubbishCost==user.userRubbishPayment?
        <><Col><CheckCircleIcon style={{color:"green"}}/> Opłata:{user.waterCost}zł</Col><Col>Wpłacono:{user.userRubbishPayment}zł</Col></>
        :<><Col><ErrorIcon style={{color:"red"}}/> Opłata:{user.waterCost}zł</Col><Col>Wpłacono:{user.userRubbishPayment}zł</Col></>
        }
        </>
    }
  </Form.Row>
</Form></td>
    </tr>
    );
};

export default PaymentsForm;