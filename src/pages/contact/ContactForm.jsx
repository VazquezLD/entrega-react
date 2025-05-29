import React from "react";
import '../../styles/Contact.css'
import { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues } from "../../formik/InitialValues";
import { validationSchema } from "../../formik/validationSchema";
import { sendEmail } from "../../formik/emailJs";

export const ContactForm = () => {
    const [formStatus, setFormStatus] = useState(false)
    const formRef = useRef();

  return (
    <div className="formContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
            setFormStatus(true)
            sendEmail(formRef)
            resetForm()
            setTimeout(() => {
            setFormStatus(false)
          }, 5000)
        }}
      >
        {() => (
            <>
          <Form className="contactForm" ref={formRef}>
            <h2>Formulario de contácto</h2>
            <div className="inputDivF">
              <label htmlFor="name">Nombre</label>
              <Field type="text" name="name" placeholder="Tu nombre" id="name" className="inputField"/>
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="inputDivF">
              <label htmlFor="lastname">Apellido</label>
              <Field type="text" name="lastname" placeholder="Tu apellido" id="lastname" className="inputField"/>
              <ErrorMessage name="lastname" component="div" className="error" />
            </div>

            <div className="inputDivF">
              <label htmlFor="email">Correo</label>
              <Field type="email" name="email" placeholder="tuemail@ejemplo.com" id="email" className="inputField"/>
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="inputDivF">
              <label htmlFor="issue">Consulta</label>
              <Field as="textarea" name="issue" placeholder="Escribe tu consulta aquí..." id="issue" className="inputF"/>
              <ErrorMessage name="issue" component="div" className="error" />
            </div>

            <button type="submit" className="sendButton">Enviar</button>
          </Form>
          {formStatus && (
                <div className="success-message">
                    ¡Formulario enviado con éxito!
                </div>
            )}
            </>
        )}
      </Formik>
    </div>
  );
};
