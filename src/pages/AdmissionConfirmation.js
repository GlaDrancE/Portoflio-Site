import React, { useState } from "react";

function EnrollmentForm() {
    const [enrollmentNumber, setEnrollmentNumber] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [yearOfAdmission, setYearOfAdmission] = useState("");
    const [directSecondYear, setDirectSecondYear] = useState("no");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="enrollment-number"
                >
                    Enrollment Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="enrollment-number"
                    type="text"
                    placeholder="Enter your enrollment number"
                    value={enrollmentNumber}
                    onChange={(event) => setEnrollmentNumber(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="aadhar-number"
                >
                    Aadhar Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="aadhar-number"
                    type="text"
                    placeholder="Enter your Aadhar number"
                    value={aadharNumber}
                    onChange={(event) => setAadharNumber(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="whatsapp-number"
                >
                    WhatsApp Mobile Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="whatsapp-number"
                    type="text"
                    placeholder="Enter your WhatsApp mobile number"
                    value={whatsappNumber}
                    onChange={(event) => setWhatsappNumber(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="year-of-admission"
                >
                    Year of Admission
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="year-of-admission"
                    type="text"
                    placeholder="Enter your year of admission"
                    value={yearOfAdmission}
                    onChange={(event) => setYearOfAdmission(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="direct-second-year"
                >
                    Direct Second Year
                </label>
                <div className="flex items-center">
                    <input
                        className="mr-2 leading-tight"
                        type="radio"
                        name="direct-second-year"
                        id="direct-second-year-yes"
                        value="yes"
                        checked={directSecondYear === "yes"}
                        onChange={(event) => setDirectSecondYear(event.target.value)}
                    />
                    <label
                        className="block text-gray-700 font-bold"
                        htmlFor="direct-second-year-yes"
                    >
                        Yes
                    </label>
                    <input
                        className="ml-6 mr-2 leading-tight"
                        type="radio"
                        name="direct-second-year"
                        id="direct-second-year-no"
                        value="no"
                        checked={directSecondYear === "no"}
                        onChange={(event) => setDirectSecondYear(event.target.value)}
                    />
                    <label
                        className="block text-gray-700 font-bold"
                        htmlFor="direct-second-year-no"
                    >
                        No
                    </label>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default EnrollmentForm;