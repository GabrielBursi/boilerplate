import React from 'react'
import { MainProps } from './types'
import * as S from './style'

export const Main = ({ description = 'default', title = 'default'}: MainProps) => {
    return (
        <S.Main>
            <h1>Gabriel</h1>
            <p>{ title }</p>
            <p>{ description }</p>
        </S.Main>
    )
}