$(document).ready(function() {
	function cust_tab() {
		if (jQuery("[data-tab]").length > 0) {
			/* data load in each tab on page load */
			jQuery(".JS_tbBt").each(function (index, elem) {
				var file_name = jQuery(elem).attr("data-tab"),
					trigger_ref = (!!jQuery(elem).attr('data-trigger') && jQuery(elem).attr('data-trigger') !== '') ? jQuery(elem).attr('data-trigger') : '';

				// for menu's where data will come on page load via ajax call from external file
				// to add height in first menu content box OR
				// to determine first sub tab inside menu
				if ((index == 0) || (jQuery(elem).parents().hasClass('JS_tbBt-cn') && jQuery(elem).parent().prev().length == 0)) {
					var actHig = trigger_ref !== '' ? jQuery('.JS_tb-it[data-tab="' + file_name + '"][data-trigger="' + trigger_ref + '"]').innerHeight() : jQuery('.JS_tb-it[data-tab="' + file_name + '"]').innerHeight();

					if (trigger_ref !== '') {
						jQuery('.JS_tb-it[data-tab="' + file_name + '"][data-trigger="' + trigger_ref + '"]').addClass('JS_tbCn-act');
						jQuery('.JS_tb-it[data-tab="' + file_name + '"][data-trigger="' + trigger_ref + '"]').parents('.JS_tb-data-cn').css({
							'height': actHig,
							'overflow': 'hidden'
						});
					} else {
						jQuery('.JS_tb-it[data-tab="' + file_name + '"]').addClass('JS_tbCn-act');
						jQuery('.JS_tb-it[data-tab="' + file_name + '"]').parents('.JS_tb-data-cn').css({
							'height': actHig,
							'overflow': 'hidden'
						});
					}
				}
			});

			/* active tab on click */
			jQuery(document).on('click', '.JS_tbBt', function () {
				var crtTabHig,
					file_name = jQuery(this).attr('data-tab'),
					trigger_ref = (!!jQuery(this).attr('data-trigger') && jQuery(this).attr('data-trigger') !== '') ? jQuery(this).attr('data-trigger') : '';

				/* start ajax call */
				if (jQuery(this).attr("data-defaultLoaded") == 'false') {
					$.ajax({
						url: file_name,
						async:false, 
						beforeSend: function () {
							// Show image container
							$("#loader").show();
						},
						success: function (data) {
							if (trigger_ref !== '') {
								jQuery('.JS_tb-it[data-tab="' + file_name + '"][data-trigger="' + trigger_ref + '"]').parents('.JS_tb-data-cn').find('.JS_tb-wr .JS_ajx-wp').fadeOut(300).remove();
								jQuery('.JS_tb-it[data-tab="' + file_name + '"][data-trigger="' + trigger_ref + '"]').find('.JS_tb-wr').html(data);
							} else {
								jQuery('.JS_tb-it[data-tab="' + file_name + '"]').parents('.JS_tb-data-cn').find('.JS_tb-wr .JS_ajx-wp').fadeOut(300).remove();
								jQuery('.JS_tb-it[data-tab="' + file_name + '"]').find('.JS_tb-wr').html(data);				   			
							}
						},				   
						error: function (jqXHR, textStatus, errorThrown) {
							var s = jqXHR.status + ": " + jqXHR.statusText;
							$('[include-html="' + file_name + '"]').html(file_name + "-" + s);
						},
						complete: function (data) {
							$("#loader").hide();
						}
					});
				} 
				/* end ajax call */

				if (jQuery(this).hasClass('JS_tbBt-act')) {
					return;
				}

				var actContHig,
					sub_tab_h,
					act_tab_parent = jQuery(this).closest('.JS_tbBt-cn'),
					ref_tab_in = jQuery(this).parent().hasClass('JS_tbBt-cn_in') ? true : false;

				if (ref_tab_in) {
					var act_tab_cont_parent = jQuery(this).parent('.JS_tbBt-cn').siblings('.JS_tb-data-cn');
				} else {
					var act_tab_cont_parent = trigger_ref !== '' ? jQuery('.JS_tb-it[data-tab="' + file_name + '"][data-trigger="' + trigger_ref + '"]').parent('.JS_tb-data-cn') : jQuery('.JS_tb-it[data-tab="' + file_name + '"]').parent('.JS_tb-data-cn');
				}

				var act_tab_cont = jQuery(act_tab_cont_parent).find('> .JS_tb-it');

				// clicked element active and inactive
				jQuery(act_tab_parent).find('.JS_tbBt').parent().removeClass('TlTbs-act');
				jQuery(this).parent().addClass('TlTbs-act');

				// content area show hide
				jQuery(act_tab_cont).removeClass('> JS_tbCn-act');

				if (trigger_ref !== '') {
					jQuery(act_tab_cont_parent).find('> .JS_tb-it[data-tab="' + file_name + '"][data-trigger="' + trigger_ref + '"]').addClass('JS_tbCn-act');
				} else {
					jQuery(act_tab_cont_parent).find('> .JS_tb-it[data-tab="' + file_name + '"]').addClass('JS_tbCn-act');
				}

				if (ref_tab_in) {
					var sub_tab_h_arr = [];

					if (jQuery(act_tab_cont_parent).find('> .JS_tbCn-act .JS_tb-wr').length > 1) {
						jQuery(act_tab_cont_parent).find('> .JS_tbCn-act .JS_tb-wr').each(function (key, item) {
							sub_tab_h_arr.push(item.clientHeight);
						});

						sub_tab_h = Math.max(...sub_tab_h_arr) + 105;
					} else {
						sub_tab_h = jQuery(act_tab_cont_parent).closest('.JS_tb-data-cn').find('> .JS_tbCn-act').innerHeight();
					}

					var current_parent = jQuery(act_tab_cont_parent).attr('id', 'cur_parent');

					jQuery(current_parent).removeAttr('style');
					$(current_parent).css({
						'height': sub_tab_h + 'px'
					}).attr('style', 'height:' + sub_tab_h + 'px; overflow: hidden;').prop('style', 'height:' + sub_tab_h + 'px; overflow: hidden;');

					setTimeout(function () {
						jQuery(act_tab_cont_parent).parents('.JS_tb-data-cn').removeAttr('style');
						jQuery(act_tab_cont_parent).parents('.JS_tb-data-cn').css({
							'height': current_parent.parents('.JS_tb-wr').innerHeight() + 'px'
						}).attr(
							'style', 'height:' + current_parent.parents('.JS_tb-wr').innerHeight() + 'px; overflow: hidden;'
						).prop(
							'style', 'height:' + current_parent.parents('.JS_tb-wr').innerHeight() + 'px; overflow: hidden;'
						);
					}, 500);

					jQuery(act_tab_cont_parent).removeAttr('id');
					
				} else {
					setTimeout(function () {
						var actHig = trigger_ref !== '' ? jQuery('.JS_tb-it[data-tab="' + file_name + '"][data-trigger="' + trigger_ref + '"]').innerHeight() : jQuery('.JS_tb-it[data-tab="' + file_name + '"]').innerHeight();
					

					//var actHig = trigger_ref !== '' ? jQuery('.JS_tb-it[data-tab="' + file_name + '"][data-trigger="' + trigger_ref + '"]').innerHeight() : jQuery('.JS_tb-it[data-tab="' + file_name + '"]').innerHeight();
					
					jQuery(act_tab_cont_parent).css({
						'overflow': 'hidden',
						'height': actHig
						//'height': jQuery(act_tab_cont_parent).innerHeight()
					});
				}, 200);
				}

				// active_first_tab(jQuery(this), act_tab_parent, false);
			});
		}
	}
	cust_tab(); 
	$(window).resize(function(){
	//	cust_tab();
	});
});
 