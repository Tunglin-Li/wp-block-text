<?php
/**
 * Plugin Name:       Text Box
 * Description:       A Box of Text
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Tunglin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       text-box
 *
 * @package           block
 */
function tl_text_box_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'tl_text_box_block_init' );