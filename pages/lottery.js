import React, { Component } from "react";

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomLottery: {
        jackpot: "------",
        firstNum1: "---",
        firstNum2: "---",
        lastNum1: "---",
        lastNum2: "---",
        twoNumber: "--",
      }
    }
  }

  matRan = (rand) => {
    var numReturn = ""
    for (var i = 0; i < rand; i++) {

      const rand = Math.floor(Math.random() * 10);
      const strRand = rand.toString()

      numReturn = numReturn + strRand
    }
    return numReturn
  }

  randomNumber = () => {
    var Ranjackpot = this.matRan(6);
    var RanfirstNum1 = this.matRan(3);
    var RanfirstNum2 = this.matRan(3);
    var RanlastNum1 = this.matRan(3);
    var RanlastNum2 = this.matRan(3);
    var RantwoNumber = this.matRan(2);

    var setData = {
      jackpot: Ranjackpot,
      firstNum1: RanfirstNum1,
      firstNum2: RanfirstNum2,
      lastNum1: RanlastNum1,
      lastNum2: RanlastNum2,
      twoNumber: RantwoNumber
    }

    this.setState({
      randomLottery: setData
    })
  }

  render() {
    return (
      <div className="text-center d-flex justify-content-center p-4">
        <div className="box-content">
          <div className="pb-4">
            <h2>Lottery Thai</h2>
          </div>

          <div className="main-card flex-center">
            <div className="card card-box one-container">
              <span>รางวัลที่ 1</span>
              <div className="number">
                {this.state.randomLottery.jackpot}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="main-card flex-end col-md-6 col-sm-12 font">
              <div className="card card-box font-container">
                <span>เลขหน้า 3 ตัว</span>
                <div className="number">
                  <span className="p-3">{this.state.randomLottery.firstNum1}</span>
                  <span className="p-3">{this.state.randomLottery.firstNum2}</span>
                </div>
              </div>
            </div>
            <div className="main-card flex-start col-md-6 col-sm-12">
              <div className="card card-box back-container">
                <span>เลขท้าย 3 ตัว</span>
                <div className="number">
                  <span className="p-3">{this.state.randomLottery.lastNum1}</span>
                  <span className="p-3">{this.state.randomLottery.lastNum2}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-card flex-center">
            <div className="card card-box two-container">
              <span>เลขท้าย 2 ตัว</span>
              <div className="number">
                {this.state.randomLottery.twoNumber}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button type="button" class="btn btn-primary" onClick={this.randomNumber.bind()}>RANDOM</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Lottery;