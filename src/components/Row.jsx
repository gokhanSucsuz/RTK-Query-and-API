/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Row({ children, className }) {
    
    return (
        <div className={`row ${className}`}>
            {children}
        </div>
    )
}