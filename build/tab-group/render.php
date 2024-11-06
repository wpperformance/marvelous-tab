<?php
// generate uniq id if multiple block in content
$block_id = uniqid();
?>
<div <?php echo get_block_wrapper_attributes([
				'class' => 'marvelous-tab-group',
			]); ?>
	data-wp-interactive="goodmotion/marvelous-tab"
	<?php echo wp_interactivity_data_wp_context(['current' => 'section-0' . '_' . $block_id]); ?>>
	<div class="tab-control" role="tablist">
		<?php foreach ($block->inner_blocks as $key => $inner_block): ?>
			<button
				id="tab-<?php echo $key . '_' . $block_id; ?>"
				role="tab"
				aria-controls="section-<?php echo $key . '_' . $block_id; ?>"
				data-wp-on--click="actions.showTab"
				data-wp-class--tab-is-active="state.tabIsShow"
				data-wp-bind--aria-selected="state.tabIsShow">
				<?php echo $inner_block->parsed_block['attrs']['title']; ?>
			</button>
		<?php endforeach; ?>
	</div>
	<div class="tab-content">
		<?php foreach ($block->inner_blocks as $key => $inner_block): ?>
			<div id="section-<?php echo $key . '_' . $block_id; ?>"
				role="tabpanel"
				data-wp-bind--hidden="!state.isShow"
				data-wp-bind--aria-labelledby="tab-<?php echo $key . '_' . $block_id; ?>"
				data-wp-bind--aria-hidden="!state.isShow">
				<?php echo $inner_block->render(); ?>
			</div>
		<?php endforeach; ?>
	</div>
</div>