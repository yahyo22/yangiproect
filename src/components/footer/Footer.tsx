import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
    <StyledFooter>
        <div className="container">
        <section>
            <div>
                <h2>Yangiliklar</h2>
                <ul>
                    <li>O‘qituvchilar</li>
                    <li>O‘quvchilar</li>
                    <li>Ota-onalar</li>
                </ul>
            </div>
            <div>
            <h2>Maktablar</h2>
                <ul>
                    <li>Davlat maktablari</li>
                    <li>Prezident maktablari</li>
                    <li>Ijod maktablari</li>
                    <li>Xususiy maktablar</li>
                </ul>
            </div>
            <div>
            <h2>Olimpiyadalar</h2>
                <ul>
                    <li>Davlat olimpiyadalari</li>
                    <li>Xalqaro olimpiyadalar</li>
                    <li>Xalqaro tanlovlar</li>
                    <li>Xususiy olimpiyadalar</li>
                </ul>
            </div>
            <div>
            <h2>Kutubxona</h2>
                <ul>
                    <li>Testlar</li>
                    <li>Imtihon</li>
                    <li>Hujjatlar</li>
                </ul>
            </div>
            <div>
                <div>
                    <i className='icon insta'></i>
                </div>
            </div>
        </section>
        <section></section>
        </div>
        
    </StyledFooter>
  )
}
const StyledFooter = styled.div`
    background: #12AAE4;
`
