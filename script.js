let elements = document.getElementById("elements");
let network_carrier = document.getElementById("network_carrier");
let selectText = document.getElementById("selectText");
let arrowIcon = document.getElementById("arrowIcon");
let list = document.getElementById("list");
let options = document.getElementsByClassName("options");
let option_a = document.getElementById("option_a");
let option_b = document.getElementById("option_b");
let option_c = document.getElementById("option_c");
let option_d = document.getElementById("option_d");

network_carrier.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

option_a.onclick = function () {
  selectText.innerHTML = `<div class="change">
          <img src="./img/9mobile Logo.png" alt="" class="change_image">
          </div>`;
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

option_b.onclick = function () {
  selectText.innerHTML = `<div class="change">
            <img src="./img/mtn.jfif" alt="">
            </div>`;
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

option_c.onclick = function () {
  selectText.innerHTML = `<div class="change">
              <img src="./img/Airtel Nigeria Logo.png" alt="">
              </div>`;
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

option_d.onclick = function () {
  selectText.innerHTML = `<div class="change">
                  <img src="./img/Globacom Limited Logo.png" alt="">
                  </div>`;
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

document.getElementById("phone_number").addEventListener("input", (e) => {
    let phone = [];

    phone = document.getElementById("phone_number").value;

    let check = phone.slice(0,3);

    if (check == 080 || check == 070 || check == 090 || check == 081 || check == 091) {

      let first4 = phone.slice(0,4);
      let first5 = phone.slice(0,5);
    
      if (first4 == 0803 || first4 == 0806 || first4 == 0810 || first4 == 0813 || first4 == 0814 || first4 == 0816 || first4 == 0903 || first4 == 0906 || first4 == 0913 || first4 == 0916) {
          selectText.innerHTML = `<div class="change">
              <img src="./img/mtn.jfif" alt="">
              </div>`;
              console.log('mtn');
      }
      else if (first4 == 0802 || first4 == 0808 || first4 == 0812 || first4 == 0901 || first4 == 0902 || first4 == 0904 || first4 == 0907 || first4 == 0912){
          selectText.innerHTML = `<div class="change">
          <img src="./img/Airtel Nigeria Logo.png" alt="">
          </div>`;
          }
      else if (first4 == 0805 || first4 == 0807 || first4 == 0811 || first4 == 0815 || first4 == 0905 || first4 == 0915) {
          selectText.innerHTML = `<div class="change">
          <img src="./img/Globacom Limited Logo.png" alt="">
          </div>`;
          }
      else if (first4 == 0809 || first4 == 0817 || first4 == 0818 || first4 == 0909 || first4 == 0908) {
          selectText.innerHTML = `<div class="change">
          <img src="./img/9mobile Logo.png" alt="" class="change_image">
          </div>`;
          }
      
    }
    else if (check == 234) {
      
      let first4 = phone.slice(3,6);
      let first5 = phone.slice(3,7);
  
      if ((first5[0] == 7 && first5[1] == 0 && first5[2] == 2 && first5[3] == 5) || (first5[0] == 7 && first5[1] == 0 && first5[2] == 2 && first5[3] == 6) || (first4[0] == 7 && first4[1] == 0 && first4[2] == 3) || (first4[0] == 7 && first4[1] == 0 && first4[2] == 4) || (first4[0] == 7 && first4[1] == 0 && first4[2] == 6) || first4 == 803 || first4 == 806 || first4 == 810 || first4 == 813 || first4 == 814 || first4 == 816 || first4 == 903 || first4 == 906 || first4 == 913 || first4 == 916) {
          selectText.innerHTML = `<div class="change">
              <img src="./img/mtn.jfif" alt="">
              </div>`;
              console.log('mtn');
      }
      else if ((first4[0] == 7 && first4[1] == 0 && first4[2] == 1) || (first4[0] == 7 && first4[1] == 0 && first4[2] == 8) || first4 == 802 || first4 == 808 || first4 == 812 || first4 == 901 || first4 == 902 || first4 == 904 || first4 == 907 || first4 == 912){
          selectText.innerHTML = `<div class="change">
          <img src="./img/Airtel Nigeria Logo.png" alt="">
          </div>`;
          }
      else if ((first4[0] == 7 && first4[1] == 0 && first4[2] == 5) || first4 == 805 || first4 == 807 || first4 == 811 || first4 == 815 || first4 == 905 || first4 == 915) {
          selectText.innerHTML = `<div class="change">
          <img src="./img/Globacom Limited Logo.png" alt="">
          </div>`;
          }
      else if (first4 == 809 || first4 == 817 || first4 == 818 || first4 == 909 || first4 == 908) {
          selectText.innerHTML = `<div class="change">
          <img src="./img/9mobile Logo.png" alt="" class="change_image">
          </div>`;
          }
      
    }
    else {
      let first4 = phone.slice(0,4);
      let first5 = phone.slice(0,5);

      if ((first5[0] == 0 && first5[1] == 7 && first5[2] == 0 && first5[3] == 2 && first5[4] == 5) || (first5[0] == 0 && first5[1] == 7 && first5[2] == 0 && first5[3] == 2 && first5[4] == 6) || (first4[0] == 0 && first4[1] == 7 && first4[2] == 0 && first4[3] == 3) || (first4[0] == 0 && first4[1] == 7 && first4[2] == 0 && first4[3] == 4) || (first4[0] == 0 && first4[1] == 7 && first4[2] == 0 && first4[3] == 6)) {
        selectText.innerHTML = `<div class="change">
              <img src="./img/mtn.jfif" alt="">
              </div>`;
              console.log('mtn');
      }
      else if ((first4[0] == 0 && first4[1] == 7 && first4[2] == 0 && first4[3] == 1) || (first4[0] == 0 && first4[1] == 7 && first4[2] == 0 && first4[3] == 8)) {
        selectText.innerHTML = `<div class="change">
          <img src="./img/Airtel Nigeria Logo.png" alt="">
          </div>`;
      }
      else if ((first4[0] == 0 && first4[1] == 7 && first4[2] == 0 && first4[3] == 5)) {
        selectText.innerHTML = `<div class="change">
          <img src="./img/Globacom Limited Logo.png" alt="">
          </div>`;
      }
    
    }
      
    console.log(phone);
  });
  
