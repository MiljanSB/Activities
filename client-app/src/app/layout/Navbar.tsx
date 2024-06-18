import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

export default function Navbar({openForm}:Props) {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item name='home'>
                    <img src="./assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
                    Activities
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}