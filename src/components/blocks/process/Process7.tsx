import { Fragment } from "react";
// CUSTOM ICON COMPONENT
import List from "icons/lineal/List";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
import { ProcessList1 } from "components/reuseable/process-list";
// CUSTOM DATA
import { processList1 } from "data/process";

export default function Process7() {
  return (
    <Fragment>
      <div className="row mb-5">
        <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
          <List />
          <h2 className="display-4 mb-4 px-lg-14">Biz nasıl çalışıyoruz farkımız nedir bizim çalışmamız.</h2>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-6 order-lg-2">
          {processList1.map((item) => (
            <ProcessList1 {...item} key={item.no} />
          ))}
        </div>

        <div className="col-lg-6">
          <h2 className="display-6 mb-3">Nizim avantajımız nedir?</h2>
          <p className="lead fs-lg pe-lg-5">
            Bunu gören sponsur yada yeni üye bize neden güvenmeli vb saçmalıklar burda olacak 3 tane önemli şeyden bahs edip sıralasak çekici olur
          </p>

          <p>
          _____ ___ ____ ____ ______ ______ __ _______ _____ __________ ___ __________ _____ ______ ___ _______ ______ _____ _____ ______ ___ _______ _____ _____ _____ ______ ___ _______ _____

          </p>

          <p className="mb-6">
          _____ ___ ____ ____ ______ ______ __ _______ _______ ______ ___ _______ ______ _____ _____ ______ ___ _______ _____ _____ _____ ______ ___ _______ _____

          </p>

          <NextLink title="Daha Fazlası" href="#" className="btn btn-primary rounded-pill mb-0" />
        </div>
      </div>
    </Fragment>
  );
}
