import React from 'react';
import s from "./People.module.css";
import PeopleList from "./PeopleList/PeopleList";


const People = (props) => {
  let peopleElements = props.state.peopleList.
    map((p) => < PeopleList name={p.name} id={p.id} />
    );

  return (
    <div className={s.people}>
      <div className={s.peopleList}>
        {peopleElements}
      </div>

    </div>
  )
}

export default People;


