import {store, getContext, getElement } from '@wordpress/interactivity'


store('goodmotion/marvelous-tab', {
	state: {
		get isShow() {
			const context = getContext()
			const {attributes} = getElement()
			return attributes.id === context.current
		},
		get tabIsShow() {
			const context = getContext()
			const {attributes} = getElement()
			const tab = `tab-${context.current.replace('section-', '')}`
			return attributes.id === tab
		}
	},
	actions: {
		showTab: () => {
			const context = getContext()
			const {ref} = getElement()
			context.current = ref.dataset.target
		}
	}
})
