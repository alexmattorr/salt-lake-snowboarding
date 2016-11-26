<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'salt_lake_snowboarding');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'I7|euq2 nq7@Q82j{PT1$=v~IcR*PVZsV@0a`pvk ssq^^XO}g <^IARDL@rI1|Y');
define('SECURE_AUTH_KEY',  '@z|v_99_|X.]Chd8qo5*z_8RsgL MJ!h_F7&G|nDRY:>|^&orZM<q-KPbL`JG?F!');
define('LOGGED_IN_KEY',    ')*+%`)OU&8[he|unRb^fkfu8QB#SXCv+5X=uQcG%ty+|eo eaK?Uy:h*Lf+21YgW');
define('NONCE_KEY',        'Cbk,vC]bknBHWTQIS<_6t_]0TnRAx4x5~Z&YP<:.XTCljMzq;tuth<%z-Qg/j#y0');
define('AUTH_SALT',        '4niPI#_>=STv+;vCyE^%+G|wgsQ.U@bEh>)|Hz%g^+DP,fEOeMM9aKI,*]W:ZJzw');
define('SECURE_AUTH_SALT', '%nf8N+J6=l9I+]6EOsX>pk.0Plk|zzY*z3$)@C+7^p+&%8ZCX<0hsmo|~d)PITa)');
define('LOGGED_IN_SALT',   'OuYI<=PZ[Q:|hK0&|e0;yVJ*R1V2`nz>_d qP+_Ux~P]d7MWrA)2W0~pJ?Y`6Sr*');
define('NONCE_SALT',       '9Kg9T.-0,g580rQ}zQg=tg R$h&/v+cSgAFA(SS{k]dW@>pAne7O{W|]8{=a<L3S');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
