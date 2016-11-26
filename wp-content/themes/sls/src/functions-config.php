<?php // ==== CONFIGURATION (CUSTOM) ==== //

// Specify custom configuration values in this file; these will override values in `functions-config-defaults.php`
// The general idea here is to allow for themes to be customized for specific installations

defined( 'VOIDX_SCRIPTS_PAGELOAD' )       || define( 'VOIDX_SCRIPTS_PAGELOAD', false );

// toggle admin bar
show_admin_bar(false);

// allows for featured image.
add_theme_support( 'post-thumbnails' );

// increases field limit
add_filter( 'postmeta_form_limit' , 'customfield_limit_increase' );
function customfield_limit_increase( $limit ) {
  $limit = 250;
  return $limit;
}
