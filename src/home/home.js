import React from "react"
import { Layout, Avatar, Icon, Card, Row, Col} from "antd"
import {TourSearchWithRouter} from "./tour_search";

const { Meta } = Card;


function onChange(value) {
    console.log('changed', value);
}

function Home() {
    return (
        <div style={{
            paddingBottom: 100,
            backgroundImage: "url('landing_page_background.jpg')",
            height: '100%',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <Row type="flex" justify="space-around" align="middle">
                <Col
                    span={20}
                    style={{
                        paddingTop: 50
                    }}
                >
                    <h1 style={{
                        fontSize: 60,
                        color: 'white',
                        marginBottom: 0
                    }}>
                        Book university tours.
                    </h1>
                    <h2
                        style={{
                            marginBottom: 10,
                            color: 'white'
                        }}>
                        Find a tour. Find your place. Explore your possibilities.</h2>
                    <TourSearchWithRouter />
                    <Row>
                        <Layout style={{marginTop: 50, padding: 20, background: "rgba(255, 255, 255, 0.9)"}}>
                            <Col
                                span={20}
                            >
                                <h1 style={{
                                    fontSize: 40,
                                    color: '#3ba706',
                                    marginBottom: 0
                                }}>
                                    Upcoming Tours
                                </h1>
                            </Col>
                            <Row type="flex" justify="space-around" align="middle">
                                {
                                    [1, 2, 3, 4, 5, 6, 7].map((i) => (
                                        <Col xs={12} md={8} key={i}>
                                            <Card
                                                style={{ width: 300, margin: 25 }}
                                                cover={
                                                    <img
                                                        alt="example"
                                                        src="uni_pictures/university_of_waterloo.jpg"
                                                    />
                                                }
                                                actions={[
                                                    <Icon type="ellipsis" key="ellipsis" />
                                                ]}
                                            >
                                                <Meta
                                                    avatar={<Avatar src="uni_logos/waterloo_logo.png" />}
                                                    title="University of Waterloo"
                                                    description="Date: 1/10/2019 Time: 9:00 Spots: 29"
                                                />
                                            </Card>
                                        </Col>))
                                }
                            </Row>

                        </Layout>
                    </Row>
                </Col>
            </Row>
            <Row>

            </Row>
        </div>
    );
}


export { Home }
