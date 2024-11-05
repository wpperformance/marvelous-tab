import {useEffect} from 'react';
import { InnerBlocks, useBlockProps, store } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';


import './editor.scss';

const allowedBlocks = ['goodmotion/tab-item']

export default function Edit(props) {
	const { clientId, setAttributes, attributes } = props;
	// get innerBlock content
	const innerBlocks = useSelect(
	   (select) => select(store).getBlock(clientId).innerBlocks,
	);
	// on enter
	useEffect(() => {
		if(innerBlocks.length > 0) {
			setAttributes({showID: innerBlocks[0].clientId});
		}
	}, []);

	return (
		<div { ...useBlockProps() }>
			<div className="tab-control">
				{innerBlocks.map(block => (
					<button
						onClick={() => setAttributes({showID:block.clientId})}
						className={block.clientId === attributes.showID ? 'tab-is-active' : ''}>
						{block.attributes.title}
					</button>
				))}
			</div>
			<div className="tab-content">
				<InnerBlocks allowedBlocks={allowedBlocks}/>
			</div>
		</div>
	);
}
