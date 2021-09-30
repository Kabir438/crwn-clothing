import React, {Component} from "react";

import './darkorlight.style.scss'

class DarkOrLight extends Component {
    constructor() {
        super()
        this.state = {
            darkOrLight: localStorage.getItem('darkOrLight') ? localStorage.getItem('darkOrLight') : 'light'
        }
    }
    color = () => {
        switch(document.getElementById('checkbox-drl').checked) {
            case(true):
                document.querySelector(':root').style.setProperty('--default-border', 'white');
                document.querySelector(':root').style.setProperty('--default-bg', 'black');
                document.querySelector(':root').style.setProperty('--invert-bg', 'white');
                document.querySelector(':root').style.setProperty('--default-text-color', 'white');
                document.querySelector(':root').style.setProperty('--invert-text-color', 'black');
                document.querySelector(':root').style.setProperty('--default-brightness', '1.3');
                document.querySelector(':root').style.setProperty('--sub-color', '#4a4a4a');
                break;
            case(false):
                document.querySelector(':root').style.setProperty('--default-border', 'black');
                document.querySelector(':root').style.setProperty('--default-bg', 'white');
                document.querySelector(':root').style.setProperty('--invert-bg', 'black');
                document.querySelector(':root').style.setProperty('--default-text-color', 'black');
                document.querySelector(':root').style.setProperty('--invert-text-color', 'white');
                document.querySelector(':root').style.setProperty('--default-brightness', '0.4');
                document.querySelector(':root').style.setProperty('--sub-color', 'white');
                break;
            default:
                alert('error with UI, please refresh')
        }
    }
    handleChange = () => {
        switch(document.getElementById('checkbox-drl').checked) {
            case(true):
                document.querySelector('meta[name="theme-color"]').content = "black";
                this.setState({
                    darkOrLight: 'dark'
                })
                localStorage.setItem('darkOrLight', 'dark');
                break;
            case(false):
                document.querySelector('meta[name="theme-color"]').content = "white";
                this.setState({
                    darkOrLight: 'light'
                })
                localStorage.setItem('darkOrLight', 'light')
                break;
            default:
                alert('error with UI, please refresh')
        }
        this.color()
    }
    handleClick = () => {
        this.handleChange()
        if(!document.getElementById('checkbox-drl').checked) {
            document.getElementById('checkbox-drl').checked = true;
            this.setState({
                darkOrLight: 'dark'
            })
            localStorage.setItem('darkOrLight', 'dark');
        }
        else {
            document.getElementById('checkbox-drl').checked = false
            document.querySelector('meta[name="theme-color"]').content = "white";
            this.setState({
                darkOrLight: 'light'
            })
            localStorage.setItem('darkOrLight', 'light')
        }
        this.color()
    }
    componentDidMount() {
        if(this.state.darkOrLight === 'dark') {
            document.getElementById('checkbox-drl').checked = true
        }
        this.color()
    }
    render() {
        return (
            <span className='darkOrLight-container'>
                <label className="switch">
                    <input onChange={this.handleChange} type="checkbox" id="checkbox-drl"/>
                    <span id="round" className="slider round"></span>
                </label>
                <h6 onClick={this.handleClick} className='mode-label' style={{left: localStorage.getItem('signedIn') === 'true' ? (this.state.darkOrLight === 'dark' ? '75.395%' : '77.15%') : (this.state.darkOrLight ===  'dark' ? '75.995%' : '77.75%'), color: this.state.darkOrLight === 'dark' ? 'white' : 'black'}}>{this.state.darkOrLight.toUpperCase()}</h6>
            </span>
        )
    }
}

export default DarkOrLight