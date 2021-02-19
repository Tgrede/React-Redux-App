import React, {useEffect} from 'react'
import {getData} from './../actions/index'
import {connect} from 'react-redux'
import styled from 'styled-components'

function CountryList(props) {

     useEffect(() => {
          props.getData()
     },[])

     const usCovidData = props.data.US
     const covidDataArr = Object.entries(usCovidData)
     // const keyArr = Object.keys(props.data.US)
     // const valArr = Object.values(props.data.US)
     return (
          <StyledList>
               {console.log(covidDataArr)}
               {/* {keyArr.map((state, i) => (
                    <StyledItem key={i}>
                         State: {state} 
                         Data: {valArr.filter((val, n) => {
                              console.log(n)
                         })}
                    </StyledItem>
               ))} */}
               {covidDataArr.map((statePair) => {
                    return (
                    <StyledItem>
                         <StyledState>{statePair[0]}</StyledState>
                         <StyledStats>Confirmed: {statePair[1].confirmed}</StyledStats>
                         <StyledStats>Deaths: {statePair[1].deaths}</StyledStats>
                    </StyledItem>
                    )
               })}


          </StyledList>
     )
}


const StyledList = styled.div`
     display:flex;
     flex-direction:column;
     align-items:flex-start;
     width:50%;
`
const StyledItem = styled.div`
     padding: 1% 0%;
     margin: 2% 0%;
     border:1px solid black;
     border-radius:10px;
     width:100%;
     background-color:darkgrey;
`

const StyledState = styled.h2`
     margin-left:6%;
     text-shadow:.5px .5px .5px black;
     font-size:2rem;
`

const StyledStats = styled.h3`
     margin-left:12%;
     font-size:1.5rem;
`

const mapStateToProps = (state) => {
     return ({data: state.data})
}
export default connect(mapStateToProps, {getData})(CountryList)
