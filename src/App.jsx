import './App.css';
import './helpers/tvCounterSold.js'
import {tvCounterSold} from "./helpers/tvCounterSold.js";
import {inventory} from "./constants/inventory.js";
import {tvCounterBought} from "./helpers/tvCountBought.js";
import {tvCounterStock} from "./helpers/tvCounterStock.js";
import {tvDescription} from "./helpers/tvDescription.js";
import {tvDescriptionPrice} from "./helpers/tvDiscriptionPrice.js";
import {tvDescriptionSpecs} from "./helpers/tvDiscriptionSpecs.js";
import checkIcon from "./assets/check.png"
import notIcon  from "./assets/minus.png"


function App() {
    const tvIndex = 8;


  return (
      <>
    <main>
    <h1>
        Tech it easy dashboard
    </h1>


      <h3>
              verkoopoverzicht
      </h3>

    <div className="tvCounters">

        <div className="tvSoldCounter">
        <p>
            Aantal verkochte producten
        </p>
        <p>
          {
            tvCounterSold(inventory)
          }
        </p>
          </div>


          <div className="originalStockTv">
          <p>
              Aantal ingekochte producten
          </p>
          <p >
              {
                  tvCounterBought(inventory)
              }
          </p>
          </div>


          <div className="inventoryStockTv">
          <p>
                  Aantal te verkopen producten
          </p>
          <p>
              {
                  tvCounterStock(inventory)
              }
          </p>
          </div>

    </div>


          <h3>
              Best verkochte tv
          </h3>

        <div className="tvDescription">
            <img src={inventory[tvIndex].sourceImg} alt="Samsung TV"/>
                <div className="description">
              <p className="tvTitle">
                  {
                      tvDescription(inventory, tvIndex)
                  }
              </p>
              <p className="tvPrice">
                  {
                      tvDescriptionPrice(inventory, tvIndex)
                  }
              </p>
              <p className="tvSize">
                  {
                      tvDescriptionSpecs(inventory, tvIndex)
                  }
              </p>

              <div className="applications">
                        <img src={checkIcon} alt="available"/>
                        <p>wifi</p>
                        <img src={notIcon} alt="not available"/>
                        <p>speech</p>
                        <img src={checkIcon} alt="not available"/>
                        <p>hdr</p>
                        <img src={checkIcon} alt="available"/>
                        <p>bluetooth</p>
                        <img src={notIcon} alt="not available"/>
                        <p>ambiLight</p>
              </div>

              </div>

      </div>

      <div className="buttonShuffle">
          <button>Meest verkocht eerst</button>
          <button>Goedkoopste eerst</button>
          <button>Meest geschikt voor sport eerst</button>
      </div>


      </main>
</>

  )
}





export default App
