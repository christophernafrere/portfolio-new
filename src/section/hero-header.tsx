"use client";
import styled from "styled-components";

import React from "react";
import colors from "@/lib/color";

export default function HeroHeader() {
    return (
        <HeroHeaderContainer>
            <CockpitImg src="/images/cockpit.webp" alt="gundam-cockpit" />
            <Frame>
                <TextContainer>
                    <p>STATUS: ONLINE</p>
                    <h2>MOBILE SUIT : DEV-01</h2>
                </TextContainer>
            </Frame>
        </HeroHeaderContainer>
    );
}

const HeroHeaderContainer = styled.section`
    width: 100%;
    height: 30vh;
    position: relative;
    border: 2px solid rgba(${colors.primary.blue}, 50%);
    box-sizing: border-box;
    border-radius: 4px;
    overflow: hidden;
`;

const Frame = styled.article`
    width: 90%;
    height: 85%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1000;

        border-top: 2px solid rgba(${colors.primary.red});
        border-left: 2px solid rgba(${colors.primary.red});
        width: 64px;
        height: 64px;
    }

    &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1000;

        border-bottom: 2px solid rgba(${colors.primary.yellow});
        border-right: 2px solid rgba(${colors.primary.yellow});
        width: 64px;
        height: 64px;
    }
`;

const TextContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px 8px;
    width: 90%;
    background-color: rgba(${colors.primary.blue}, 80%);
    clip-path: polygon(0 0, 75% 0, 100% 100%, 0% 100%);
    border-radius: 8px;

    h2 {
        font-size: 1.35rem;
    }

    p {
        font-size: 0.8rem;
        color: rgba(${colors.primary.yellow});
    }
`;
const CockpitImg = styled.img`
    width: 100%;
    height: 100%;
`;
