
import Add from './add';
import Welcome from './welcome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Information = () => {
    const [cnt, setcnt] = useState(0);

    return (
        <div>
            <Provider value={{cnt}}>
                <DisplayTxt />
            </Provider>
        </div>
    )
}

class App extends React.Component {

    render() {

        return (
        <div>
	        <UiRoute />
            <FontAwesomeIcon icon={faHome} className="mr-3" />

            Welcome hello world {React.version}
            <p>Good well done Ms</p>
            <p>thanks</p>
            <Add asternum1={25} num2={56} />
            <Welcome />

            <Information />

            <p>helloooooooo</p>

        </div >
        )
    }
}
