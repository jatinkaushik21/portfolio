import React, { useState } from 'react';
import { motion } from "framer-motion"
import swal from 'sweetalert';
function ContactUs() {
  const [fields, setFields] = useState({
    firstName: { isFocused: false, hasValue: false },
    lastName: { isFocused: false, hasValue: false },
    email: { isFocused: false, hasValue: false },
    mobile: { isFocused: false, hasValue: false },
    message: { isFocused: false, hasValue: false },
  });

  const handleFocus = (field) => {
    setFields((prev) => ({
      ...prev,
      [field]: { ...prev[field], isFocused: true },
    }));
  };

  const handleBlur = (field, e) => {
    setFields((prev) => ({
      ...prev,
      [field]: { ...prev[field], isFocused: false, hasValue: e.target.value.length > 0 },
    }));
  };

  const handleChange = (field, e) => {
    setFields((prev) => ({
      ...prev,
      [field]: { ...prev[field], hasValue: e.target.value.length > 0 },
    }));
  };
  const handleSubmit = () => {
    swal({
      title: "Confirm Submission",
      text: "Are you sure you want to send this message? Once sent, it cannot be modified.",
      icon: "warning",
      buttons: {
        cancel: "Cancel",
        confirm: {
          text: "Send",
          value: true,
          visible: true,
          className: "confirm-button",
          closeModal: true
        }
      },
      dangerMode: true,
    })
    .then((willSend) => {
      if (willSend) {
        swal("Success!", "Your message has been sent successfully.", "success");
      } else {
        swal("Cancelled", "You can still modify your message.", "error");
      }
    });
  };

  return (
    <section className="flex justify-center items-center min-h-[100vh] p-[20px] w-full relative before:content-[''] before:absolute before:sm:w-[400px] before:animate-[animate-before_10s_ease-in-out_infinite] after:animate-[animate-after_10s_ease-in-out_infinite] before:sm:h-[400px] before:bg-gradient-to-r from-[#ffeb3b] to-[#e91e63] before:rounded-[50%] before:sm:-translate-x-[480px] before:-translate-y-[240px] after:content-[''] after:absolute after:sm:w-[350px] after:sm:h-[350px] after:bg-blue-500 after:rounded-[50%] after:sm:translate-x-[500px] after:translate-y-[40px] after:translate-x-[150px] before:-translate-x-[150px] before:w-[200px] before:h-[200px] after:w-[200px] after:h-[200px] after:-z-10">
      <motion.div  initial={{x:100,opacity:0}}
                     animate={{x:0,opacity:1}}
                     transition={{duration:1,delay:1.5}} className="container -mt-[60px] sm:-mt-[250px] relative z-[] w-full max-w-[1000px] bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.25)] rounded-[10px] overflow-hidden backdrop-blur-[25px] before:content-[''] before:absolute before:top-0 before:-left-[40%] before:w-full before:h-full before:bg-[rgba(255,255,255,0.05)] before:pointer-events-none before:-skew-x-[15deg]">
        <h2 className="w-full mt-3 sm:mt-2 text-center text-[#fff] text-[28px] sm:text-[36px] mb-[10px] sm:mb-[20px]">Contact Me</h2>

        <div className="ml-[3vh] row100 relative w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[10px]">
          <div className="col relative w-full px-0 py-[10px] mt-[10px] mb-[10px] sm:mt-[30px] sm:mb-[20px]">
            <div className="inputbox relative w-full h-[40px]">
              <input
                type="text"
                required="required"
                className="absolute w-full h-full bg-transparent border-none outline-none text-[14px] sm:text-[15px] text-lime-400 z-[1] peer"
                onFocus={() => handleFocus('firstName')}
                onBlur={(e) => handleBlur('firstName', e)}
                onChange={(e) => handleChange('firstName', e)}
              />
              <span
                className={`absolute top-0 left-0 leading-[40px] text-[14px] sm:text-[18px] text-[#fff] transition-all duration-300 ease-in-out origin-left ${
                  fields.firstName.isFocused || fields.firstName.hasValue ? '-translate-y-[20px] scale-[0.8]' : ''
                }`}
              >
                First Name
              </span>
              <span className="absolute bottom-0 left-0 block w-[80%] sm:w-[90%] h-[2px] bg-[#fff] transition-all duration-300 ease-in-out "></span>
            </div>
          </div>

          <div className="col relative w-full px-0 py-[10px] mt-[10px] mb-[10px] sm:mt-[30px] sm:mb-[20px]">
            <div className="inputbox relative w-full h-[40px]">
              <input
                type="text"
                required="required"
                className="absolute w-full h-full bg-transparent border-none outline-none text-[14px] sm:text-[15px] text-lime-400 z-[1] peer"
                onFocus={() => handleFocus('lastName')}
                onBlur={(e) => handleBlur('lastName', e)}
                onChange={(e) => handleChange('lastName', e)}
              />
              <span
                className={`absolute top-0 left-0 leading-[40px] text-[14px] sm:text-[18px] text-[#fff] transition-all duration-300 ease-in-out origin-left ${
                  fields.lastName.isFocused || fields.lastName.hasValue ? '-translate-y-[20px] scale-[0.8]' : ''
                }`}
              >
                Last Name
              </span>
              <span className="absolute bottom-0 left-0 block w-[80%] sm:w-[90%] h-[2px] bg-[#fff] transition-all duration-300 ease-in-out "></span>
            </div>
          </div>
        </div>

        <div className="row100 ml-[3vh] relative w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[10px]">
          <div className="col relative w-full px-0 py-[10px] mt-[10px] mb-[10px] sm:mt-[30px] sm:mb-[20px]">
            <div className="inputbox relative w-full h-[40px]">
              <input
                type="email"
                required="required"
                className="absolute w-full h-full bg-transparent border-none outline-none text-[14px] sm:text-[15px] text-lime-400 z-[1] peer"
                onFocus={() => handleFocus('email')}
                onBlur={(e) => handleBlur('email', e)}
                onChange={(e) => handleChange('email', e)}
              />
              <span
                className={`absolute top-0 left-0 leading-[40px] text-[14px] sm:text-[18px] text-[#fff] transition-all duration-300 ease-in-out origin-left ${
                  fields.email.isFocused || fields.email.hasValue ? '-translate-y-[20px] scale-[0.8]' : ''
                }`}
              >
                Email
              </span>
              <span className="absolute bottom-0 left-0 block w-[80%] sm:w-[90%] h-[2px] bg-[#fff] transition-all duration-300 ease-in-out "></span>
            </div>
          </div>

          <div className="col relative w-full px-0 py-[10px] mt-[10px] mb-[10px] sm:mt-[30px] sm:mb-[20px]">
            <div className="inputbox relative w-full h-[40px]">
              <input
                type="tel"
                required="required"
                className="absolute w-full h-full bg-transparent border-none outline-none text-[14px] sm:text-[15px] text-lime-400 z-[1] peer"
                onFocus={() => handleFocus('mobile')}
                onBlur={(e) => handleBlur('mobile', e)}
                onChange={(e) => handleChange('mobile', e)}
              />
              <span
                className={`absolute top-0 left-0 leading-[40px] text-[14px] sm:text-[18px] text-[#fff] transition-all duration-300 ease-in-out origin-left ${
                  fields.mobile.isFocused || fields.mobile.hasValue ? '-translate-y-[20px] scale-[0.8]' : ''
                }`}
              >
                Mobile
              </span>
              <span className="absolute bottom-0 left-0 block w-[80%] sm:w-[90%] h-[2px] bg-[#fff] transition-all duration-300 ease-in-out "></span>
            </div>
          </div>
        </div>

        <div className="row100 ml-[3vh] relative w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[10px]">
          <div className="col relative w-full px-0 py-[10px] mt-[10px] mb-[10px] sm:mt-[30px] sm:mb-[20px]">
            <div className="inputbox relative w-full h-[80px] text-[#fff]">
              <textarea
                required
                className="absolute w-full h-full bg-transparent border-none outline-none text-[14px] sm:text-[15px] text-lime-400 z-[1] peer"
                onFocus={() => handleFocus('message')}
                onBlur={(e) => handleBlur('message', e)}
                onChange={(e) => handleChange('message', e)}
              ></textarea>
              <span
                className={`absolute top-0 left-0 leading-[40px] text-[14px] sm:text-[18px] text-[#fff] transition-all duration-300 ease-in-out origin-left ${
                  fields.message.isFocused || fields.message.hasValue ? '-translate-y-[30px] scale-[0.8]' : ''
                } peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100`}
              >
                Type your Message Here...
              </span>
              <span className="absolute bottom-0 left-0 top-[50px] block w-[80%] sm:w-[95%] h-[2px] bg-[#fff] transition-all duration-300 ease-in-out"></span>
            </div>
          </div>
        </div>

        <div className="row100 ml-[3vh] relative w-full grid grid-cols-1 gap-[10px] mb-11">
          <div className="col  relative w-full px-0 py-[10px] ">
            <input
              type="submit"
              value="Send"
              onClick={handleSubmit
            }
              className="bg-red-400  py-[10px] px-[40px] rounded-[6px] text-white cursor-pointer hover:bg-black hover:text-white text-[14px] sm:text-[16px]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
