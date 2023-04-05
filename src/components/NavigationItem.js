import { Link } from 'react-router-dom';

function NavigationItem() {
  return (
    <div>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </div>
  );
}

export default NavigationItem;
