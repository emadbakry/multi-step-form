// import logo from './logo.svg';
import './App.css';
import Arcade from './assets/images/icon-arcade.svg';
import Advanced from "./assets/images/icon-advanced.svg";
import Pro from './assets/images/icon-pro.svg';
import Thank_you from './assets/images/icon-thank-you.svg';
import MyScript from "./components/Functionality";
// import bg from './assets/images/bg-sidebar-mobile.svg';


function App() {
  return (
    <div className="App">
      <div className="all md:flex md:bg-white md:p-3 md:rounded-xl bg-[#d6d9e6] md:py-16 md:px-20">
        <div className="sidebar md:p-2 md:rounded-xl md:min-w-[220px]">
          <div className="container p-3">
            <div className="steps_nums flex md:items-start justify-center md:flex-col">
              <div className="step_num cur mx-1 flex items-center md:my-2">
                <div className="n">1</div>
                <div className="step_title hidden md:block md:ml-4">
                  <div className="p text-gray-200 text-xs uppercase">
                    step 1
                  </div>
                  <div className="text-white font-bold uppercase text-sm">
                    Your info
                  </div>
                </div>
              </div>
              <div className="step_num mx-1 flex items-center md:my-2">
                <div className="n ">2</div>
                <div className="step_title hidden md:block md:ml-4">
                  <div className="p text-gray-200 text-xs uppercase">
                    step 2
                  </div>
                  <div className="text-white font-bold uppercase text-sm">
                    Select plan
                  </div>
                </div>
              </div>
              <div className="step_num mx-1 flex items-center md:my-2">
                <div className="n ">3</div>
                <div className="step_title hidden md:block md:ml-4">
                  <div className="p text-gray-200 text-xs uppercase">
                    step 3
                  </div>
                  <div className="text-white font-bold uppercase text-sm">
                    Add-ons
                  </div>
                </div>
              </div>
              <div className="step_num mx-1 flex items-center md:my-2">
                <div className="n ">4</div>
                <div className="step_title hidden md:block md:ml-4">
                  <div className="p text-gray-200 text-xs uppercase">
                    step 4
                  </div>
                  <div className="text-white font-bold uppercase text-sm">
                    Summary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="bg-white mx-4 md:mx-0 relative rounded-md md:rounded-l-none p-5 -mt-14 md:mt-0 md:flex-grow md:min-h-[440px] md:ml-14 md:pr-16 md:pb-28">
          <div className="container">
            <div className="steps">
              <div className="step">
                <div className="heading">
                  <h2>Personal info</h2>
                  <p>
                    Please provide your name, email address, and phone number.
                  </p>
                </div>
                <div className="content">
                  <form className="mb-0">
                    <label className="font-medium text-sm" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="block border-2 border-gray-200 p-1 pl-3 w-full mb-2 font-medium"
                      type="text"
                      name="email"
                      id="name"
                      placeholder="e.g. Stephen King"
                    />
                    <label className="font-medium text-sm" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="block border-2 border-gray-200 p-1 pl-3 w-full mb-2 font-medium"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="e.g. stephenking@lorem.com"
                    />
                    <label className="font-medium text-sm" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="block border-2 border-gray-200 p-1 pl-3 w-full mb-2 font-medium"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="e.g. +1 234 567 890"
                    />
                  </form>
                </div>
              </div>

              <div className="step hidden">
                <div className="heading">
                  <h2>Select your plan</h2>
                  <p>
                    You have the option of monthly or{" "}
                    <span className="block md:inline"> yearly billing.</span>
                  </p>
                </div>
                <div className="content">
                  <div className="plans md:grid md:grid-cols-3 md:gap-4">
                    <div
                      className="plan md:p-1 md:flex-col items-start"
                      data-plan_name="Arcade"
                    >
                      <div className="icon_box p-2 md:mb-4">
                        <img src={Arcade} alt="arcade" />
                      </div>
                      <div className="plan_title ml-1 p-2">
                        <div className="font-medium">Arcade</div>
                        <p className="plan_price monthly text-gray-400">
                          $9/mo
                        </p>
                        <p className="plan_price yearly hidden text-gray-400">
                          $<span>90</span>/mo
                        </p>
                      </div>
                    </div>
                    <div
                      className="plan md:p-1 my-3 md:my-0 md:flex-col items-start"
                      data-plan_name="Advanced"
                    >
                      <div className="icon_box p-2 md:mb-4">
                        <img src={Advanced} alt="advanced" />
                      </div>
                      <div className="plan_title ml-1 p-2">
                        <div className="font-medium">Advanced</div>
                        <p className="plan_price monthly text-gray-400">
                          $<span>12</span>/mo
                        </p>
                        <p className="plan_price yearly hidden text-gray-400">
                          $<span>120</span>/mo
                        </p>
                      </div>
                    </div>
                    <div
                      className="plan md:p-1 md:flex-col items-start"
                      data-plan_name="Pro"
                    >
                      <div className="icon_box p-2 md:mb-4">
                        <img src={Pro} alt="pro" />
                      </div>
                      <div className="plan_title ml-1 p-2">
                        <div className="font-medium">Pro</div>
                        <p className="plan_price monthly text-gray-400">
                          $15/mo
                        </p>
                        <p className="plan_price yearly hidden text-gray-400">
                          $<span>150</span>/mo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="period_step_2 flex justify-center items-center mt-8 border-white border rounded py-2">
                    <span className="month font-medium">Monthly</span>
                    <div
                      className="bg-black mx-4 h-4 w-8 rounded-full flex items-center box-content p-0.5 cursor-pointer relative"
                      id="toggle_plan_period"
                    >
                      <span className="w-4 h-4 transition bg-white block rounded-full"></span>
                    </div>
                    <span className="year text-gray-400 font-medium">
                      Yearly
                    </span>
                  </div>
                </div>
              </div>

              <div className="step hidden">
                <div className="heading">
                  <h2>Pick add-ons</h2>
                  <p>
                    Add-ons help enhance your gaming{" "}
                    <span className="block md:inline">experience.</span>
                  </p>
                </div>
                <div className="content">
                  <form>
                    <div className="add_ons">
                      <div className="add_on py-1 my-3">
                        <div className="check_box p-4">
                          <input
                            required
                            id="one"
                            title="one"
                            type="checkbox"
                          />
                        </div>
                        <label
                          htmlFor="one"
                          data-name="Online_service"
                          className="title flex items-center justify-between flex-grow pr-3"
                        >
                          <div className="text">
                            <div className="font-medium text-sm">
                              Online service
                            </div>
                            <p className="text-gray-400 text-sm">
                              Access to multiplayer games
                            </p>
                          </div>
                          <div className="fees">
                            <span
                              className="text-blue-800 text-sm"
                              id="service_1"
                            >
                              +$1/mo
                            </span>
                          </div>
                        </label>
                      </div>
                      <div className="add_on py-1 my-3">
                        <div className="check_box p-4">
                          <input
                            required
                            title="two"
                            id="two"
                            type="checkbox"
                          />
                        </div>
                        <label
                          htmlFor="two"
                          data-name="Larger_storage"
                          className="title flex items-center justify-between flex-grow pr-3"
                        >
                          <div className="text">
                            <div className="font-medium text-sm">
                              {" "}
                              Larger storage
                            </div>
                            <p className="text-gray-400 text-sm">
                              Extra 1TB of cloud save
                            </p>
                          </div>
                          <div className="fees">
                            <span
                              className="text-blue-800 text-sm"
                              id="service_2"
                            >
                              +$2/mo
                            </span>
                          </div>
                        </label>
                      </div>
                      <div className="add_on py-1 my-3">
                        <div className="check_box p-4">
                          <input className='pointer-none'
                            required
                            title="three"
                            id="three"
                            type="checkbox"
                          />
                        </div>
                        <label
                          htmlFor="three"
                          data-name="Customizable_Profile"
                          className="title flex items-center justify-between flex-grow pr-3"
                        >
                          <div className="text">
                            <div className="font-medium text-sm">
                              Customizable Profile
                            </div>
                            <p className="text-gray-400 text-sm">
                              Custom theme on your profile
                            </p>
                          </div>
                          <div className="fees">
                            <span
                              className="text-blue-800 text-sm"
                              id="service_3"
                            >
                              +$2/mo
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="step hidden">
                <div className="heading">
                  <h2>Finishing up</h2>
                  <p>
                    Double-check everything looks OK{" "}
                    <span className="block md:inline">before confirming.</span>
                  </p>
                </div>
                <div className="content">
                  <div className="plan_sum bg-gray-200 rounded-md p-3">
                    <div className="plan_selected flex justify-between">
                      <div className="title">
                        <div className="plan_n font-bold">
                          Arcade <span>(Monthly)</span>
                        </div>
                        <button
                          type="button"
                          className="underline text-gray-500"
                        >
                          Change
                        </button>
                      </div>
                      <div className="price_selected font-bold to_calc">
                        $9/mo
                      </div>
                    </div>
                    <div className="h-[1px] w-full my-3 bg-gray-300"></div>
                    <div className="dynamic_addons" id="dynamic_addons"></div>
                  </div>
                  <div className="total flex justify-between p-3">
                    <div className="total_title">
                      <div className="p text-gray-400">
                        Total (per <span id="m_y_total">Month</span>)
                      </div>
                    </div>
                    <div className="total_cost">
                      <p className="text-blue-900 font-bold">
                        +<span id="final_total">9</span>$/
                        <span className="y_or_m_total">mo</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="step hidden">
                <div className="heading text-center md:mt-4">
                  <div className="img_box">
                    <img className="m-auto" src={Thank_you} alt="" />
                  </div>
                  <h2>Thank you!</h2>
                  <p className="p-[0!important] pb-2">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                  </p>
                </div>
              </div>
            </div>
            <div className="main_btns flex justify-between p-4 bg-gray-200 md:bg-transparent md:px-0 fixed w-full md:absolute bottom-0 left-0 md:left-5 md:w-[calc(100%-80px)]">
              <div
                id="back_btn"
                className="text-gray-500 cursor-pointer px-1 invisible"
              >
                go Back
              </div>
              <div
                id="next_btn"
                className="nxt_btn text-white bg-black font-medium py-2 px-3 rounded cursor-pointer"
              >
                Next Step
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="h-20"></div>
      <span
        id="content_loaded_span"
        className="ok"
        data-note="do not remove this element, app will breake"
      ></span>
    </div>
  );
}

export default App;


