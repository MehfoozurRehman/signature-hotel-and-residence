import React, { Component } from "react";
import ring from "../Assets/ring.png";
import contactImg from "../Assets/contactImg.jpg";
import plansImage1 from "../Assets/plans/1.jpg";
import Header from "../Components/Header";
import construction_update__img from "../Assets/construction_update__img.jpg";
import work__img from "../Assets/work__img.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Footer from "../Components/Footer";
import _, { difference } from "lodash";
import { GetAllMileStones } from "../Api/milestone";
import { GetAllUpComingPlans } from "../Api/upcomingPlans";
import { contactRequest } from "../Api/contact";
import { CustomSuccess, CustomError } from "../Components/Toast";
import PhotoGallery from "../Components/PhotoGallery";
import ConstructionUpdateControl from "../Components/ConstructionUpdateControl";
import ContactSection from "../Components/ContactSection";
import moment from 'moment';
export default class ConstructionUpdateScreen extends Component {
    constructor() {
        super();
        this.state = {
            isScrolling: false,
            isHeaderOpen: window.innerWidth > 1000,
            constructionUpdateTitle: "",
            constructionUpdateContent: "",
            constructionUpdateImg: "",
            constructionUpdateProgress: 66,
            mileStonesList: [],
            upComingPlansList: [],
            name: "",
            phone: "",
            preferredTime: "",
            isLoading: false,
            isSent: false,
        };
    }

    async componentDidMount() {
        await this.fetchMileStonesList();
        await this.fetchUpComingList();

        this.props.setOnWelcome(false);
    }

    resetForm = () => {
        this.setState({
            isSent: false,
            name: "",
            phone: "",
            preferredTime: ""
        })
    }

    fetchUpComingList = async () => {
        await GetAllUpComingPlans()
            .then(({ data }) => {
                const result = _.get(data, "data");
                if (result) {
                    this.setState({
                        upComingPlansList: result,
                    });
                }
            })
            .catch(() => {
                //CustomError('Something went wrong');
            });
    };
    fetchMileStonesList = async () => {
        await GetAllMileStones()
            .then(({ data }) => {
                const result = _.get(data, "data");
                if (result) {
                    if (result.length > 0) {
                        let unsortedMilestoneList = result;

                        debugger;
                        unsortedMilestoneList.sort((a, b) => Date.parse(a.milestone_expected_completion_date.toString()) - Date.parse(b.milestone_expected_completion_date.toString()));
                        this.setState({
                            mileStonesList: unsortedMilestoneList,
                            constructionUpdateTitle: unsortedMilestoneList[0].milestone_title,
                            constructionUpdateContent: unsortedMilestoneList[0].milestone_description,
                            constructionUpdateImg: unsortedMilestoneList[0].milestone_image_url != null ?
                                process.env.REACT_APP_BASEURL + unsortedMilestoneList[0].milestone_image_url : work__img,
                        });
                    }

                }
            })
            .catch(() => {
                //CustomError('Something went wrong');
            });
    };

    requestACall = async () => {
        this.setState({
            isLoading: true,
        });

        if (this.state.name === "") {
            CustomError("Name missing");
            this.setState({
                isLoading: false,
            });
            return null;
        } else if (this.state.phone === "") {
            CustomError("Phone missing");
            this.setState({
                isLoading: false,
            });
            return null;
        } else if (/^[0-9]{9,11}$/.test(this.state.phone) === false) {
            debugger;
            CustomError("Invalid Phone Number");
            this.setState({
                isLoading: false,
            });
            return null;
        }
        else if (this.state.preferredTime === "") {
            CustomError("Preferred time missing");
            this.setState({
                isLoading: false,
            });
            return null;
        } else {
            const contactObject = {
                contact_request_id: 0,
                customer_name: this.state.name,
                customer_phone_number: this.state.phone,
                customer_email: "",
                customer_message: "",
                customer_preferred_time: this.state.preferredTime,
                is_request_call_back: true,
            };

            await contactRequest(contactObject)
                .then(({ data }) => {
                    const errorCode = _.get(data, "errorCode");

                    if (errorCode === 0) {
                        CustomSuccess("Email sent successfully");
                        this.setState({
                            isSent: true,
                            isLoading: false,
                        });
                    } else {
                        const errorMessage = _.get(data, "errorMessage");
                        CustomError(errorMessage);
                        this.setState({
                            isLoading: false,
                        });
                    }
                })
                .catch(() => {
                    CustomError("Something went wrong");
                });
        }
    };

    handleInputChange = (event) => {
        if (event.currentTarget.name === "name")
            this.setState({ name: event.currentTarget.value });

        if (event.currentTarget.name === "phone")
            this.setState({ phone: event.currentTarget.value });

        if (event.currentTarget.name === "time")
            this.setState({ preferredTime: event.currentTarget.value });
    };

    render() {
        return (
            <div className="App">
                <Header />
                <div className="construction__update__container">
                    <img
                        loading="lazy"
                        src={construction_update__img}
                        alt="construction update__img"
                        className="construction__update__container__img"
                    />
                    <div className="construction__update__container__wrapper">
                        <div className="construction__update__container__wrapper__content">
                            <div className="construction__update__container__wrapper_content__carousel">
                                <img
                                    loading="lazy"
                                    src={this.state.constructionUpdateImg}
                                    alt="work__img"
                                    className="construction__update__container__wrapper_content__carousel__img"
                                    height="1000"
                                    width="800"
                                />
                                <div className="construction__update__container__wrapper_content__carousel__wrapper">
                                    <div className="construction__update__container__wrapper_content__carousel__wrapper__content">
                                        <div className="construction__update__container__wrapper_content__carousel__left">
                                            <div className="construction__update__container__wrapper_content__carousel__heading heading">
                                                {this.state.constructionUpdateTitle}
                                            </div>
                                            <div className="construction__update__container__wrapper_content__carousel__info">
                                                {this.state.constructionUpdateContent}
                                            </div>
                                        </div>
                                        <div className="construction__update__container__wrapper_content__carousel__right">
                                            <CircularProgressbar
                                                value={this.state.constructionUpdateProgress}
                                                text={`${this.state.constructionUpdateProgress}%`}
                                                strokeWidth={3}
                                                styles={{
                                                    trail: {
                                                        stroke: "#ffffff",
                                                    },
                                                    path: {
                                                        stroke: "#dfb449",
                                                    },
                                                    text: {
                                                        fill: "#dfb449",
                                                    },
                                                }}
                                                counterClockwise={true}
                                            />
                                            ;
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="construction__update__container__wrapper_content__carousel__progress__controls">
                                <div className="construction__update__container__wrapper_content__carousel__progress__controls__bar"></div>

                                {this.state.mileStonesList.map((milestone, milestoneIndex) => (
                                    <ConstructionUpdateControl
                                        defaultChecked={milestoneIndex === 0 ? true : false}
                                        date={moment(milestone.milestone_expected_completion_date).format('MMMM Do YYYY')}
                                        onClick={() => {

                                            this.setState({
                                                constructionUpdateTitle: milestone.milestone_title,
                                                constructionUpdateContent:
                                                    milestone.milestone_description,
                                                constructionUpdateImg: milestone.milestone_image_url != null ?
                                                    process.env.REACT_APP_BASEURL +
                                                    milestone.milestone_image_url : work__img,
                                                constructionUpdateProgress: 50,
                                            });
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plans__container">
                    <div className="plans__container__heading">Upcoming Plans</div>
                    <div className="plans__container__content">
                        {this.state.upComingPlansList.map((plan, planIndex) => (
                            <div className="plans__container__content__card">
                                <img
                                    loading="lazy"
                                    src={plansImage1}
                                    alt="plansImage"
                                    className="plans__container__content__card__img"
                                />
                                <div className="plans__container__content__card__content">
                                    <div className="plans__container__content__card__content__heading heading">
                                        {plan.building_name}
                                    </div>
                                    <div className="plans__container__content__card__content__info">
                                        {plan.building_description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="photo__gallery__container">
                    <div className="photo__gallery__container__heading">
                        Photo Gallery
                    </div>
                    <PhotoGallery />
                </div>
                <ContactSection
                    isSent={this.state.isSent}
                    name={this.state.name}
                    handleInputChange={this.handleInputChange}
                    requestACall={this.requestACall}
                    resetForm={this.resetForm}
                />
                <Footer />
            </div>
        );
    }
}
