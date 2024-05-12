import React, {useEffect, useState} from 'react';
import {PeopleIconForRaiting} from "./micro/icons";
import {getAllFeedbacks} from "../services/FeedbackService";
import {FeedbackModal} from "./FeedbackModal";

interface Ifeedback {
    Title: string,
    Description: string,
}

const FiveSection = () => {
    const [feedbacks, setFeedbacks] = React.useState<Ifeedback[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const toogleModal = () => setShow(!show);

    useEffect(() => {
        getAllFeedbacks().then(data => setFeedbacks(data))
        console.log(feedbacks)
    }, [])

    return (
        <>
            <div className={"fiveSection"}>
                <div className="fiveSection__wrapper">
                    {feedbacks.map((feedback, i) => (
                        <>
                            <div className={"fiveSection__header"}>
                                <PeopleIconForRaiting/>
                                <p>{feedback.Title}</p>
                            </div>
                            <div className={"fiveSection__description"}>
                                {feedback.Description}
                            </div>
                        </>
                    ))}
                    <div className="fiveSection__btnContainer">
                        <button onClick={toogleModal} className="fiveSection__btnContainer-btn">Залишити відгук</button>
                    </div>
                </div>
            </div>
            <FeedbackModal isOpen={show} onClose={toogleModal}/>
        </>
    );
};

export default FiveSection;