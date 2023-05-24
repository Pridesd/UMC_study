import { Suspense, useEffect, useState } from 'react'

import { CircleLoader } from 'react-spinners';

import { getDustForecast } from '../api/request/dust'
import styled from 'styled-components';

const imgList = ["imageUrl1", "imageUrl2", "imageUrl3", "imageUrl4", "imageUrl5", "imageUrl6"]

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`

function DustBlock() {
    const [forecasts, setForecasts] =  useState<any[]>([])
    useEffect(() => {
        getDustForecast()
        .then(({data}) => setTimeout(() => setForecasts(data.response.body.items), 1000))
    }, [])
  return (
  <>
        {forecasts.length !== 0 ? forecasts.map((item, index) => <Container>
            <h2>{item.informData}의 대기 예보</h2>
            <p>{item.informOverall}</p>
            <ImgContainer>
                {imgList.map((url) => item[url] ? 
                <img width="150px" src={item[url]} alt='먼지 사진'/>
                :
                null
                )}
            </ImgContainer>
        </Container>)
        :
        <CircleLoader color="red" />}
  </>
  )
}

export default DustBlock