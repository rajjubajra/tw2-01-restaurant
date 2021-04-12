import Iframe from 'react-iframe';

function GoogleMap() {
  return (
    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19866.05114920728!2d0.02602953955079339!3d51.508511999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a87c36400027%3A0xbd61e31e97bdbb44!2sHoliday%20Inn%20Express%20London%20-%20Excel!5e0!3m2!1sen!2suk!4v1617870119593!5m2!1sen!2suk" 
      width="100%" 
      height="450"
      loading="lazy"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative" />
  );
}

export default GoogleMap