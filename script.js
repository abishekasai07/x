/* =========================================================
   ICC CHAMPIONS ARCHIVE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       FILTER BUTTONS
       ----------------------------------------------------- */

    const odiButton = document.getElementById("odi-filter");
    const t20Button = document.getElementById("t20-filter");
    const testButton = document.getElementById("test-filter");


    /* -----------------------------------------------------
       TOURNAMENT SECTIONS
       ----------------------------------------------------- */

    const odiSection =
        document.getElementById("odi-world-cup");

    const t20Section =
        document.getElementById("t20-world-cup");

    const testSection =
        document.getElementById("world-test-championship");


    /* -----------------------------------------------------
       ARRAYS
       ----------------------------------------------------- */

    const buttons = [
        odiButton,
        t20Button,
        testButton
    ];

    const sections = [
        odiSection,
        t20Section,
        testSection
    ];


    /* -----------------------------------------------------
       SHOW TOURNAMENT
       ----------------------------------------------------- */

    function showTournament(section, button) {

        /*
         * Hide all tournament sections
         */

        sections.forEach(function (item) {

            item.classList.remove(
                "active-section"
            );

        });


        /*
         * Remove active state
         * from all buttons
         */

        buttons.forEach(function (item) {

            item.classList.remove(
                "active"
            );

        });


        /*
         * Show selected section
         */

        section.classList.add(
            "active-section"
        );


        /*
         * Activate selected button
         */

        button.classList.add(
            "active"
        );


        /*
         * Scroll to content
         */

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }


    /* -----------------------------------------------------
       ODI BUTTON
       ----------------------------------------------------- */

    odiButton.addEventListener(
        "click",
        function () {

            showTournament(
                odiSection,
                odiButton
            );

        }
    );


    /* -----------------------------------------------------
       T20 BUTTON
       ----------------------------------------------------- */

    t20Button.addEventListener(
        "click",
        function () {

            showTournament(
                t20Section,
                t20Button
            );

        }
    );


    /* -----------------------------------------------------
       TEST BUTTON
       ----------------------------------------------------- */

    testButton.addEventListener(
        "click",
        function () {

            showTournament(
                testSection,
                testButton
            );

        }
    );


    /* -----------------------------------------------------
       DEFAULT VIEW
       ----------------------------------------------------- */

    showTournament(
        odiSection,
        odiButton
    );

});