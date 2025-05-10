import React from "react";
export default function Index6(){
    return (
        <>
    <div>
        
      {/* BANNER */}
      <div className="">
        <div className="text-center px-md-5 px-2">
          <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
            WEAR SEAL DIAMOND Putty
          </h2>
          <div className="px-md-5 py-md-3 text-start">
            <h4 style={{ color: 'rgb(66, 66, 66)', fontWeight: '400' }}>
              Smooth, non-rusting ceramic epoxy based putty used to repair,
              recondition and rebuild ceramic lined equipments, cast basalt lined
              equipments or any other component which is subjected to wear and
              erosion.
            </h4>
          </div>
        </div>
        {/* Carousal */}
        <div className="p-3 px-md-5">
          <div className="px-md-5">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              dataBsRide="carousel"
            >
              <div
                className="carousel-inner"
                style={{
                  borderRadius: '15px',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                }}
              >
                <div
                  className="carousel-item active"
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                >
                  <img
                    src="images/cbc/putty.png"
                    style={{ borderRadius: '15px' }}
                    className="d-block w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousal END */}
      </div>
      {/* BANNER END */}

      {/* Section 1 */}
      <div className="px-md-5 pb-3">
        <div className="px-md-5 px-2">
          <h3 className="pt-4" style={{ color: 'red' }}>
            Recommended Applications
          </h3>
          <li className="pt-4 fs-4" style={{ color: 'red' }}>
            <span className="fs-4" style={{ color: 'rgb(41, 41, 41)' }}>
              Repairs in tight spots where fine flowing putty is required.
            </span>
          </li>
          <li className="pt-4 fs-4" style={{ color: 'red' }}>
            <span className="fs-4" style={{ color: 'rgb(41, 41, 41)' }}>
              As ceramic filler in 1-5 mm gaps.
            </span>
          </li>
          <li className="pt-4 fs-4" style={{ color: 'red' }}>
            <span className="fs-4" style={{ color: 'rgb(41, 41, 41)' }}>
              Fixing wear resistant equipments.
            </span>
          </li>
          <li className="pt-4 fs-4" style={{ color: 'red' }}>
            <span className="fs-4" style={{ color: 'rgb(41, 41, 41)' }}>
              Protection of metal from corrosion.
            </span>
          </li>
          <li className="pt-4 fs-4" style={{ color: 'red' }}>
            <span className="fs-4" style={{ color: 'rgb(41, 41, 41)' }}>
              Joining tile-tile or pipe-pipe liners.
            </span>
          </li>
          <li className="pt-4 fs-4" style={{ color: 'red' }}>
            <span className="fs-4" style={{ color: 'rgb(41, 41, 41)' }}>
              Lining pumps and wear faces
            </span>
          </li>
          <li className="pt-4 fs-4" style={{ color: 'red' }}>
            <span className="fs-4" style={{ color: 'rgb(41, 41, 41)' }}>
              Prevents wear on metal surfaces that are exposed to abrasion and erosion
              such as "bends, pipes, MPOs, MDVs, valves and pumps".
            </span>
          </li>
          <li className="pt-4 fs-4" style={{ color: 'red' }}>
            <span className="fs-4" style={{ color: 'rgb(41, 41, 41)' }}>
              Protecting flanges and elbows
            </span>
          </li>
          <li className="pt-4 fs-4" style={{ color: 'red' }}>
            <span className="fs-4" style={{ color: 'rgb(41, 41, 41)' }}>
              Ideal for repairing ceramic lined elbows, worn out tiles and gaps.
            </span>
          </li>
        </div>
      </div>
      {/* Section 1 END */}

      {/* Section 3 */}
      <div className="p-md-5">
        <div className="px-md-5 p-3" style={{ backgroundColor: '#ffffff' }}>
          <div className="table-responsive pe-5">
            <table className="table">
              <thead className="thead-dark">
                <tr className="text-center" style={{ height: '60px' }}>
                  <td style={{ backgroundColor: '#ff2d2d', color: '#f4f4f4' }}>SR.NO.</td>
                  <td style={{ backgroundColor: '#ff2d2d', color: '#f4f4f4' }}>PRODUCT</td>
                  <td style={{ backgroundColor: '#ff2d2d', color: '#f4f4f4' }}>DESCRIPTION</td>
                  <td style={{ backgroundColor: '#ff2d2d', color: '#f4f4f4' }}>DATASHEET</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{ border: '2px solid white', height: '60px' }}
                  className="text-center"
                >
                  <td style={{ backgroundColor: '#bdbcc3' }}>1</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>WEAR SEAL DIAMOND Putty</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>
                    Ceramic epoxy based putty used to repair, gap filling and other unlined
                    portions for wear protection.
                  </td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>
                    Download WEAR SEAL DIAMOND Putty
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="fs-2 pt-3">LIFE and STORAGE</h2>
          <h3 className="fs-4 fw-normal pt-2">
            WEAR SEAL DIAMOND putty has a shelf life of 1 year from date of manufacture can be expected when stored at room temperature (22 Deg C) in their original containers.
          </h3>
        </div>
      </div>
      {/* Section 3 END */}
    </div>

   
 

        
        </>
    )
}