const SwitchBtn = props => {
	return <button onClick={props.switch}>{props.clock ? "Off" : "On"}</button>
}
class App extends React.Component {
	state = {
		clock: true,
	}
	handleBtn = () => {
		this.setState({
			clock: !this.state.clock,
		})
	}
	render() {
		return (
			<div>
				<SwitchBtn clock={this.state.clock} switch={this.handleBtn} />
				{this.state.clock && <Clock />}
			</div>
		)
	}
}
class Clock extends React.Component {
	interval = ""
	state = {
		time: this.getTime(),
	}
	getTime() {
		const time = new Date()
		return {
			hour: time.getHours(),
			minutes: time.getMinutes(),
			seconds: time.getSeconds(),
		}
	}
	setTime() {
		const time = this.getTime()
		this.setState({
			time,
		})
	}
	componentDidMount() {
		this.interval = setInterval(this.setTime.bind(this), 1000)
	}
	componentWillUnmount() {
		clearInterval(this.interval)
	}
	render() {
		const { hour, minutes, seconds } = this.state.time
		return (
			<>
				<h2>
					{hour} : {minutes < 10 ? `0${minutes}` : `${minutes}`} :{" "}
					{seconds < 10 ? `0${seconds}` : `${seconds}`}
				</h2>
			</>
		)
	}
}
ReactDOM.render(<App />, document.getElementById("root"))
