
//--====== Doctor Home Desktop ======--//
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            
            //--====== Doctor Home Desktop ======--//
            disthDoctorHomeDesktop: {
                src: ['html/v1.2/css/base/home-header.css',
                'html/v1.2/css/base/base-doctor.css',
                'html/v1.2/css/grid/main-card-grid1.css',
                'html/v1.2/css/card-widget/lines-spacing-padding.css',  
                'html/v1.2/css/elements/tittle-tabs-color.css',
                'html/v1.2/css/elements/list-news.css', 
                'html/v1.2/css/cards/cards-hm.css',
                'html/v1.2/css/cards/cards-content.css',
                'html/v1.2/css/cards/doctor-cards-content.css',
                'html/v1.2/css/cards/card-b.css',
                'html/v1.2/css/cards/card-c.css',
                'html/v1.2/css/cards/card-c_v1.css',
                'html/v1.2/css/cards/card-c_v2.css',
                'html/v1.2/css/cards/card-d.css',
                'html/v1.2/css/cards/card-d_v1.css',
                'html/v1.2/css/cards/card-h.css',
                'html/v1.2/css/cards/card-bt.css',
                'html/v1.2/css/cards/card-image-transition.css', 
                'html/v1.2/css/elements/tb-tab.css',
                'html/v1.2/css/elements/Calc-metrics.css',
                'html/v1.2/css/elements/baby-name-finder.css',
                'html/v1.2/css/elements/find-health-solution.css',
                'html/v1.2/css/elements/doctor-faq.css',
                'html/v1.2/css/elements/BMI-form.css',
                'html/v1.2/css/widgets/hr-list1.css',
                'html/v1.2/css/widgets/side-widget-home.css',
                'html/v1.2/css/elements/helper.css'],


                dest: 'html/atf-btf/atf-doctor-home-desktop.css'
            },

            //--====== Doctor Home WAP ======--//

            disthDoctorHomeWap: {
                src: ['html/v1.2/css/base/home-header.css',
                'html/v1.2/css/base/base-doctor.css',
                'html/v1.2/css/grid/main-card-grid1.css',
                'html/v1.2/css/card-widget/lines-spacing-padding.css',
                
                'html/v1.2/css/wap-elements/tittle-tabs-color.css',
                'html/v1.2/css/wap-elements/full-rgt-hrscroll.css',
                'html/v1.2/css/cards/doctor-cards-content.css',
                
                'html/v1.2/css/cards-wap/cards-content.css',
                'html/v1.2/css/cards-wap/list-news.css',
                'html/v1.2/css/cards-wap/card-hm.css',
                'html/v1.2/css/cards-wap/card-a.css',
                'html/v1.2/css/cards-wap/card-b.css',
                'html/v1.2/css/cards-wap/card-d.css',
                'html/v1.2/css/cards-wap/card-c.css',
                'html/v1.2/css/cards-wap/card-c_v1.css',
                'html/v1.2/css/cards-wap/card-h.css',
                'html/v1.2/css/cards-wap/card-bt.css',
                'html/v1.2/css/cards/card-image-transition.css',
                
                'html/v1.2/css/elements/tb-tab.css',
                'html/v1.2/css/elements/Calc-metrics.css',
                'html/v1.2/css/elements/find-health-solution.css',
                'html/v1.2/css/elements/doctor-faq.css',
                'html/v1.2/css/elements/baby-name-finder.css',
                'html/v1.2/css/elements/BMI-form.css',
                
                
                'html/v1.2/css/widgets/hr-list1.css',
                'html/v1.2/css/widgets/side-widget-home.css',
                'html/v1.2/css/elements/helper.css'],


                dest: 'html/atf-btf/atf-doctor-home-wap.css'
            },


            //--====== Doctor FAQ Listing ======--//
            disthDoctorFaq_Listing: {
                src: ['html/v1.2/css/base/inside-header.css',
                'html/v1.2/css/base/base-doctor.css',
                'html/v1.2/css/elements/ask-doctor-widget.css',
                
                'html/v1.2/css/widgets/faq-title-widget.css',
                'html/v1.2/css/widgets/seo-text-bottom.css',
                'html/v1.2/css/cards/doctor-cards-content.css',
                'html/v1.2/css/elements/faq-listing.css',
                'html/v1.2/css/elements/tooltip-link.css',
                'html/v1.2/css/widgets/side-widget-home.css',
                'html/v1.2/css/elements/helper.css',],


                dest: 'html/atf-btf/atf-doctor-faq-listing.css'
            },







        },





        //--==============================================
        // Doctor 
        //==============================================--//
        cssmin: {

            //--====== Doctor Home Desktop======--//
            my_targethDoctorHomeDesktop: { files: [{expand: true, cwd: 'html/atf-btf/', src: ['atf-doctor-home-desktop.css'], dest: 'html/atf-btf/', ext: '.css' }] },

            //--====== Doctor Home WAP ======--//
            my_targethDoctorHomeWap: { files: [{expand: true, cwd: 'html/atf-btf/', src: ['atf-doctor-home-wap.css'], dest: 'html/atf-btf/', ext: '.css' }] },

            //--====== FAQ Listing ======--//
            my_targethDoctorFaq_Listing: { files: [{expand: true, cwd: 'html/atf-btf/', src: ['atf-doctor-faq-listing.css'], dest: 'html/atf-btf/', ext: '.css' }]}



        }





    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
};


// Command 1 grunt concat
// Command 2 grunt cssmin

