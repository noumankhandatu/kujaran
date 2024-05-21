import React from 'react'
import Jumping from './jumping'
import { useSelector } from 'react-redux'
import { reduxClassType } from '../../../redux/slices/extraslices'
import { useNavigate } from 'react-router-dom'
import Dressage from './dressage'
import Endurance from './endurance'

const jumpingEnum = 'SHOW_JUMPING'
const dressageEnum = 'DRESSAGE'
const enduranceEnum = 'ENDURANCE'


const JudgeScoring = ({ showJudge }) => {
    const navigate = useNavigate()
    const classType = useSelector(reduxClassType)
    if (classType === null) return navigate('/')

    console.log(classType, 'classType')

    return (
        <div>
            {classType === jumpingEnum && <Jumping showJudge={showJudge} />}
            {classType === dressageEnum && <Dressage />}
            {classType === enduranceEnum && <Endurance />}

        </div>
    )
}

export default JudgeScoring