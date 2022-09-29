import React from 'react'
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useLoginEmailAccount } from 'hooks';
import { registerVersion } from 'firebase/app';

function MySignin() {
    let navigate = useNavigate();
  const { mutateAsync: loginEmailAccount, isLoading } = useLoginEmailAccount();

    const formik = useFormik({
        initialValues: {
          username: '',
          email:'',
          phone:'',
          gender:'',
          select:'',
          files:[],
          pass: '',
          cpass:''
          
        },
        validationSchema: Yup.object().shape({
          username: Yup.string()
            .min(3, 'Must be more than 4 characters')
            .required('Required'),
            email:Yup.string()
            .required('Requried')
            .matches(
              /^.((?=.*[@]){1})((?=.*[a-z]){1}).*$/,
              'Must Contain @ symbol'
            ),
            phone: Yup.string()
            .required('Required')
            .min(11),
            gender:Yup.string()
            .required('Choose Gender'),
            select:Yup.string()
            .required('Choose Skill'),

            files:Yup.array()
            .required('Choose File')
            .min(2, 'Please choose 2')
        .max(5, 'choose less than 6'),
            
          pass: Yup.string()
            .min(8, 'Must be more than 8 characters')
            .required('This field is required')
            .matches(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
            ),
            cpass: Yup.string().when('pass',{
              is: val=>(val&&val.length>0? true:false),
              then: Yup.string().oneOf(
                [Yup.ref('pass')],
                'both password need to be the same'
              )
            })
            
          
          
          //   password: Yup.string().required("This field is required"),
          //   changepassword: Yup.string().when("password", {
          //     is: val => (val && val.length > 0 ? true : false),
          //     then: Yup.string().oneOf(
          //       [Yup.ref("password")],
          //       "Both password need to be the same"
          //     )
          // })
            
        }),
        onSubmit: async (values) => {
          // eslint-disable-next-line
          const response = await loginEmailAccount(values);
          console.log(response)
          navigate('/');
        },
      });

   const onFileChange=(e)=>{
     formik.setFieldValue("files",Array.from(e.target.files))
    //  console.log(e.target.files)

   }
      
  return (
    <>
           <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
        <div className='flex content-center items-center justify-center h-full'>
          <div className='w-full lg:w-4/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0'>
              <div className='rounded-t mb-0 px-6 py-6'>
                <div className='text-center mb-3'>
                  <h6 className='text-blueGray-500 text-sm font-bold'>
                    Sign in
                  </h6>
                </div>

                <hr className='mt-6 border-b-1 border-blueGray-300' />
              </div>
              <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                <form onSubmit={formik.handleSubmit}>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-username'
                    >
                      UserName
                    </label>
                    <input
                      id='username'
                      name='username'
                      type='text'
                      className='input-styl'
                      placeholder='UserName'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                    
                    {formik.touched.username && formik.errors.username ? (
                      <div className='text-red-500 text-sm'>
                        {formik.errors.username}
                      </div>
                    ) : null}
                  </div>
                  {/* Email */}
<div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-email'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      className='input-styl'
                      placeholder='Email'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    
                    {formik.touched.email && formik.errors.email ? (
                      <div className='text-red-500 text-sm'>
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>



{/* End Input */}






{/* Phone */}
<div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-phone'
                    >
                      Phone
                    </label>
                    <input
                      id='phone'
                      name='phone'
                      type='text'
                      className='input-styl'
                      placeholder='Phone No'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                    />
                    
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className='text-red-500 text-sm'>
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>



{/* End Phone field */}




{/* Gender*/}
 <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-gender'
                    >
                     Gender
                    </label>
                    <input
                      id='gender'
                      name='gender'
                      type='radio'
                      className='mx-2'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={formik.values.gender}
                      value='male'
                    />
                    <label htmlFor="gender">Male</label>
                    {formik.touched.gender && formik.errors.gender ? (
                      <div className='text-red-500 text-sm'>
                        {formik.errors.gender}
                      </div>
                    ) : null}

<input
                      id='gender'
                      name='gender'
                      type='radio'
                      className='mx-2'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={formik.values.gender}
                      value='female'
                    />
                    <label htmlFor="gender">Female</label>
                    {formik.touched.gender && formik.errors.gender ? (
                      <div className='text-red-500 text-sm'>
                        {formik.errors.gender}
                      </div>
                    ) : null}
                     {/* <p>Please select your favorite Web language:</p>
  &nbsp; <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
  &nbsp; <label htmlFor="html">HTML</label><br />
  &nbsp; <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
  &nbsp; <label htmlFor="css">CSS</label><br />
  &nbsp; <input type="radio" id="javascript" name="fav_language" defaultValue="JavaScript" />
  &nbsp; <label htmlFor="javascript">JavaScript</label> */}
                   </div> 

{/* Select Department */}




{/* Select Department */}

<div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-select'
                    >
                      Choose Skill
                    </label>
                    <select 
                    name="select" 
                    id="select"
                    className='select-background'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.select}
                    >
                      <option value="" selected disabled>Select your skill</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Web development">Web development</option>
                      <option value="Mobile app development">Mobile app development</option>
                    </select>


                    {formik.touched.select && formik.errors.select ? (
                      <div className='text-red-500 text-sm'>
                        {formik.errors.select}
                      </div>
                    ) : null}
                  </div>

{/* Choose file*/}

<div className='relative w-full mb-3'>
                    
                    <input
                      name='files'
                      id='files'
                      type='file'
                      className='input-styl'
                    multiple
                      onChange={onFileChange}
                      onBlur={formik.handleBlur}
                    />
                   {formik.touched.files && formik.errors.files ? (
                      <div className='text-red-500 text-sm'>
                        {formik.errors.files}
                      </div>
                    ) : null}
                  </div>


{/* Password */}

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Password
                    </label>
                    <input
                      name='pass'
                      id='pass'
                      type='password'
                      className='input-styl'
                      placeholder='Password'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.pass}
                    />
                    {formik.touched.pass && formik.errors.pass ? (
                      <div className='text-red-500 text-sm'>
                        {formik.errors.pass}
                      </div>
                    ) : null}
                  </div>

{/* Confirm Password */}
<div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                     Confirm Password
                    </label>
                    <input
                      name='cpass'
                      id='cpass'
                      type='password'
                      className='input-styl'
                      placeholder='Confirm Password'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cpass}
                    />
                    {formik.touched.cpass && formik.errors.cpass ? (
                      <div className='text-red-500 text-sm'>
                        {formik.errors.cpass}
                      </div>
                    ) : null}
                  </div>


                  <div className='text-center mt-6'>
                    {isLoading ? (
                      <div />
                    ) : (
                      <>
                        <button className='btn-styl' type='submit'>
                          Sign In
                        </button>
                      </>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className='flex flex-wrap mt-6 relative'>
              <div className='w-1/2'>
                <a
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                  className='text-black'
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className='w-1/2 text-right'>
                <Link to='/signup' className='text-black'>
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MySignin
