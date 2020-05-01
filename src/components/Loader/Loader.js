import React from "react";
import "./Loader.css";
import Skeleton from "react-loading-skeleton";

function Loader() {
  return (
    <>
      <div className="title container-fluid mt-4 mb-4">
        <Skeleton width={250} height={40} />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 Loader">
        <div className="col col-md-4 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-8">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-8">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-8">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-8">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-8">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-8">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-8">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-8">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <Skeleton circle={true} height={50} width={50} />
              </div>
              <div className="col-8">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
