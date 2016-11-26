<?php $image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>

<li><a href="<?php the_permalink(); ?>">
	<figure style="background-image: url(<?php echo $image; ?>);"></figure>
	<h4><?php the_title(); ?></h4>
	<h6><?php the_time('F j, Y'); ?></h6>
	<p><?php the_excerpt(); ?></p>
</a></li>