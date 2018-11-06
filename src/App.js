import React, {Component} from 'react';
//import update from 'react-addons-update';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import MapWrapper from './components/MapWrapper/index';
import Sidebar from "./components/Sidebar/index";
import styles from './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDistrictId: null,
            districts: [],
        };
    }

    loadDistricts(){
        fetch(`${process.env.REACT_APP_API}/districts`)
            .then( (response) => {
                return response.json()
            })
            .then( (json) => {
                console.log(json);
                this.setState({
                    districts: json,
                });
            });
    }

    loadDistrict(id){
        fetch(`${process.env.REACT_APP_API}/districts/${id}`)
            .then( (response) => {
                return response.json()
            })
            .then( (json) => {
                this.setState({
                    districts: json,
                });
            });
    }

    componentDidMount() {
        this.loadDistricts();
    }

    onDistrictSelect(id) {
        this.setState({
            selectedDistrictId: id
        });
    }

    onSidebarClose() {
        this.setState({
            selectedDistrictId: null
        });
    }

    render() {
        const districtsDetails = this.state.districts.find((e) => {
            return e.id === this.state.selectedDistrictId
        });

        return (
            <div className="box">
                <div className="row header">
                    <Header/>
                </div>
                <div className="row content">
                    <MapWrapper
                        zones={this.state.districts}
                        isWide={!this.state.selectedDistrictId}
                        onDistrictSelect={(id) => this.onDistrictSelect(id)}
                    />
                    <Sidebar
                        isOpen={this.state.selectedDistrictId}
                        district={districtsDetails}
                        onClose={() => this.onSidebarClose()}
                    />
                </div>
                <div className="row footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
