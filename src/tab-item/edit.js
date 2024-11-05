import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, store } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ clientId, attributes, setAttributes }) {
	let showID;
	const parentBlockID = useSelect((select) =>
		select(store).getBlockParentsByBlockName(clientId, [
			"goodmotion/tab-group",
		]),
	);
	if (parentBlockID.length > 0) {
		showID = useSelect(
			(select) =>
				select(store).getBlockAttributes(parentBlockID[0])["showID"] || false,
		);
	}
	return (
		<div
			{...useBlockProps({
				className: `${showID === clientId ? "" : "tab-is-hidden"}`,
			})}
		>
			<InspectorControls>
				<PanelBody title={__("Infos", "marvelous-tab")}>
					<TextControl
						label={__("Title", "marvelous-tab")}
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks />
		</div>
	);
}
