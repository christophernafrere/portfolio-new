import colors from "@/lib/color";
import React from "react";
import styled from "styled-components";
import { GithubIcon, LinkedinIcon, ZapIcon } from "lucide-react";
export default function Contact() {
    return (
        <section>
            <h2 style={{ marginBottom: "16px" }}>[COMM_LINK: CONTACT]</h2>

            <Container>
                <Form>
                    <label>
                        NOM DU PILOTE
                        <input type="text" placeholder="NOM DU PILOTE" />
                    </label>

                    <label>
                        FREQUENCE_COMMS
                        <input
                            type="text"
                            placeholder="JOHN.DOE@PROTOCOLE.COM"
                        />
                    </label>

                    <label>
                        CHARGE_UTILE
                        <textarea placeholder="ENTRER MESSAGE CHIFFRE..." />
                    </label>

                    <button>
                        Transmettre message <ZapIcon />
                    </button>
                </Form>

                <RSContainer>
                    <RSSection>
                        <h3>Protocole_liens_externes</h3>

                        <RSList>
                            <RSCard
                                onClick={() =>
                                    window.open(
                                        "http://www.linkedin.fr/in/christopher-nafrere",
                                    )
                                }>
                                <LinkedinIcon size={48} />
                                <div>
                                    <h4>Linkedin</h4>
                                    <p>// id_profil: rx_naf</p>
                                </div>
                            </RSCard>
                            <RSCard
                                onClick={() =>
                                    window.open(
                                        "https://github.com/christophernafrere",
                                    )
                                }>
                                <GithubIcon size={48} />
                                <div>
                                    <h4>Github</h4>
                                    <p>// accès_repo: accordé</p>
                                </div>
                            </RSCard>
                        </RSList>
                    </RSSection>

                    <ContactAdvisor>
                        <h3>AVERTISSEMENT</h3>
                        <p>
                            Chiffrement activé. Toutes les transmissions sont
                            enregistrées par le commandement central. Le délai
                            de réponse peut varier selon la congestion du
                            réseau.
                        </p>
                    </ContactAdvisor>
                </RSContainer>
            </Container>
        </section>
    );
}

const Container = styled.div`
    gap: 16px;
    display: flex;
    flex-direction: column;
    @media (min-width: 800px) {
        flex-direction: row;
    }
`;

const Form = styled.form`
    background-color: rgba(24, 24, 52);
    border: 1px solid #222249;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    gap: 16px;
    label {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    input,
    textarea {
        background-color: rgba(16, 16, 34, 80%);
        border: 1px solid rgba(${colors.primary.blue});
        padding: 8px;
    }

    textarea {
        resize: none;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        gap: 8px;
        color: white;
        border: none;
        background-color: rgba(${colors.primary.blue});
        text-transform: uppercase;
    }
`;

const RSSection = styled.article`
    background: #181834;
    padding: 16px;
    border: 1px solid #222249;

    h3 {
        text-transform: uppercase;
        color: rgba(${colors.primary.yellow});
    }

    h4 {
        margin: 0;
    }
`;

const RSList = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const RSCard = styled.div`
    border: 1px solid #222249;
    padding: 8px;
    background-color: rgba(16, 16, 34, 50%);
    display: flex;
    align-items: center;
    gap: 16px;

    border-radius: 2px;
    div {
        p {
            color: grey;
            font-size: 0.9rem;
        }
    }

    &:nth-child(6n + 1) {
        svg {
            color: rgba(${colors.primary.blue});
        }
    }
    &:nth-child(6n + 2) {
        svg {
            color: rgba(${colors.primary.red});
        }
    }
    &:nth-child(6n + 3) {
        svg {
            color: rgba(${colors.primary.yellow});
        }
    }
`;

const ContactAdvisor = styled.div`
    border-left: 4px solid red;
    padding: 16px;
    margin: 8px;

    margin: 16px 0;

    background-color: rgba(255, 0, 0, 5%);

    h3 {
        margin-bottom: 8px;
    }

    p {
        text-transform: uppercase;
        font-size: 0.9rem;
        color: #cbd5e1;
    }
`;

const RSContainer = styled.div``;
