import React from 'react'
import { memo } from 'react'

function ExpComp(props) {
    console.log("Expcomp rendered", props.count,"times")
  return (
    <div>ExpComp</div>
  )
}
export default memo(ExpComp)