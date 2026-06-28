"use client";
import MissionIcon from "@/icons/mission-icon";
import colors from "@/lib/color";
import styled from "styled-components";

export default function DeploymentHistory() {
    const deployments = [
        {
            name: "climb-bro",
            version: "1.0.1",
            description:
                "Plateforme de mise en relation pour grimpeurs permettant de trouver des partenaires d'escalade et d'organiser facilement des sessions en salle.",
            github: "https://github.com/christophernafrere/climb-bro",
            link: "https://dev.climb-bro.fr",
        },
        {
            name: "instant-present",
            version: "1.0.1",
            description:
                "Plateforme de rencontres par activités réelles intégrant réservation d'événements, gestion des participants et administration complète.",
            github: "https://github.com/christophernafrere/instant-present",
            link: null,
        },
        {
            name: "BJ Multi Renov",
            version: "1.255.1",
            description:
                "Landing page développée pour une entreprise de rénovation afin de présenter ses services et améliorer sa présence en ligne.",
            github: "https://github.com/christophernafrere/bj-multi-renov",
            link: "https://www.bjmultirenov.fr/",
        },
        {
            name: "DKtiv",
            version: "1.0.1",
            description:
                "D-KTIV est une application qui transforme la marche ou la course en missions solidaires, en connectant les utilisateurs avec des associations locales pour encourager à la fois l'activité physique et l'engagement bénévole.",
            github: "https://github.com/christophernafrere/dktiv-re",
            link: null,
        },
        {
            name: "Meal In Sight",
            version: "1.0.1",
            description:
                "Meal in Sight est une application web dédiée à la gestion et à la visualisation de repas. Le projet repose sur un back-end Node.js avec Prisma et une base de données PostgreSQL, le tout orchestré avec Docker pour faciliter le déploiement et la reproductibilité de l'environnement de développement.",
            github: "https://github.com/christophernafrere/meal-in-sight",
            link: null,
        },
    ];
    return (
        <section id="projects" aria-label="Projets déployés">
            <TitleSection>
                <MissionIcon />
                DEPLOYMENT_HISTORY
            </TitleSection>
            <DeploymentList>
                {deployments.map((deployment, index) => (
                    <DeploymentItem key={index}>
                        <DeploymentData>
                            <p className="version">{`Project ${deployment.version}`}</p>
                            <h3>{deployment.name}</h3>
                            <p className="description">
                                {deployment.description}
                            </p>
                            {deployment.link && (
                                <ProjectLink
                                    href={deployment.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    EXECUTE VIEW
                                </ProjectLink>
                            )}
                            <ProjectLink
                                href={deployment.github}
                                target="_blank"
                                rel="noopener noreferrer">
                                VIEW SOURCE CODE
                            </ProjectLink>
                        </DeploymentData>
                    </DeploymentItem>
                ))}
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
        a {
            border: 1px solid rgba(${colors.primary.blue});
            background-color: rgba(${colors.primary.blue}, 20%);
            color: rgba(${colors.primary.blue});
        }
    }

    &:nth-child(3n + 2) {
        border-left: 4px solid rgba(${colors.primary.red});
        color: rgba(${colors.primary.red});
        a {
            border: 1px solid rgba(${colors.primary.red}, 20%);
            background-color: rgba(${colors.primary.red}, 20%);
            color: rgba(${colors.primary.red});
        }
    }

    &:nth-child(3n + 3) {
        border-left: 4px solid rgba(${colors.primary.yellow});
        color: rgba(${colors.primary.yellow});
        a {
            border: 1px solid rgba(${colors.primary.yellow}, 20%);
            background-color: rgba(${colors.primary.yellow}, 20%);
            color: rgba(${colors.primary.yellow});
        }
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 8px;
        margin-top: 8px;
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

const ProjectLink = styled.a``;
