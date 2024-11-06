import { useEffect } from "react";
import { InnerBlocks, useBlockProps, store } from "@wordpress/block-editor";
import { useDispatch, useSelect } from "@wordpress/data";

import "./editor.scss";

const allowedBlocks = ["goodmotion/tab-item"];

export default function Edit(props) {
	const { clientId, setAttributes, attributes } = props;
	const { selectBlock } = useDispatch("core/block-editor");
	// get innerBlock content
	const innerBlocks = useSelect(
		(select) => select(store).getBlock(clientId).innerBlocks,
	);
	// on enter
	useEffect(() => {
		if (innerBlocks.length > 0) {
			setAttributes({ showID: innerBlocks[0].clientId });
		}
	}, []);

	const selectTab = ({ clientId }) => {
		setAttributes({ showID: clientId });
		selectBlock(clientId);
	};

	return (
		<div
			{...useBlockProps()}
			aria-label="Tab control"
			aria-labelledby="tab-control-label"
		>
			<div className="tab-control" id="tab-control-label" role="tablist">
				{innerBlocks.map((block) => (
					<button
						onClick={() => selectTab(block)}
						className={`${
							block.clientId === attributes.showID ? "tab-is-active" : ""
						}`}
						id={`tab-${innerBlocks[0].clientId}`}
						role="tab"
						aria-selected={block.clientId === attributes.showID}
						aria-controls={`tab-content-${block.clientId}`}
					>
						{block.attributes.title}
					</button>
				))}
			</div>
			<div className="tab-content">
				<InnerBlocks allowedBlocks={allowedBlocks} />
			</div>
		</div>
	);
}
