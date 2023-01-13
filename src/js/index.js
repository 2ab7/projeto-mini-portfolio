const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {

        if (tab.classList.contains("selected")) {
            return;
        }
        selectTab(tab)

        const informationSelected = document.querySelector(".informations.selected");
        informationSelected.classList.remove("selected");

        const idOfElementInformationsOfTab = `informations-${tab.id}`;

        const informationsToBeShowed = document.getElementById(idOfElementInformationsOfTab);
        informationsToBeShowed.classList.add("selected")
    });
});

function selectTab(tab) {
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");
    tab.classList.add("selected");
}