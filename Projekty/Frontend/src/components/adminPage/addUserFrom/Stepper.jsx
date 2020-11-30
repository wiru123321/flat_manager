import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PublishIcon from '@material-ui/icons/Publish';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddUserForm from "../addUserFrom/AddUserForm";
import AddFlatForm from "../addUserFrom/AddFlatForm";
import FormSummary from "../addUserFrom/FormSummary";
import { selectAll, addUser, setError, reset } from "../../../features/addUserSlice/addUserSlice";
import { ValidatorForm } from 'react-material-ui-form-validator';
import { useAlert } from 'react-alert';


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <GroupAddIcon />,
    2: <HomeIcon />,
    3: <PublishIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginLeft: theme.spacing(10),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Wprowadź dane mieszkańca', 'Wprowadź dane mieszkania', 'Potwierdź wprowadzone dane'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddUserForm />;
    case 1:
      return <AddFlatForm />;
    case 2:
      return <FormSummary />;
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const alert = useAlert();
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const userSelect = useSelector(selectAll);
  const {
    firstname,
    lastname,
    email,
    login,
    phoneNumber,
    password,
    role,
    area,
    flor,
    peopleInFlat,
    rooms,
    isBalcony,
    town,
    postalCode,
    street,
    number,
    onError,
  } = userSelect
  const steps = getSteps();

  const submit = () => {
    let user = {
      email: email,
      login: login,
      phoneNumber: phoneNumber,
      password: password,
      name: firstname,
      surname: lastname,
      roleDTO: { name: role },
      flatsDTO: {
        area: area,
        flor: flor,
        peopleInFlat: peopleInFlat,
        rooms: rooms,
        isBalcony: isBalcony,
        isActive: true,
        adressDTO: {
          town: town,
          postalCode: postalCode,
          street: street,
          number: number,
        },
        userAccountDTO: {
          rentCost: "500",
          userRentPayment: "500",
          rubbishCost: "500",
          userRubbishPayment: "500",
          waterCost: "500",
          userWaterCost: "500",
          paymentDate: "2007-12-03T10:15:30",
          userPaymentDate: "2007-12-03T10:15:30",
          isActive: true
        }
      }
    };
    console.log(user);
  }

  const handleNext = () => {
    if ((activeStep) !== 2)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if ((activeStep) === 2) {
      let user = {
        email: email,
        login: login,
        phoneNumber: phoneNumber,
        password: password,
        name: firstname,
        surname: lastname,
        roleDTO: { name: role },
        flatsDTO: {
          area: area,
          flor: flor,
          peopleInFlat: peopleInFlat,
          rooms: rooms,
          isBalcony: isBalcony,
          isActive: true,
          adressDTO: {
            town: town,
            postalCode: postalCode,
            street: street,
            number: number,
          },
          userAccountDTO: {
            rentCost: "500",
            userRentPayment: "500",
            rubbishCost: "500",
            userRubbishPayment: "500",
            waterCost: "500",
            userWaterCost: "500",
            paymentDate: "2007-12-03T10:15:30",
            userPaymentDate: "2007-12-03T10:15:30",
            isActive: true
          }
        }
      };
      if (email && login &&
        phoneNumber &&
        password &&
        firstname &&
        lastname &&
        role &&
        area &&
        flor &&
        peopleInFlat &&
        rooms &&
        town &&
        postalCode &&
        street &&
        number) {
        dispatch(addUser(user, alert));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
      else {
        dispatch(setError(true));
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch(setError(false));
  };

  const handleReset = () => {
    dispatch(reset());
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (

          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Wszystkie kroki ukończone
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Zresetuj formularz
            </Button>
          </div>
        ) : (
            <div>
              <ValidatorForm onSubmit={submit}>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

                <div style={{ justifyContent: "center" }}>
                  <Button color="primary" disabled={activeStep === 0} onClick={handleBack} className={classes.button} >
                    Wróć
              </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? 'Zakończ' : 'Następna strona'}
                  </Button>
                  {
                    onError ? <p>Wypełnij wszystkie pola</p> : null
                  }
                </div>
              </ValidatorForm>
            </div>
          )}
      </div>
    </div>
  );
}