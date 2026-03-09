"use client";
import ChipIcon from "@/icons/chip-icon";
import MissionIcon from "@/icons/mission-icon";
import colors from "@/lib/color";
import React from "react";
import styled from "styled-components";

export default function DeploymentHistory() {
    return (
        <section>
            <TitleSection>
                <MissionIcon />
                DEPLOYMENT_HISTORY
            </TitleSection>
            <DeploymentList>
                <DeploymentItem>
                    <DeploymentData>
                        <p className="version">Project 1.255.1</p>
                        <h3>BJ Multi Renov</h3>
                        <p className="description">
                            Landing page développée pour une entreprise de
                            rénovation afin de présenter ses services et
                            améliorer sa présence en ligne. Le site met en avant
                            les prestations de l&apos;entreprise, ses
                            réalisations et permet aux clients potentiels de
                            prendre contact facilement.
                        </p>
                        <button
                            onClick={() =>
                                window.open("https://www.bjmultirenov.fr")
                            }>
                            EXECUTE VIEW
                        </button>
                    </DeploymentData>
                </DeploymentItem>

                <DeploymentItem>
                    <DeploymentData>
                        <p className="version">Project 1.0.1</p>
                        <h3>DKtiv</h3>
                        <p className="description">
                            D-KTIV est une application qui transforme la marche
                            ou la course en missions solidaires, en connectant
                            les utilisateurs avec des associations locales pour
                            encourager à la fois l&apos;activité physique et
                            l&apos;engagement bénévole.
                        </p>
                        <button
                            onClick={() =>
                                window.open(
                                    "https://dktiv.christopher-nafrere.fr/",
                                )
                            }>
                            EXECUTE VIEW
                        </button>

                        <button
                            onClick={() =>
                                window.open(
                                    "https://github.com/christophernafrere/dktiv-re",
                                )
                            }>
                            VIEW SOURCE CODE
                        </button>
                    </DeploymentData>
                </DeploymentItem>

                <DeploymentItem>
                    <DeploymentData>
                        <p className="version">Project 1.0.1</p>
                        <h3>Meal In Sight</h3>
                        <p className="description">
                            Meal in Sight est une application web dédiée à la
                            gestion et à la visualisation de repas. Le projet
                            repose sur un back-end Node.js avec Prisma et une
                            base de données PostgreSQL, le tout orchestré avec
                            Docker pour faciliter le déploiement et la
                            reproductibilité de l&apos;environnement de
                            développement.
                        </p>
                        <button
                            onClick={() =>
                                window.open("https://www.meal-in-sight.fr")
                            }>
                            EXECUTE VIEW
                        </button>

                        <button
                            onClick={() =>
                                window.open(
                                    "https://github.com/christophernafrere/meal-in-sight",
                                )
                            }>
                            VIEW SOURCE CODE
                        </button>
                    </DeploymentData>
                </DeploymentItem>
            </DeploymentList>
        </section>
    );
}

const TitleSection = styled.h2`
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        width: 24px;
        height: 24px;
    }
`;

const DeploymentList = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 16px 0;
    gap: 16px 0;
`;

const DeploymentItem = styled.li`
    list-style-type: none;
    display: flex;

    background-color: #181834;
    padding: 16px;
    border-radius: 0 8px 8px 0;
    &:nth-child(3n + 1) {
        border-left: 4px solid rgba(${colors.primary.blue});
        color: rgba(${colors.primary.blue});
        button {
            border: 1px solid rgba(${colors.primary.blue});
            background-color: rgba(${colors.primary.blue}, 20%);
            color: rgba(${colors.primary.blue});
        }
    }

    &:nth-child(3n + 2) {
        border-left: 4px solid rgba(${colors.primary.red});
        color: rgba(${colors.primary.red});
        button {
            border: 1px solid rgba(${colors.primary.red}, 20%);
            background-color: rgba(${colors.primary.red}, 20%);
            color: rgba(${colors.primary.red});
        }
    }

    &:nth-child(3n + 3) {
        border-left: 4px solid rgba(${colors.primary.yellow});
        color: rgba(${colors.primary.yellow});
        button {
            border: 1px solid rgba(${colors.primary.yellow}, 20%);
            background-color: rgba(${colors.primary.yellow}, 20%);
            color: rgba(${colors.primary.yellow});
        }
    }

    button {
        cursor: pointer;
        padding: 8px;
    }
`;

const DeploymentData = styled.div`
    flex: 3;
    h3 {
        color: white;
        margin: 8px 0;
    }
    .description {
        color: grey;
        margin-bottom: 16px;
    }
`;
const DeploymentPreview = styled.img`
    flex: 1;
`;
