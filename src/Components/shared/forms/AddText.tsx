import { CButton } from '@coreui/react'
import React from 'react'

const AddText = ({setStep}:{setStep:React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <div>AddText
      <CButton color='info' className='px-4 text-white !text-sm !font-medium' onClick={() => setStep(3)}>
        Next
      </CButton>
    </div>
  )
}

export default AddText