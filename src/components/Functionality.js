
function All() {

console.log('script ok')
    const next_btn = document.querySelector("#next_btn");
    const back_btn = document.getElementById("back_btn");
    const steps = document.querySelectorAll(".steps .step");
    const steps_num = document.querySelectorAll(".steps_nums .step_num");
    const plan_sum_name = document.querySelector(".plan_sum .plan_n");
    const toggle_btn = document.getElementById('toggle_plan_period');
    let step = 0;
    let plan = "monthly";
    let plan_name = "Arcade";
    let data = {
        monthly: {
            Arcade: "$9/mo",
            Advanced: "$12/mo",
            Pro: "$15/mo",
            addons: {
                Online_service: "$1/mo",
                Larger_storage: "$2/mo",
                Customizable_Profile: "$2/mo",
            },
        },
        yearly: {
            Arcade: "$90/yr",
            Advanced: "$120/yr",
            Pro: "$150/yr",
            addons: {
                Online_service: "$10/yr",
                Larger_storage: "$20/yr",
                Customizable_Profile: "$20/yr",
            },
        },
    };
    // var addon_p = document.querySelector(".add_ons");
    let add_on_1 = document.querySelector(".add_ons #service_1"),
        add_on_2 = document.querySelector(".add_ons #service_2"),
        add_on_3 = document.querySelector(".add_ons #service_3");
    let total_word = document.getElementById("m_y_total");
    /// DATA
    function update_data() {
        // update sum of plan name + price
        plan_sum_name.textContent = plan_name;
        let plan_price_sum = document.querySelector(".plan_sum .price_selected");
        plan_price_sum.textContent = data[plan][plan_name];
        // update addons_data
        [add_on_1.textContent, add_on_2.textContent, add_on_3.textContent] = [
            data[plan].addons.Online_service,
            data[plan].addons.Larger_storage,
            data[plan].addons.Customizable_Profile,
        ];
        total_word.textContent = plan.slice(0, -2); // year or month
        // calc total
        let final_total = document.getElementById("final_total");
        let total_price_arr = [0];
        let to_calc = document.querySelectorAll(".to_calc");
        to_calc.forEach((e) => {
            // eslint-disable-next-line no-unused-expressions
            typeof Number(e.textContent.match(/\w+/g)[0]) == "number"
                ? total_price_arr.push(Number(e.textContent.match(/\w+/g)[0]))
                : "";
        });
        // console.log(total_price_arr);
        var total_price = 0;
        total_price_arr.forEach((e) =>
            typeof e == "number" ? (total_price += e) : ""
        );
        final_total.textContent = total_price + 0;
        // console.log(total_price);
        change_total(addons_selected);
    }
    function end() {
        steps.forEach((e) => e.classList.add("hidden"));
        steps[4].classList.remove("hidden");
        document.querySelector(".main_btns").remove();
    }
    function confirm_btn() {
        next_btn.textContent = "Confirm";
        next_btn.classList.add("confirm_btn");
    }
    function normal_btn() {
        next_btn.textContent = "Next Step";
        next_btn.classList.remove("confirm_btn");
    }
    function next_back(e) {
        plan == "yearly" ? m_or_y("yr") : m_or_y("mo");
        step = step + e;
        step > 0
            ? back_btn.classList.add("active")
            : back_btn.classList.remove("active");
        step == 3 ? confirm_btn() : normal_btn();
        if (step > -1 && step < 4) {
            steps_num.forEach((e) => e.classList.remove("cur"));
            steps_num[step].classList.add("cur");
            steps.forEach((e) => e.classList.add("hidden"));
            steps[step].classList.remove("hidden");
        } else if (step == 4) end();
        else step = 0;

        update_data();
    }
    const dynamic_addons = document.getElementById("dynamic_addons");
    function change_total(addons_arr) {
        if (addons_arr) {
            let all_addons = "";
            addons_arr.forEach((a_name) => {
                let addon_price = data[plan].addons[a_name];
                // let add_ons_added = '';
                let add_ons_added = `<div class="add_on_added flex items-center justify-between">
            <p class="text-gray-400">${a_name}</p>
            <div class="to_calc text-blue-800">${addon_price}<span class="y_or_m_total"></span></div>
            </div>`;
                all_addons += add_ons_added;
            });
            dynamic_addons.innerHTML = all_addons;
        } else console.log(addons_arr);
    }
    let y_or_m_total = document.querySelectorAll(".y_or_m_total");
    let plan_price = document.querySelectorAll(".plans .plan_price");
    function toggle() {
        this.parentElement.classList.toggle("toggle_clr");
        this.classList.toggle("toggle_btn");
        plan == "monthly" ? (plan = "yearly") : (plan = "monthly");
        plan_price.forEach((e) => e.classList.add("hidden"));
        let plan_price_shown = document.querySelectorAll(
            `.plans .plan_price.${plan}`
        );
        plan_price_shown.forEach((e) => e.classList.remove("hidden"));
        plan == "yearly" ? m_or_y("yr") : m_or_y("mo");
    }
    function m_or_y(x) {
        y_or_m_total.forEach((e) => (e.textContent = x));
    }
    next_btn.addEventListener("click", () => next_back(1));
    back_btn.addEventListener("click", () => next_back(-1));

    // plans
    function select_plan(e) {
        plans.forEach((e) => e.classList.remove("active"));
        e.currentTarget.classList.add("active");
        plan_name = this.dataset.plan_name;
        // console.log(this.dataset.plan_name);
    }
    var addons_selected = [];
    function select_addon() {
        this.parentElement.classList.toggle("active");
        let i_addon = addons_selected.indexOf(this.dataset.name);
        i_addon === -1
            ? addons_selected.push(this.dataset.name)
            : (addons_selected = addons_selected.filter(
                (e) => e !== addons_selected[i_addon]
            ));
        // console.log(addons_selected);
        change_total(addons_selected);
    }
    const plans = document.querySelectorAll(".plans .plan");
    plans.forEach((e) => e.addEventListener("click", select_plan));
    const add_ons = document.querySelectorAll(".add_ons .add_on label");
    add_ons.forEach((e) =>
        e.addEventListener("click", select_addon, { capture: true })
    );
    toggle_btn.addEventListener('click', toggle);
} // Ends of all codes

// if (document.readyState === "loading") {
    //     // loading not finished yet
    //     document.addEventListener("DOMContentLoaded", All);
    // } else {
        //     // content fired
        //     // All();
        
// }
    
        setTimeout(() => {
            document.querySelector("#content_loaded_span") && All();
        }, 100);
    
function myScript() {
    return "./functionalities.js";
}

export default myScript;