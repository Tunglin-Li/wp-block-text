import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './editor.scss';
import classnames from 'classnames';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, shadow, shadowOpacity } = attributes;
	const onChangeText = (newText) => setAttributes({ text: newText });
	const onChangeAlign = (newAlign) => setAttributes({ alignment: newAlign });
	const onChangeShadowOpacity = (newShadowOpacity) =>
		setAttributes({ shadowOpacity: newShadowOpacity });
	const toggleShadow = () => setAttributes({ shadow: !shadow });
	const classes = classnames(
		`text-box-align-${alignment} `,
		{ 'has-shadow': shadow },
		[`has-shadow-opacity-${shadowOpacity}`]
	);

	return (
		<>
			<InspectorControls>
				{shadow ? (
					<PanelBody title="Shadow Setting">
						<RangeControl
							marks
							label="Shadow Opacity"
							value={shadowOpacity}
							min={10}
							max={40}
							step={10}
							onChange={onChangeShadowOpacity}
						/>
					</PanelBody>
				) : null}
			</InspectorControls>
			<BlockControls
				controls={[
					{
						title: 'Shadow',
						icon: 'admin-page',
						isActive: shadow,
						onClick: toggleShadow,
					},
				]}
			>
				<AlignmentToolbar onChange={onChangeAlign} value={alignment} />
			</BlockControls>

			<RichText
				{...useBlockProps({
					className: classes,
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__('Your Text', 'text-box')}
				tagName="p"
				allowedFormats={['core/bold']}
			/>
		</>
	);
}
