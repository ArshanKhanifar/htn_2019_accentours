import React from "react"
import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

function disabledDate(current) {
    return current && current < moment().endOf('day');
}

function TourDatePicker(props) {
    return (<RangePicker
            onChange={props.onChange}
            disabledDate={disabledDate}
            format="YYYY-MM-DD"
        />)
}

export { TourDatePicker }

