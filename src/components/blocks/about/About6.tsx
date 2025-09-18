import Megaphone from "icons/lineal/Megaphone";
import { Tiles5 } from "components/elements/tiles";
import ListColumn from "components/reuseable/ListColumn";
// CUSTOM DATA
import { aboutList2 } from "data/about";

export default function About6() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-6 position-relative order-lg-2">
        <Tiles5 />
      </div>

      <div className="col-lg-6">
        <Megaphone className="icon-svg-md mb-4" />

        <h2 className="display-4 mb-3">Neden Biz?</h2>

        <p className="lead fs-lg">
          _____ ___ ____ ____ ______ __ _______ _____ __________ ___ __________ _____ ______ ___ _______ ______
        </p>

        <p className="mb-6">
        _____ ___ ____ ____ ______ ______ __ _______ _____ __________ ___ __________ _____ ______ ___ _______ ______ _____ _____ ______ ___ _______ _____ _____ _____ ______ ___ _______ _____
        </p>

        <ListColumn rowClass="gx-xl-8" list={aboutList2} />
      </div>
    </div>
  );
}
