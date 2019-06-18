import Root from './components/Root.svelte'

const App = new Root({
	target: document.body,
})

window.App = App

export default App
