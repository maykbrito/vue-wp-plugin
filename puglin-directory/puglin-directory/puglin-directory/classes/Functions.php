<?php

namespace VWP;

class Functions {

    public function __construct()
    {
        add_action( 'wp_enqueue_scripts', array($this, 'enqueue') );
    }
    
	public function enqueue() {
        wp_enqueue_script('vue-wp-plugin-bundle', plugin_dir_url( dirname( __FILE__ ) ) . 'js/bundle.js');
    }
    
}