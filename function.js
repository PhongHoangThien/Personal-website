var userSettings = document.querySelector(".user-settings");
var darkBtn = document.getElementById("dark-button");
var LoadMoreBackground =document.querySelector(".btn-LoadMore");
function UserSettingToggle(){
    userSettings.classList.toggle("user-setting-showup-toggle");
}
// darkBtn.onclick = function(){
//     darkBtn.classList.toggle("dark-mode-on");
// }

function darkModeON(){
    darkBtn.classList.toggle("dark-mode-on");
   document.body.classList.toggle("dark-theme");
};

function LoadMoreToggle(){
    LoadMoreBackground.classList.toggle("loadMoreToggle");
};


function toggleChildTabs(event) {
    event.classList.toggle('active');
  }

  function toggleTabs(event) {
    const clickedElement = event.currentTarget;
    clickedElement.parentElement.classList.toggle('active');

    // Ngăn chặn sự kiện click từ propagation lên đến menu
    event.stopPropagation();

    childMenu.classList.toggle('active');
  }
  