import cookie from "react-cookie";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {onboarded: cookie.load("onboarded")};
  }

  handleOnboardFlag = () => {
    cookie.save("onboarded", true, {path: "/"});
  };
  ...
}
