/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Container({ children, className }) {
    
    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    )
}