/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import hero from "../../assets/hero.png"
import { useEffect } from "react";


const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        let errors = {};

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }

        if (!firstName) {
            errors.firstName = 'First name is required';
        }

        if (!lastName) {
            errors.lastName = 'Last name is required';
        }

        if (!isChecked) {
            errors.isChecked = 'You must agree to the terms and conditions';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate());
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            // Form submission logic here
            console.log({ email, firstName, lastName, isChecked });
        }
    }, [errors, isSubmitting]);
    return (
        <div className="md:flex items-center gap-5 py-12">
            <div className="space-y-12 md:w-3/5">
                <h2 className="text-2xl mb-2 text-red-500 font-semibold">Award Winning</h2>
                <h1 className="text-5xl font-bold mb-2">Digital Marketing Agency</h1>
                <p className="text-lg mb-4">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
                <button onClick={toggleModal} className="bg-red-500 text-white px-5 py-3 rounded">Contact Us</button>

            </div>
            <div className="flex items-center justify-center duration-500">
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold">Talk to us</h2>
                                <h2
                                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                    onClick={toggleModal}
                                >
                                    ❌
                                </h2>
                            </div>
                            {/* <form onSubmit={handleSubmit} action="https://getform.io/f/bolglvja" method="POST"> */}
                                <form action="https://getform.io/f/bolglvja" method="POST">
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Work Email"
                                        className={`w-full px-3 py-2 border-b border-gray-300 rounded ${errors.email && 'border-red-500'}`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="mb-4 w-full">
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="First Name"
                                            className={`w-full px-3 py-2 border-b border-gray-300 rounded ${errors.firstName && 'border-red-500'}`}
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                    </div>
                                    <div className="mb-4 w-full">
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Last Name"
                                            className={`w-full px-3 py-2 border-b border-gray-300 rounded ${errors.lastName && 'border-red-500'}`}
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            checked={isChecked}
                                            name="subscribe" value="yes"
                                            onChange={(e) => setIsChecked(e.target.checked)}
                                        />
                                        <span className="ml-2">I agree to Fyles terms and conditions, and provide consent to send me communication.</span>
                                    </label>
                                    {errors.isChecked && <p className="text-red-500 text-sm">{errors.isChecked}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#E6005C] text-white text-lg px-4 py-2 w-full rounded-md"
                                >
                                    Contact Us
                                </button>
                            </form>

                        </div>
                    </div>
                )}
            </div>
            <div className="md:w-2/5">
                <img src={hero} className="h-[600px]" alt="coming soon" />
            </div>
        </div>
    );
};

export default Banner;