import React, { useEffect, useState } from 'react'
import './style.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { biletDelete, biletPost } from '../../helpers/Crud';
import { Helmet } from 'react-helmet-async';

const AddPage = () => {
    const [api, setApi] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000")
          .then((res) => res.json())
          .then((data) => setApi(data));
      }, []);

  return (
   <>
      <Helmet>
      <title>
        Add Page
      </title>
    </Helmet>
   <section className='addPage'>
        <div className='addPage__container'>
            <div className='addPage__container__form'>
            <Formik
       initialValues={{ title: '', file: '', img: '', text: '' }}
       validationSchema={Yup.object({
         title: Yup.string()
           .required('Required'),
         file: Yup.string()
           .required('Required'),
         img: Yup.string()
         .required('Required'),
         text: Yup.string()
         .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            biletPost(values)
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
        <div className='addPage__container__form__box'>
             <div>
         <label htmlFor="title">Title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
         </div>
       
        <div>
        <label htmlFor="file">Folder Name</label>
         <Field name="file" type="text" />
         <ErrorMessage name="file" />
        </div>
        
 
        <div>
        <label htmlFor="img">Image Address</label>
         <Field name="img" type="text" />
         <ErrorMessage name="img" />

        </div>
         <div>
         <label htmlFor="text">Text</label>
         <Field name="text" type="text" />
         <ErrorMessage name="text" />
 
         </div>
         <button type="submit">Submit</button>
        </div>
       </Form>
     </Formik>
            </div>
            <div className='addPage__container__table'>
            <table>
                <thead>
                    <th>img</th>
                    <th>title</th>
                    <th>Folder</th>
                    <th>text</th>
                    <td>Delete</td>
                </thead>
                <tbody>
                    {api.map((x)=>{
                        return(
                            <tr key={x._id}>
                            <td><img src={x.img} alt="" /></td>
                            <td>{x.title}</td>
                            <td>{x.file}</td>
                            <td>{x.text.slice(0,22)}...</td>
                            <td><button onClick={()=>biletDelete(x._id)}>Delete</button></td>
                            </tr>
                        )
                    }
                    
                    )}
                </tbody>

            </table>
            </div>
        </div>
    </section>
   </>
  )
}

export default AddPage