// VueJs

new Vue({
    el: "#app",
    data: {
        onOffCart: "none",
        onOffSignInList: "none",
        onOffSignIn: "none",
        username: '',
        password: '',
        usernameErrorMessageUsername: '',
        usernameErrorMessagePassword: '',
        colorError: '',
    },
    beforeDestroy() {
        this.resetData();
    },
    methods: {
        appearCart: function () {
            if (this.onOffCart == "none") {
                this.onOffCart = "block";
            } else {
                this.onOffCart = "none";
            }
        },
        appearSignInList: function () {
            if (this.onOffSignInList == "none") {
                this.onOffSignInList = "block";
            } else {
                this.onOffSignInList = "none";
            }
        },
        // Sign In
        appearSignIn: function () {
            if (this.onOffSignIn == "none") {
                this.onOffSignIn = "flex";
            } else {
                this.onOffSignIn = "none";
            }
        },
        handleBackgroundClick: function (event) {
            var backgroundElement = document.querySelector('.sign_In_Background');
            if (event.target === backgroundElement) {
                if (this.onOffSignIn === 'flex') {
                    this.onOffSignIn = "none";
                }
            }
        },
        clickSubmit: function () {
            if (this.username === '' && this.password === '') {
                this.usernameErrorMessageUsername = '入力してください。'
                this.usernameErrorMessagePassword = '入力してください。'
                this.colorError = 'red'
            } else {

            }
        },
        resetData: function () {
            this.username = '';
            this.password = '';
        }


    }
});

// ReactJs

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab_item");
const panes = $$(".tab_pane");

const tabActive = $(".tab_item.active");
const line = $(".tabs .line");

requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $(".tab_item.active").classList.remove("active");
        $(".tab_pane.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});



