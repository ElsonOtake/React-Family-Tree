import Individual from "./Individual";

const Group = ({title, data}) => {
  if (data.length > 0) {
    return (<>
      <h5>{title}</h5>
      <ul>
        {data.map((ind) => {
          return (<li>
            <Individual id={ind.id} name={ind.name} gender={ind.gender} />
          </li>)})}
      </ul>
    </>);
  } else {
    return null;
  }
};

export default Group;
