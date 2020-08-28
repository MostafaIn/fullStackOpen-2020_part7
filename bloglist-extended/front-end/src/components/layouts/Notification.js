import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  if(!notification.msg){
    return null
  }

  return (
    <div className={notification.err ? 'notification error' : 'notification'}>
      {notification.msg}
    </div>
  )
}

export default Notification