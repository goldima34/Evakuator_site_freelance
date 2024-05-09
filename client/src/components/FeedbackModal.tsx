import React from 'react';
import {AttentionIcon, CloseIcon, PeopleIcon, PhoneIcon, TextIcon} from "./micro/icons";
import {useForm, SubmitHandler, useFormState, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from 'zod'
import {sendFeedbackToTelegram, sendMessageToTelegram} from "../services/TelegramAPI";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void
}

const validateSchema = z.object({
    firstName: z.string().min(1, {message: "Введіть ім'я"}),
    feedback: z.string().min(1, {message: "Введіть відгук"}),
})

interface ISignInForm {
    firstName: string;
    feedback: string;
}

export const FeedbackModal : React.FC<ModalProps> = ({isOpen, onClose}) => {
    const { handleSubmit, control, register } = useForm<ISignInForm>({resolver: zodResolver(validateSchema)});
    const { errors } = useFormState({
        control
    })
    const onSubmit: SubmitHandler<ISignInForm> = data => {
        sendFeedbackToTelegram(data);
        onClose();
    };

    return (
        isOpen ?
            (<div className="callmodal">
                <form onSubmit={handleSubmit(onSubmit)} className="callmodal__container">
                    <div className="callmodal__header">
                        <h3 className="callmodal__header-text">Відгук</h3>
                        <div className="callmodal__header-closeicon" onClick={onClose}>
                            <CloseIcon/>
                        </div>
                    </div>
                    <div className="callmodal__input-people">
                        <div className="callmodal__input-people-icon">
                            <PeopleIcon/>
                        </div>
                        <input {...register("firstName")}
                               type="text"
                               className="callmodal__input-people-input"
                               placeholder="Введіть ваше і'мя"
                        />
                    </div>
                    {errors && <div className="callmodal__error"><p
                        className="callmodal__error-text">{errors.firstName?.message}</p></div>}
                    <div className="callmodal__input-phone">
                        <div className="callmodal__input-phone-icon">
                            <TextIcon/>
                        </div>
                        <input {...register("feedback")}
                               type="text"
                               className="callmodal__input-phone-input"
                               placeholder="Введіть ваш відгук"/>
                    </div>
                    {errors &&
                        <div className="callmodal__error"><p className="callmodal__error-text">{errors.feedback?.message}</p></div>}
                    <button className="callmodal__container-btn">Залишити відук</button>
                </form>
            </div>) : null
    )
};