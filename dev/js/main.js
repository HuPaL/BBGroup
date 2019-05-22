/* frameworks */
//=include ../../dist/bower_components/jquery/dist/jquery.js
//=include ../../dist/bower_components/moff/dist/moff.min.js

/* libs */
//=include lib/modernizr-custom.js

/* plugins */

//=include ../../dist/bower_components/bootstrap/js/dist/util.js
//=include ../../dist/bower_components/popper.js/dist/umd/popper.min.js
//=include ../../dist/bower_components/bootstrap/js/dist/dropdown.js
//=include ../../dist/bower_components/bootstrap/js/dist/collapse.js
//=include ../../dist/bower_components/svg4everybody/dist/svg4everybody.min.js

/* separate */
//=include helpers/object-fit.js
//=include helpers/resizer.js
//=include separate/global.js

/* components */
// components/js-header.js

// the main code
console.log($("body"))

window.moffConfig = {
	// Website CSS breakpoints.
	// Default values from Twitter Bootstrap.
	// No need to set xs, because of Mobile first approach.
	breakpoints: {
		sm: 768,
		md: 992,
		lg: 1200
	},
	loadOnHover: true,
	cacheLiveTime: 2000
};

Moff.amd.register({
	id: 'header',
	// depend: {
	// 	js: ['http://chat-domain.com/js/chat-api.js'],
	// 	css: ['http://chat-domain.com/css/chat.css']
	// },
	file: {
		js: ['s/js/components/js-header.js']
	},

	beforeInclude: function() {},
    afterInclude: function() {},
    
	loadOnScreen: ['xs', 'sm', 'md', 'lg'],
	onWindowLoad: true
});

if($('.js-form-check').length > 0) {
    Moff.amd.register({
        id: 'validation',
        depend: {
            js: ['bower_components/jquery-validation/dist/jquery.validate.min.js']
        },
        file: {
            js: ['s/js/components/js-validation.js']
        },

        beforeInclude: function() {},
        afterInclude: function() {},

        loadOnScreen: ['xs', 'sm', 'md', 'lg'],
        onWindowLoad: true
    });
}
