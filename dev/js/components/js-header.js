(function(){


    //Open mobile menu
	$('.hamburger').on('click', function(){
		$(this).toggleClass('active');
	});

    //Replace menu, user and social inside mobile menu
	if ($('.js-header').length) {
        var filterMain = $('.site-nav .site-menu'),
            filterMainWrap = $('.site-nav'),
            filterSmWrap = $('.mobile-wrap__menu'),

            filterMainUser = $('.user-wrap .user'),
            filterMainWrapUser = $('.user-wrap'),
            filterSmWrapUser = $('.mobile-wrap__user'),

            filterMainSocial = $('.social-wrap .social-list'),
            filterMainWrapSocial = $('.social-wrap'),
            filterSmWrapSocial = $('.mobile-wrap__social');


        function replaceCategoryContent(){
            if ((filterSmWrap.html().length === 0)){
                filterSmWrap.append(filterMain);
            }
            if ((filterSmWrapUser.html().length === 0)){
                filterSmWrapUser.append(filterMainUser);
            }
            if ((filterSmWrapSocial.html().length === 0)){
                filterSmWrapSocial.append(filterMainSocial);
            }
        }

        function resetCategoryContent(){
            if (!(filterSmWrap.html().length === 0)){
                setTimeout(function () {
                    filterMainWrap.append(filterMain);
                },0)
            }
            if (!(filterSmWrapUser.html().length === 0)){
                setTimeout(function () {
                    filterMainWrapUser.append(filterMainUser);
                },0)
            }
            if (!(filterSmWrapSocial.html().length === 0)){
                setTimeout(function () {
                    filterMainWrapSocial.append(filterMainSocial);
                },0)
            }
        }

        function updateCategoryContent(){
            if (breakPoint == 'md' || breakPoint == 'lg') {
                resetCategoryContent();
            } else {
                replaceCategoryContent();
            }
        }


        $('body').on('resize_xx_once resize_xs_once resize_sm_once resize_md_once resize_lg_once', updateCategoryContent);
        updateCategoryContent();
    };

    //Added collapse style to mobile menu
    function openMobileMenu(){
        if (breakPoint == 'xx' || breakPoint == 'xs' || breakPoint == 'sm') {
            $('.hamburger').attr('data-toggle', 'collapse');
            $('.hamburger').attr('aria-expanded', 'true');
            $('.hamburger').attr('data-target', '#mobile-wrap');
            $('.hamburger').addClass('collapsed');
            $('.mobile-wrap').addClass('collapse');

        } else {

            $('.hamburger').removeAttr('data-toggle', 'collapse');
            $('.hamburger').removeAttr('aria-expanded', 'true');
            $('.hamburger').removeAttr('data-target', '#mobile-wrap');
            $('.hamburger').removeClass('collapsed');
            $('.mobile-wrap').removeClass('collapse');
        }
    }

      $('body').on('resize_xx_once resize_xs_once resize_sm_once resize_md_once resize_lg_once', openMobileMenu);
    openMobileMenu();

    
    //Close success block after submit form
    $('.close-success').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.success').removeClass('active');
    });

    // Remove disbled attribute
    $('.your-option').on('click', function() {
        $(this).closest('.solution-form__option').find('.your-option-text').removeAttr('disabled');
    });
    // Add disbled attribute
    $('.your-activity').on('click', function() {
        $(this).closest('.solution-form__item--activity').find('.solution-form__option .your-option-text').prop('disabled', true);
    });

    
})();