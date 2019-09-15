import React from 'react';
import {TourSearchWithRouter} from "../home/tour_search";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            universities: props.match.params.universities.split(','),
            start_date: props.match.params.start_date,
            end_date: props.match.params.end_date
        }
    }

    componentDidMount() {
        const url = "http://accentour-final-silver.uedpnpkwfs.us-east-2.elasticbeanstalk.com/get_all_tours";
        fetch(url)
            .then(response => response.json())
            .then(tours => tours.filter((tour) => {
                return this.state.universities.includes(tour.UniversityName) &&
                    Date.parse(this.state.start_date) <= Date.parse(tour.Date) &&
                    Date.parse(tour.Date) <= this.state.end_date
            }))
            .then(tours => {
                console.log('uni filtered', tours)
            })
    }

    render() {
        return (
            <div>
                <TourSearchWithRouter
                    startDate={this.props.match.params.start_date}
                    endDate={this.props.match.params.end_date}
                    universities={this.props.match.params.universities.replace(',', ' ')}
                />
                <div>
                    <h1>universities: {this.props.match.params.universities.replace(',', ' ')}</h1>
                    <h1>start_date: {this.props.match.params.start_date}</h1>
                    <h1>end_date: {this.props.match.params.end_date}</h1>
                </div>
            </div>
        );
    }
}

export { SearchPage }
