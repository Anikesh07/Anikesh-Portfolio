var tablinks  = document.getElementsByClassName("tab-links")
    var tabcontents  = document.getElementsByClassName("tab-contents")

    console.log(tablinks);

    function opentab(tabname){
        for(let tablink of tablinks){
            console.log(tablink)
            tablink.classList.remove("active-link");
        }
        for(let tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        }