import React from 'react';
import { Row, Col } from "antd"
import {UniversitySelector} from "../home/university_selector";
import "./search_form.scss"


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleUniversityChange = this.handleUniversityChange.bind(this);
    }

    handleUniversityChange(universities) {
        this.setState({
            universities: universities
        })
    }

    render() {
        return (
            <Row id="search_form">
                <Col>

                </Col>
                <UniversitySelector onChange={this.handleUniversityChange}/>
            </Row>
        )
    }
}

export { SearchForm }

