import { Fragment } from "react";

export default function Tiles5() {
  const images = ["about2", "about3"];

  return (
    <Fragment>
      <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "3rem", left: "5.5rem" }} />

      <div className="overlap-grid overlap-grid-2">
        <div className="item">
            <figure className="rounded shadow">
              <img src={`/img/avatars/ucak.jpeg`} srcSet={`/img/photos/about2@2x.jpg 2x`} alt="Team member" />
            </figure>
          </div>
        <div className="item">
            <figure className="rounded shadow">
              <img src={`/img/avatars/uzeyir.png`} srcSet={`/img/avatars/uzeyir.png`} alt="Team member" />
            </figure>
          </div>
      </div>
    </Fragment>
  );
}
