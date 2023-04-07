import { Link } from 'react-router-dom';

function NavigationItem() {
  return (
    <div className="link-holder">
      <Link className="link" to="/">
        Books
      </Link>
      <Link className="link" to="/categories">
        Categories
      </Link>
    </div>
  );
}

export default NavigationItem;
