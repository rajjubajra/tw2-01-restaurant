import Address from '../components/Location/Address';
import ContactForm from '../components/Location/ContactForm';
import GoogleMap from '../components/Location/GoogleMap';


function Location() {

  return (
  <div>
    <GoogleMap />
    <ContactForm />
    <div className="w-full flex justify-center">
      <Address />
    </div>
    
  </div>
  );
}

export default Location