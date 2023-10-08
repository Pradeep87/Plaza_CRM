import React from 'react'

const ContentWrapper = ({children,className}) => {
  return (
    <div className={`contentWrapper ${className}`}>
          {children}
    </div>
  )
}

export default ContentWrapper
