import React, { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  const navigate = useNavigate();

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imgPath = `../../../public/assets/${id}.jpg`;
  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to="/" />;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imgPath} alt={superhero} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {first_appearance}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
