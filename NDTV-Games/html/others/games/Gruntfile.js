//--====== Sports Story page ======--//
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            //--====== Timeline Header ======--//
            disthTim1: {
                src: ['html/v1.2/cssndtv-col.css', 'html/v1.2/csscolumn/games-col.css', 'html/v1.2/cssbase.css', 'html/v1.2/cssfonts-atf.css', 'html/v1.2/cssheader.css', 'html/v1.2/cssday-night-anim.css', 'html/v1.2/csssetting-dropdown.css', 'html/v1.2/csstop-nav.css', 'html/v1.2/cssbreadcrumb.css', 'html/v1.2/cssadvertisement.css', 'html/v1.2/cssmain-nav.css', 'html/v1.2/cssmain-nav-color.css', 'html/v1.2/csssub-nav.css', 'html/v1.2/cssslide-nav.css', 'html/v1.2/cssslide-nav-right.css', 'html/v1.2/csstooltip.css', 'html/v1.2/csslist-dropdown.css', 'html/v1.2/csslanguage-dropdown.css', 'html/v1.2/cssoverlay.css', 'html/v1.2/csshr-scroll.css', 'html/v1.2/cssimg-gratio.css', 'html/v1.2/csssponsored-ad-card.css', 'html/v1.2/cssside-widget-common.css', 'html/v1.2/csstrending.css', 'html/v1.2/csslatest-news.css', 'html/v1.2/csssocial.css', 'html/v1.2/csssocial-dropdown.css', 'html/v1.2/cssgames/story-page.css', 'html/v1.2/cssgames/base-games.css', 'html/v1.2/cssgames/header-search.css', 'html/v1.2/cssgames/sub-nav.css', 'html/v1.2/cssgames/mob-search.css', 'html/v1.2/cssgames/login-signup.css', 'html/v1.2/cssgames/realted-games.css', 'html/v1.2/cssgames/like-dislike-common.css', 'html/v1.2/cssfooter.css'],
                dest: 'css-upload/css/atf-ndtv-games.css'
            }
            
        },





        //--==============================================
        //Sports minifiy CSS Story, List and Blog Page 
        //==============================================--//
        cssmin: {
            //--====== Sports Header ======--//
            my_targethTim1: { files: [{ expand: true, cwd: 'css-upload/css/', src: ['atf-ndtv-games.css'], dest: 'css-upload/css/', ext: '.css' }] },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
};


// Command 1 grunt concat
// Command 2 grunt cssmin

