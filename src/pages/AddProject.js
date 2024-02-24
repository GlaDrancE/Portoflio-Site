import React, { useState } from 'react';
const AddProject = () => {
    // State to manage form values
    const [formData, setFormData] = useState({
        image: null,
        description: '',
        frontend: '',
        backend: '',
        database: '',
        frameworks: '',
    });

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here for form submission or API call
        console.log('Form submitted:', formData);
    };

    // Handler for input changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        // If the input is a file input (for image), update the state with the file
        if (name === 'image') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            // For other inputs, update the state with the input value
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    return (
        <>
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group" id="image">
                                <label for="image">Image</label>
                                <input
                                    type="file"
                                    class="form-control-file"
                                    name="image"
                                    onChange={handleChange}
                                    accept=".jpg, .jpeg, .png"
                                    multiple
                                />
                            </div>

                            <div class="form-group" id="description">
                                <label for="description">Description</label>
                                <textarea
                                    class="form-control"
                                    rows="3"
                                    name="description"
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div class="form-group" id="frontend">
                                <label for="frontend">Front-end</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="frontend"
                                    onChange={handleChange}
                                />
                            </div>

                            <div class="form-group" id="backend">
                                <label for="backend">Backend</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="backend"
                                    onChange={handleChange}
                                />
                            </div>

                            <div class="form-group" id="database">
                                <label for="database">Database</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="database"
                                    onChange={handleChange}
                                />
                            </div>

                            <div class="form-group" id="frameworks">
                                <label for="frameworks">Frameworks</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="frameworks"
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" class="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddProject;
