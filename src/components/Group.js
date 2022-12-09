import Individual from "./Individual";
import { Link } from "react-router-dom";

const Group = ({title, data}) => {
  if (data.length > 0) {
    return (<>
      <h5>{title}</h5>
      <ul>
        {data.map((ind) => {
          return (
            <li>
              <Link to={`/details/${ind.id}`}>
                <Individual id={ind.id} name={ind.name} gender={ind.gender} />
              </Link>
            </li>
          )
        })}
      </ul>
    </>);
  } else {
    return null;
  }
};

export default Group;
