import { registerBlockType, createBlock } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import v1 from './v1.js';

registerBlockType('tl/text-box', {
	edit: Edit,
	save,
	deprecated: [v1],
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/paragraph'],
				transform: ({ content, align }) => {
					return createBlock('tl/text-box', {
						text: content,
						alignment: align,
					});
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: ['core/paragraph'],
				transform: ({ text, alignment }) => {
					return createBlock('core/paragraph', {
						content: text,
						align: alignment,
					});
				},
			},
		],
	},
});
