import Alert from 'react-bootstrap/Alert';
import ProgressBar from 'react-bootstrap/ProgressBar';

function CustomAlert({variant, text}) {
  return (
    <>
      <Alert key={variant} variant={variant} className='fixed-top w-100 start-0'>
        {text}
        <ProgressBar striped variant={variant} now={100} style={{"height": "2px"}} className="mt-2 progressbar_countdown"/>
      </Alert>
    </>
  );
}

export default CustomAlert;