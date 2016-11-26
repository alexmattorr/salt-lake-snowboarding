<?php
  //Template Name:  Index
  update_option('current_page_template','home'); // <----- this adds a body class
  get_header();

  echo "<ul class='post-wrapper'>";

    $args = array('post_type' => 'post','posts_per_page' => 10,'order' => 'DESC');
    $my_query = new WP_Query($args);
    while ($my_query->have_posts()) : $my_query->the_post();

      $image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
?>

      <li><a href="<?php the_permalink(); ?>">
        <figure style="background-image: url(<?php echo $image; ?>);"></figure>
        <h4><?php the_title(); ?></h4>
        <h6><?php the_time('F j, Y'); ?></h6>
        <p><?php the_excerpt(); ?></p>
      </a></li>

<?php

    endwhile; wp_reset_query();

  echo "</ul>";

  // echo do_shortcode('[ajax_load_more post_type="post" offset="9" posts_per_page="6" pause="true" scroll="false" images_loaded="true"]');

  get_footer();
?>