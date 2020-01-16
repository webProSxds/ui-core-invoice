import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../user-notifications/app.scss';

const Head = (props) => {
    return (
        <div className="header">
            <span>{props.title}</span>   <span>x</span>
        </div>)
}

const Body = (props) => {
    return (
        <div>
            {
                props.children()
            }
        </div>)
}

const Footer = (props) => {
    return (
        <div>
            {
                props.children()
            }
        </div>)
}

export default ({ isVisible, title, content, footer }) => {

    return (
        isVisible && <div >
            <Head title={title} />

            <Body>
                {
                    content
                }
            </Body>

            <Footer>
                {
                    footer
                }
            </Footer>
        </div>
    )
}