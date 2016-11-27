<?php
  //Template Name:  Single
  update_option('current_page_template','single'); // <----- this adds a body class
  get_header();

  if (have_posts()): while (have_posts()) : the_post();
    $image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
?>

<div class="single-post">
  <figure style="background-image: url(<?php echo $image; ?>);"></figure>
  <div class="post-info">
    <h1><?php the_title(); ?></h1>
    <h6><?php the_time('F j, Y'); ?></h6>
    <p><?php the_content(); ?></p>
  </div>
</div>


<?php endwhile; endif; ?>

<?php
  include 'inc/bottom-form-section.php';
  get_footer();
?>
