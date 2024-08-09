import React from 'react'
import { useState, useEffect } from 'react'
import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import axios from 'axios'

const MakeAccount = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [emailR, setEmailR] = useState('')
    const [password, setPassword] = useState('')
    const [passwordR, setPasswordR] = useState('')
    const [type, setType] = useState('password') //for eyeoff password
    const [icon, setIcon] = useState(eyeOff) //for password eye
    const [passwordStatus, setPasswordStatus] = useState(false)
    const [country, setCountry] = useState('')
    const [campStyle, setCampStyle] = useState('')
    const [dob, setDob] = useState('')
    const [statMessage, setStatMessage] = useState('')
    
    const axiosPostData = async() => {
        const postData = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
            country: country,
            campStyle: campStyle,
            dob: dob,
        }

        await axios.post('http://localhost:4000/usertest', postData)
        .then(res => setStatMessage(<p className={`text-sm font-light text-green-700 place-self-center`}>{res.data}</p>))
    }

    //for toggle password
    const handleToggle = () => {
        if (type==='password') {
            setIcon(eye)
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    function validateEmail(email, emailR) {
        const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let val=false
        if(validRegex.test(email) === false || email != emailR) {
            val = false
        } else {
            val = true
        }
        return val
    }

    function validatePassword(password, passwordR) {
        let val = false
        if(password != passwordR || password.length < 8 || /[A-Z]/.test(password) === false || /[a-z]/.test(password) === false || /\d/.test(password) === false || /[^A-za-z0-9]/.test(password) === false) {
            val = false
        } else {
            val = true     
        }

        return val
    }

    //won't use for now
    function getAge (dateString) {
        const today = new Date()
        const birthDate = new Date(dateString)
        const age = today.getFullYear() - birthDate.getFullYear()
        const m = today.getMonth() - birthDate.getMonth()
        if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //check if valid
        if(!firstName || !lastName || !userName || !email || !password) {
            setStatMessage(<p className='text-xs font-light text-red-500 place-self-center text-center'>
                You must fill in all required account info to proceed.
                </p>)
            console.log('error')
        } else {
            setStatMessage('')

            if(validateEmail(email, emailR) === false) {
                setStatMessage(<p className='text-xs font-light text-red-500 place-self-center text-center'>
                    Please input a valid email address
                    </p>)
                console.log('error')
            } else if (validatePassword(password, passwordR) === false) {
                setStatMessage(<p className='text-xs font-light text-red-500 place-self-center text-center'>
                    Please input a valid password
                    </p>)
                console.log('error')
            } else {
                setStatMessage('')
                console.log(email + password)
                axiosPostData()
            }
        }
    }
    
    return (
        <>
            <div className={`position: absolute top-[64px] flex flex-col h-[calc(100%-64px)] w-[100%] justify-center items-center`}>
                <div className={`flex flex-col justify-center items-center w-[100%] h-[100%]\
                    bg-[url('../../src/assets/Algonquin2021CanoeLake.jpeg')] bg-no-repeat bg-cover bg-center`}>
                    <form for='makeAccount' className = {`flex flex-col w-[56rem] rounded-xl shadow-black shadow-lg \
                        font-serif py-8 px-6 h-auto space-y-4 bg-white items-center justify-center`}>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className={`font-serif font-medium text-2xl place-self-center`}>Make an account</h1>
                            <div className='text-xs place-self-center'>Already have an account? Click&nbsp;
                                <a className='text-forest-green underline' href='/account/signin'>
                                    here
                                </a> 
                                &nbsp;to login
                            </div>
                        </div>
                            
                        {/*Row for name and username*/}
                        <div className='flex flex-row w-[100%] space-x-[2rem] items-center text-center justify-center mx-[2rem]'>
                            <input className={`bg-white w-[calc(40rem/3)] py-1 px-1 border-b-black border-b-[1px] text-sm`} type="text" placeholder="First name" 
                                id="firstName" name="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
                            <input className={`bg-white w-[calc(40rem/3)] py-1 px-2 border-b-black border-b-[1px] text-sm`} type="text" placeholder="Last name" 
                                id="lastName" name="lastName" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
                            <input className={`bg-white w-[calc(40rem/3)] py-1 px-2 border-b-black border-b-[1px] text-sm`} type="text" placeholder="Desired username" 
                                id="userName" name="userName" value={userName} onChange={ (e) => setUserName(e.target.value)}/>
                        </div>

                        <div className='flex flex-row w-[100%] space-x-[2rem] items-center text-center justify-center mx-[2rem]'>
                            <input className={`bg-white w-[calc(42rem/2)] py-1 px-1 border-b-black border-b-[1px] text-sm`} type="text" placeholder="Email" 
                                id="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                            <input className={`bg-white w-[calc(42rem/2)] py-1 px-1 border-b-black border-b-[1px] text-sm`} type="text" placeholder="Re-enter your email" 
                                id="emailR" name="emailR" value={emailR} onChange={ (e) => setEmailR(e.target.value)}/>
                        </div>

                        <hr className={`border-gray-300 place-self-center w-[52rem] m-0`}></hr>      

                        <div className='flex flex-col justify-center items-center mx-[2rem]'>
                            <h2 className='text-sm place-self-start'>Create a password</h2>
                            <div className='flex flex-row w-[100%] space-x-[2rem] items-center text-center justify-center'>
                                <input className={`bg-white w-[calc(38rem/2)] py-1 px-1 border-b-black border-b-[1px] text-sm`} type={type} placeholder="User password" 
                                    id="password" name="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                                <span className='flex justify-around items-center hover:cursor-pointer' onClick={handleToggle}>
                                    <Icon className='absolute' icon={icon} size={20}/>
                                </span>
                                <input className={`bg-white w-[calc(42rem/2)] py-1 px-2 border-b-black border-b-[1px] text-sm`} type="password" placeholder="Re-enter your password" 
                                    id="passwordR" name="passwordR" value={passwordR} onChange={ (e) => setPasswordR(e.target.value)}/>
                            </div>
                            <ul className='text-xs place-self-start'>
                                <li className={`text-[10px] ${password === passwordR ? 'text-forest-green' : 'text-red-600'}`}>Both entries must match</li>
                                <li className={`text-[10px] ${password.length > 7 ? 'text-forest-green' : 'text-red-600'}`}>At least 8 characters</li>
                                <li className={`text-[10px] ${/[A-Z]/.test(password) ? 'text-forest-green' : 'text-red-600'}`}>At least 1 uppercase letter</li>
                                <li className={`text-[10px] ${/[a-z]/.test(password) ? 'text-forest-green' : 'text-red-600'}`}>At least 1 lowercase letter</li>
                                <li className={`text-[10px] ${/\d/.test(password) ? 'text-forest-green' : 'text-red-600'}`}>At least 1 number</li>
                                <li className={`text-[10px] ${/[^A-za-z0-9]/.test(password) ? 'text-forest-green' : 'text-red-600'}`}>At least 1 symbol (e.g. !@#$% etc.)</li>
                            </ul>
                        </div>

                        <hr className={`border-gray-300 place-self-center w-[52rem] m-0`}></hr>   

                        {/*user survey*/}
                        <div className='flex flex-col justify-center items-center mx-[2rem]'>
                            <h2 className='text-sm place-self-start'>User survey</h2>
                            <div className='flex flex-row w-[100%] space-x-[2rem] items-center text-center justify-center'>
                                <select className={`bg-white w-[calc(42rem/2)] py-1 px-1 border-b-black border-b-[1px] text-sm`} 
                                    id="country" name="country" value={country} onChange={ (e) => setCountry(e.target.value)}>
                                    <option value='' disabled selected hidden>Country of residence</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Åland Islands">Åland Islands</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Territories">French Southern Territories</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guernsey">Guernsey</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-bissau">Guinea-bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                    <option value="Korea, Republic of">Korea, Republic of</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macao">Macao</option>
                                    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russian Federation">Russian Federation</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Helena">Saint Helena</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                    <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-leste">Timor-leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Viet Nam">Viet Nam</option>
                                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                                    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option> 
                                </select>
                                <select className={`bg-white w-[calc(42rem/2)] py-1 px-2 border-b-black border-b-[1px] text-sm`} 
                                    id="campStyle" name="campStyle" value={campStyle} onChange={ (e) => setCampStyle(e.target.value)}>
                                    <option value='' disabled selected hidden>Most common camping style</option>
                                    <option value='background canoe'>Backcountry Canoe Camping</option>
                                    <option value='backcountry backpacking'>Backcountry Backpacking</option>
                                    <option value='car camping'>Car Camping</option>
                                    <option value='other'>Other</option>
                                </select>
                            </div>
                        </div>

                        {/*Age survey */}
                        <div className='flex flex-row w-[100%] space-x-[2rem] items-center text-center justify-center mx-[2rem]'>
                            <p className={`bg-white w-[calc(42rem/2)] py-1 px-1 text-sm text-left`} >
                                Input your date of birth: 
                            </p>
                            <input className={`bg-white w-[calc(42rem/2)] py-1 px-1 border-b-black border-b-[1px] text-sm`} type="date" placeholder="Date of birth" 
                                id="dob" name="dob" value={dob} onChange={ (e) => setDob(e.target.value)}/>
                        </div>

                        {statMessage}

                        <button className={`border-blue-500 border-[1px] rounded-xl w-28 py-1 place-self-center \
                            text-blue-700 text-sm`} type='submit' onClick={handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MakeAccount