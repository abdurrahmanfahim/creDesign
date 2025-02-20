import Button from "./Button";
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="wrap">
            <div className="logo">
              <a href="#">
                <img src={logo} alt={logo}/>
              </a>
            </div>
            <ul>
              <li>
                <Button href={'#'} content={'Home'}/>
              </li>
              <li>
                <Button href={'#'} content={'About'}/>
              </li>
              <li>
                <Button href={'#'} content={'Services'}/>
              </li>
              <li>
                <Button href={'#'} content={'Resume'}/>
              </li>
              <li>
                <Button href={'#'} content={'Portfolio'}/>
              </li>
              <li>
                <Button href={'#'} content={'Testimonial'}/>
              </li>
              <li>
                <Button href={'#'} content={'Blog'}/>
              </li>
            </ul>
                <Button style={'btnMain'} href={'#'} content={'Contact Me'} iconRight={'→'} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
