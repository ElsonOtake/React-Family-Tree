const Age = ({ birth, death }) => {
  let born, decease, birth_day, birth_month;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const today = new Date();
  if (birth != null) {
    let birth_year = birth.substr(0, 4);
    birth_month = birth.substr(5, 2);
    birth_day = birth.substr(8, 2);
    born = new Date(birth_year, birth_month, birth_day);
  }
  if (death != null) {
    let death_year = death.substr(0, 4);
    let death_month = death.substr(5, 2);
    let death_day = death.substr(8, 2);
    decease = new Date(death_year, death_month, death_day);
  }
  if (birth != null && death == null) {
    return <p>{((today - born) / 365.25 / 24 / 60 / 60 / 1000).toFixed(1)} years old. Birthday is on {months[birth_month - 1]} {birth_day}</p>
  } else if (birth != null && death != null) {
    return <p>Died with {((decease - born) / 365.25 / 24 / 60 / 60 / 1000).toFixed(1)} years old. Birthday was on {months[birth_month - 1]} {birth_day}</p>
  }
};

export default Age;
