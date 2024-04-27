import React from 'react';
import {AttentionIcon, CloseIcon, PeopleIcon, PhoneIcon} from "./micro/icons";
import {useForm, SubmitHandler, useFormState, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from 'zod'
import {sendMessageToTelegram} from "../services/TelegramAPI";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void
}

const validateSchema = z.object({
    firstName: z.string().min(1, {message: "Введіть ім'я"}),
    phone: z.string().min(1, {message: "Введіть номер"}),
})

interface ISignInForm {
    firstName: string;
    phone: string;
}


export const CallModal: React.FC<ModalProps> = ({isOpen, onClose}) => {
    const { handleSubmit, control, register } = useForm<ISignInForm>({resolver: zodResolver(validateSchema)});
    const { errors } = useFormState({
        control
    })
    const onSubmit: SubmitHandler<ISignInForm> = data => sendMessageToTelegram(data);

    return (
        isOpen ?
            (<div className="callmodal">
                <form onSubmit={handleSubmit(onSubmit)} className="callmodal__container">
                    <div className="callmodal__header">
                        <h3 className="callmodal__header-text">Зворотній зв'язок</h3>
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
                            <PhoneIcon/>
                        </div>
                        <input {...register("phone")}
                               type="text"
                               className="callmodal__input-phone-input"
                               placeholder="Введіть ваш номер"/>
                    </div>
                    {errors &&
                        <div className="callmodal__error"><p className="callmodal__error-text">{errors.phone?.message}</p></div>}
                    <button className="callmodal__container-btn">Зателефонуйте мені</button>
                </form>
            </div>) : null
    )
};