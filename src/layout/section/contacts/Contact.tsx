import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles"

export const Contact: React.FC = () => {
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}></S.Field>
                    <S.Field placeholder={"subject"}></S.Field>
                    <S.Field placeholder={"message"} as={"textarea"}></S.Field>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};




// import styled from 'styled-components'
// import { Field } from 'components/field/field'
//
// import emailjs from '@emailjs/browser'
// import { FormEvent, useRef, useState } from 'react'
// import {SectionTitle}  from '../../../components/SectionTitle'
// import { useTranslation } from 'react-i18next'
// import {Button} from "../../../components/Button";
//
// export const ContactsForm = () => {
//     const form = useRef<HTMLFormElement | null>(null)
//     const [formSubmitted, setFormSubmitted] = useState(false)
//     const { t } = useTranslation()
//
//     const sendEmail = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         if (!form.current) return
//         let value = e.currentTarget
//
//         emailjs.sendForm('service_knpk8sm', 'template_iot9u2r', form.current, '4D4Sqo0622kiedngy').then(
//             (result) => {
//                 setFormSubmitted(true)
//                 console.log(result.text)
//                 value.reset()
//             },
//             (error) => {
//                 console.log(error.text)
//             },
//         )
//     }
//
//     return (
//         <StyledForm ref={form} onSubmit={sendEmail}>
//             <Field label={`${t('fieldName', { ns: 'contacts' })}`} name={'name'} />
//             <Field type={'email'} label={`${t('fieldEmail', { ns: 'contacts' })}`} name={'email'} />
//             <Field label={`${t('fieldMessage', { ns: 'contacts' })}`} name={'message'} />
//             <Button type={'submit'}>{t('sendButton', { ns: 'main' })}</Button>
//             {formSubmitted && <SectionTitle>{t('formSubmittedText', { ns: 'contacts' })}</SectionTitle>}
//         </StyledForm>
//     )
// }
//
// const StyledForm = styled.form`
//   max-width: 700px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 30px;
//   margin: 0 auto;
// `
