import React from "react";
import { InputNumber, Row, Col, Button} from "antd"
import { UniversitySelector } from "./university_selector";
import { TourDatePicker } from './tour_date_picker'
import { withRouter } from "react-router";
import PropTypes from "prop-types";


class TourSearch extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.handleSpotsChange = this.handleSpotsChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.searchForTours = this.searchForTours.bind(this);
        this.handleUniversityChange = this.handleUniversityChange.bind(this);
        this.state = {
            universities: []
        }
    }

    componentDidMount() {
        this.setState({
            start_date: this.props.startDate,
            end_date: this.props.endDate,
            universities: this.props.universities
        })
    }

    handleDateChange(dates, dateStrings) {
        this.setState({
            start_date: dateStrings[0],
            end_date: dateStrings[1]
        });
    }

    handleSpotsChange(number_spots) {
        this.setState({
            "number_of_spots": number_spots
        });
    }

    handleUniversityChange(universities) {
        this.setState({
            universities: universities
        })
    }

    searchForTours() {
        const universities = this.state.universities.join(',');
        const start_date = this.state.start_date;
        const end_date = this.state.end_date;
        this.props.history.push(`/search/${universities}/${start_date}/${end_date}/`)
    }

    render() {
        return (
            <Row type="flex" justify="start">
                <Col span={8}>
                    <UniversitySelector universities={this.state.universities} onChange={this.handleUniversityChange}/>
                </Col>
                <Col span={16}>
                    <TourDatePicker name="dates" onChange={this.handleDateChange}/>
                    <label style={{color: "white"}}>Spots</label>
                    <InputNumber number="spots" min={1} max={10} defaultValue={1} onChange={this.handleSpotsChange} />
                    <Button type="primary" icon="search" onClick={this.searchForTours}>
                        Search
                    </Button>
                </Col>
            </Row>
        )
    }
}

const TourSearchWithRouter = withRouter(TourSearch);
export {TourSearchWithRouter}
