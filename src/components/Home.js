import {React, useRef} from 'react';
import emailjs from 'emailjs-com';
import {Container, Tab, Row, Col, Nav, Figure, Image, Carousel, Form, Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHtml5, faReact, faSass, faCss3Alt, faJs, faJava, faAngular, faVuejs, faNode, faYarn, faBootstrap, faPython, faFigma, faGit, faGithub, faNpm, faPhp, faMicrosoft} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profile from '../assets/profile.jpeg';
import maxifitstore from '../assets/maxifitstore.png';
import andrelimapersonal from '../assets/andrelimapersonal.png';
import adote from '../assets/adote.png';
import analu from '../assets/analu-v1.png';
import graficaplanalto from '../assets/graficaplanalto.png';
import './Home.scss';

const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_lfr3ag8', form.current, 'user_Ez0ZTgyO0Bpcd4lMDkeaO')
        .then((result) => {
            alert("Mensagem enviada! Em até 24h entraremos em contato.");
        }, (error) => {
            alert("Oops! Algo deu errado :( Tente novamente!");
        });
        

        e.target.reset();
    };

    return(
        <Container className="home pb-5 px-2">
            <Tab.Container id="left-tabs-example" defaultActiveKey="hello">
                <Row>
                    <Col sm={3} className="text-center">
                    <Figure>
                        <Figure.Image
                            width={180}
                            alt="Analu foto"
                            src={profile}
                            className="profile text-center"
                        />
                        <Figure.Caption>
                            <span>Ana Luíza Guimarães, 23 anos.</span>
                            <span>Front-end Developer</span>
                                <a href="mailto:contato@analugmrs.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                                <a href="https://www.linkedin.com/in/analugmrs" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://www.github.com/analugmrs" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                            
                        </Figure.Caption>
                    </Figure>
                    </Col>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-md-column">
                            <Nav.Item>
                            <Nav.Link eventKey="hello">Olá,</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="skills">Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="contato">Contato</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={7} className="mt-3 mt-md-0">
                    <Tab.Content>
                        <Tab.Pane eventKey="hello">
                            <p>se chegou até aqui pode me chamar de Analu e não repara a bagunça, o site oficial está sendo desenvolvido e em breve estaremos aqui de casa nova! Sou desenvolvedora front-end com conhecimentos em HTML, CSS, JavaScript e os principais frameworks e libs da área, mas também atuo no back-end. Tenho 23 anos e meu primeiro contato com o desenvolvimento foi há 12 anos atrás, desenvolvendo blogs com HTML, CSS e JS para venda.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="skills">
                            <p className="fa-icons-text">
                                <div class="fa-icons">
                                    <FontAwesomeIcon icon={faHtml5} />
                                    <FontAwesomeIcon icon={faReact} />
                                    <FontAwesomeIcon icon={faSass} />
                                    <FontAwesomeIcon icon={faCss3Alt} />
                                    <FontAwesomeIcon icon={faJs} />
                                    <FontAwesomeIcon icon={faJava} />
                                    <FontAwesomeIcon icon={faAngular} />
                                    <FontAwesomeIcon icon={faVuejs} />
                                    <FontAwesomeIcon icon={faNode} />
                                    <FontAwesomeIcon icon={faYarn} />
                                    <FontAwesomeIcon icon={faBootstrap} />
                                    <FontAwesomeIcon icon={faPython} />
                                    <FontAwesomeIcon icon={faFigma} />
                                    <FontAwesomeIcon icon={faGit} />
                                    <FontAwesomeIcon icon={faGithub} />
                                    <FontAwesomeIcon icon={faNpm} />
                                    <FontAwesomeIcon icon={faPhp} />
                                    <FontAwesomeIcon icon={faMicrosoft} />
                                </div>
                            </p>
                            <p><b>Forte conhecimento:</b> HTML, CSS, JavaScript, jQuery, React, Bootstrap, SaSS, Java.</p>
                            <p><b>Médio conhecimento:</b> Pug, Vue, TypeScript, Angular, Firebase, PHP, Python, Selenium.</p>
                            <p><b>Outras technical skills:</b> Git, Github, Node, NPM, Photoshop, Adobe XD, Figma, Microsoft (Sharepoint, PowerApps, PowerAutomate, Power BI, PowerPlatform, Office).</p>
                            <p>Além disso, possuo conhecimento e experiência em metodologias ágeis, gestão/gerenciamento de projetos e desenvolvimento de produtos.</p>
                            </Tab.Pane>
                        <Tab.Pane eventKey="portfolio">
                            <p>Para apresentar um pouco dos meus conhecimentos, o portfólio foi dividido em projetos reais e pequenas aplicações e infelizmente ainda não está completo.</p>
                            <Row>
                            <Col sm={12} lg={6} className="mb-3">
                                <Carousel>
                                    <Carousel.Item>
                                        <Image
                                        className="d-block w-100"
                                        src={maxifitstore}
                                        alt="E-commerce Maximus Fitness"
                                        />
                                        <Carousel.Caption>
                                        <p>Maximus Fitness Store</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                        className="d-block w-100"
                                        src={andrelimapersonal}
                                        alt="Site de vendas Personal André"
                                        />
                                        <Carousel.Caption>
                                        <p>André Lima Personal Trainer</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                        className="d-block w-100"
                                        src={adote}
                                        alt="Adote: amor que não se compra"
                                        />
                                        <Carousel.Caption>
                                        <p>Adote &hearts;</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                        className="d-block w-100"
                                        src={graficaplanalto}
                                        alt="Institucional Gráfica Planalto"
                                        />
                                        <Carousel.Caption>
                                        <p>Gráfica & Copiadora Planalto</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                        className="d-block w-100"
                                        src={analu}
                                        alt="Meu primeiro site pessoal <3"
                                        />
                                        <Carousel.Caption>
                                        <p>Analu (versão 1)</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            <Col sm={12} lg={6}>
                            <Carousel variant="dark">
                                    <Carousel.Item>
                                        <Card className="w-100">
                                            <Card.Body>
                                                <Card.Title>
                                                    <Card.Link href="https://analugmrs.com/conversor/index.html" target="_blank">Conversor de moedas</Card.Link>
                                                </Card.Title>
                                                <Card.Text>
                                                    <span>Vem ver essa aplicação desenvolvida em HTML, CSS e JS.</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card className="w-100">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <Card.Link href="#" target="_blank">Em breve...</Card.Link>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <span>Em breve...</span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="contato" className="mx-2">

                            <Form>
                                <Row className="mx-1">
                                    
                                <form ref={form} onSubmit={sendEmail}>
                                    <Row>
                                    <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="formBasicText">
                                        <Form.Label>Seu nome</Form.Label>
                                        <Form.Control type="text" name="name" placeholder="Seu nome" required/>
                                    </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="seuemail@exemplo.com" required/>
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formBasicText">
                                        <Form.Label>Telefone (DDD + Número)</Form.Label>
                                        <Form.Control type="tel" pattern="[0-9]{2}[0-9]{4,5}[0-9]{4}$" name="phone" placeholder="34999999999 (somente números)" minlength="11" maxlength="11" required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicText">
                                        <Form.Label>Mensagem</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="message" placeholder="Sua mensagem" required/>
                                    </Form.Group>                            
                                    <Button type="submit" variant="dark" value="Send">
                                        <FontAwesomeIcon icon={faPaperPlane} /> &nbsp; Enviar mensagem
                                    </Button>
                                </form>
                                    
                                </Row>
                            </Form>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

export default Home;
