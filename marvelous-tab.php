<?php
/**
 * Plugin Name:       Marvelous Tab
 * Description:       Marvelous Tab for Gutenberg
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       marvelous-tab
 *
 * @package Goodmotion
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function goodmotion_marvelous_tab_block_init() {
	register_block_type( __DIR__ . '/build/tab-group' );
	register_block_type( __DIR__ . '/build/tab-item' );
}

add_action( 'init', 'goodmotion_marvelous_tab_block_init' );
