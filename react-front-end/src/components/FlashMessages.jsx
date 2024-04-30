import React, { useState, useEffect } from 'react';

const FlashMessage = ({ type, message }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div
            className={`${
                show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            } fixed top-0 left-0 w-full bg-opacity-75 bg-transparent mt-3 px-2 transform transition-all duration-500`}
        >
            <div
                className={`${
                    type === 'success' ? 'bg-green-500' : 'bg-red-500'
                } text-white font-semibold rounded p-2`}
            >
                <span>{message}</span>
                <button className="float-right" onClick={handleClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default FlashMessage;
