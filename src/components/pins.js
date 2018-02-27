import React from 'react'
const pins = ({
  knockDownPin1,
  knockDownPin2,
  knockDownPin3,
  knockDownPin4,
  knockDownPin5,
  knockDownPin6,
  knockDownPin7,
  knockDownPin8,
  knockDownPin9,
  knockDownPin10,
  resetPins,
  frameScoring
}) => {
  return (
    <div>
    <div className="row1">
    <button onClick={knockDownPin1}/>
    </div>
    <div className="row2">
    <button onClick={knockDownPin2}/> <button onClick={knockDownPin3}/>
    </div>
    <div className="row3">
    <button onClick={knockDownPin4}/> <button onClick={knockDownPin5}/> <button onClick={knockDownPin6}/>
    </div>
    <div className="row4">
    <button onClick={knockDownPin7}/> <button onClick={knockDownPin8}/> <button onClick={knockDownPin9}/> <button onClick={knockDownPin10}/>
    </div>
    <div className='scorecalc'>
    <button type='button' onClick={frameScoring}> next round! </button>
    </div>
    </div>
)
}
export default pins
