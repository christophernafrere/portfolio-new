"use client";
import Header from "@/layouts/header";
import HeroHeader from "@/section/hero-header";
import styled from "styled-components";

export default function Home() {
    return (
        <Main>
            <Header />
            <HeroHeader />
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    section {
        width: 90%;
    }
`;
