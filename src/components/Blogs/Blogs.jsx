/* import React from 'react';
import Pdf from "react-to-pdf";

const Blogs = () => {
    const ref = React.createRef();


    return (
        <div>
            <section>

                <h1 className="text-4xl font-serif font-bold text-center lg:my-5">
                    Important<span className="text-orange-400"> Questions</span>
                </h1>
                <div>
                    <div>
                        <div className="flex justify-center">
                            <Pdf targetRef={ref} filename="Blog-question-and-answers">
                                {({ toPdf }) => <button className='btn ' onClick={toPdf}>Generate Pdf</button>}
                            </Pdf>
                        </div>
                        <div ref={ref}>
                            <div className="hero mt-11  lg:bg-base-200">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src="https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/Control%20%26%20Uncontrolled%20Components_Nasscom.png?itok=_1te-kaH" className="w-[370px] rounded-lg shadow-2xl" />
                                    <div className="">
                                        <h1 className="text-2xl font-bold">
                                            1. Differences between uncontrolled and controlled components.

                                        </h1>
                                        <p className="py-4">

                                            Uncontrolled components are often unpredictable and can vary widely, while controlled components are designed to be consistent and stable. Uncontrolled components can have a significant impact on a system or process, but they cannot be directly managed. Controlled components, on the other hand, are intentionally designed and managed to achieve specific outcomes. In general, controlled components are more reliable and predictable than uncontrolled components. However, both types of components are important to consider when analyzing a system or process, as they can both influence the overall outcome.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hero mt-36 lg:bg-base-200">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <img src="https://diarybydhanushka.dev/wp-content/uploads/2020/02/custom-hooks.png" className="w-[370px] rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-2xl font-bold  mb-2">
                                            2. what is custom hook?
                                        </h1>
                                        <p>
                                            A custom hook is a JavaScript function in React that allows you to reuse stateful logic across multiple components. It's a way to abstract away common functionality so that it can be easily shared and reused.

                                            Custom hooks can be created using the "use" prefix and can include any React hook, as well as any other custom hooks. For example, you can create a custom hook that uses the useState hook to manage a piece of state across multiple components, or a custom hook that uses the useEffect hook to manage side effects.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hero lg:mt-36 lg:bg-base-200">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src="https://i.ytimg.com/vi/SKqFMYOSy4g/maxresdefault.jpg" className="w-[370px] rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-3xl font-bold">
                                            3. How to validate React props using PropTypes?
                                        </h1>
                                        <p className="py-6">
                                            To validate React props using PropTypes, you first need to import the PropTypes library. Then, define the expected types of each prop in your component using the propTypes object. When an invalid prop type is passed to your component, a warning message will be printed in the console. You can also set default values for your props using the defaultProps object. Using PropTypes is a useful way to catch bugs and improve the reliability of your application.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hero lg:mt-36 lg:bg-base-200">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <img src="https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/Express-JS-vs-Node-JS_-Why-its-Time-to-Migrate_-1.png.webp" className="w-[370px] rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-3xl font-bold">
                                            4. Tell us the difference between nodejs and express js.
                                        </h1>
                                        <p className="py-6">
                                            Node.js is a server-side JavaScript runtime that allows you to execute JavaScript code on the server. Express.js, on the other hand, is a lightweight and flexible Node.js web application framework that provides a range of features to help you build web applications more easily.

                                            While Node.js provides the core functionality for executing JavaScript code on the server, Express.js adds additional functionality for handling HTTP requests, routing, middleware, and more. Express.js is built on top of Node.js and provides a simple and flexible way to build web applications using JavaScript.

                                            In short, Node.js provides the underlying runtime for executing JavaScript on the server, while Express.js provides a framework for building web applications with Node.js.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>

        </div>
    );
};

export default Blogs; */


import React from 'react';
import Pdf from "react-to-pdf";

const Blogs = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
    };

    return (
        <div ref={ref}>
            <section>
                <h1 className="text-4xl font-serif font-bold text-center lg:my-5">
                    Important<span className="text-orange-400"> Questions</span>
                </h1>
                <div>
                    <div>
                        <div className="flex justify-center">
                            <Pdf targetRef={ref} filename="Blog-question-and-answers  options={options} ">
                                {({ toPdf }) => <button className='btn ' onClick={toPdf}>Generate Pdf</button>}
                            </Pdf>
                        </div>
                        <div>
                            <div className="hero mt-11  lg:bg-base-200">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src="https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/Control%20%26%20Uncontrolled%20Components_Nasscom.png?itok=_1te-kaH" className="w-[370px] rounded-lg shadow-2xl" />
                                    <div className="">
                                        <h1 className="text-2xl font-bold">
                                            1. Differences between uncontrolled and controlled components.

                                        </h1>
                                        <p className="py-4">

                                            Uncontrolled components are often unpredictable and can vary widely, while controlled components are designed to be consistent and stable. Uncontrolled components can have a significant impact on a system or process, but they cannot be directly managed. Controlled components, on the other hand, are intentionally designed and managed to achieve specific outcomes. In general, controlled components are more reliable and predictable than uncontrolled components. However, both types of components are important to consider when analyzing a system or process, as they can both influence the overall outcome.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hero mt-36 lg:bg-base-200">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <img src="https://diarybydhanushka.dev/wp-content/uploads/2020/02/custom-hooks.png" className="w-[370px] rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-2xl font-bold  mb-2">
                                            2. what is custom hook?
                                        </h1>
                                        <p>
                                            A custom hook is a JavaScript function in React that allows you to reuse stateful logic across multiple components. It's a way to abstract away common functionality so that it can be easily shared and reused.

                                            Custom hooks can be created using the "use" prefix and can include any React hook, as well as any other custom hooks. For example, you can create a custom hook that uses the useState hook to manage a piece of state across multiple components, or a custom hook that uses the useEffect hook to manage side effects.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hero lg:mt-36 lg:bg-base-200">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src="https://i.ytimg.com/vi/SKqFMYOSy4g/maxresdefault.jpg" className="w-[370px] rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-3xl font-bold">
                                            3. How to validate React props using PropTypes?
                                        </h1>
                                        <p className="py-6">
                                            To validate React props using PropTypes, you first need to import the PropTypes library. Then, define the expected types of each prop in your component using the propTypes object. When an invalid prop type is passed to your component, a warning message will be printed in the console. You can also set default values for your props using the defaultProps object. Using PropTypes is a useful way to catch bugs and improve the reliability of your application.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hero lg:mt-36 lg:bg-base-200">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <img src="https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/Express-JS-vs-Node-JS_-Why-its-Time-to-Migrate_-1.png.webp" className="w-[370px] rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-3xl font-bold">
                                            4. Tell us the difference between nodejs and express js.
                                        </h1>
                                        <p className="py-6">
                                            Node.js is a server-side JavaScript runtime that allows you to execute JavaScript code on the server. Express.js, on the other hand, is a lightweight and flexible Node.js web application framework that provides a range of features to help you build web applications more easily.

                                            While Node.js provides the core functionality for executing JavaScript code on the server, Express.js adds additional functionality for handling HTTP requests, routing, middleware, and more. Express.js is built on top of Node.js and provides a simple and flexible way to build web applications using JavaScript.

                                            In short, Node.js provides the underlying runtime for executing JavaScript on the server, while Express.js provides a framework for building web applications with Node.js.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>

        </div>
    );
};

export default Blogs;