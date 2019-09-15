import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import React from "react";

const { Option } = Select;

class UniversitySelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = debounce(this.handleChange);
    }

    state = {
        data: [],
        value: [],
        fetching: false,
    };

    getUniversities() {
        const url = "http://accentour-final-silver.uedpnpkwfs.us-east-2.elasticbeanstalk.com/get_all_tours";
        return fetch(url)
            .then(response => response.json())
            .then(tours => {
                let uni_table = {};
                tours.forEach((tour) => {
                    uni_table[tour.UniversityName] = true;
                });
                let uni_names = [];
                for (const key in uni_table) {
                    uni_names.push(key)
                }
                return uni_names;
            })
    }

    componentDidMount() {
        this.setState({
            data: [],
            fetching: true
        });
        this.getUniversities()
            .then((universities) => {
                this.setState({ data: universities.map(u => {
                    return {value: u, text: u}
                }), fetching: false });
            });
    }

    handleChange = value => {
        this.setState({
            value
        });
        this.props.onChange(value.map(v => v.label))
    };

    render() {
        const { fetching, data } = this.state;
        let value = this.state.value || this.props.universities.map((uni)=>{return {label: uni, text: uni }});
        return (
            <Select
                mode="multiple"
                labelInValue
                value={value}
                placeholder="Select University"
                notFoundContent={fetching ? <Spin size="small" /> : null}
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                onChange={this.handleChange}
                style={{ width: "100%" }}
            >
                {data.map(d => (
                    <Option key={d.value}>{d.text}</Option>
                ))}
            </Select>
        );
    }
}

export { UniversitySelector }