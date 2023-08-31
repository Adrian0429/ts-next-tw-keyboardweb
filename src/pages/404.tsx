import React from "react";
import Image from "next/image";
import imageerror from "public/assets/404.jpg";
import Link from "next/link";
import NewNav from "components/Navbar";
import HeroNew from "components/Hero";


interface Props {}

interface State {
  message: string;
}

//stateful class
//better pake fuctional comp. + hooks
class Custom404 extends React.Component<Props, State> {
  timer: NodeJS.Timeout | undefined;
  constructor(props: Props) {
    super(props);
    this.state = {
      message: "Page not found",
    };
  }

  componentDidMount() {
    //timer duration == 3detik
    const delayInSeconds = 3;
    let countDown = delayInSeconds;

    const timerId = setInterval(() => {
      if (countDown === 0) {
        this.setState({
          message:
            "Tapi Boong, pencet yang dibawah yak buat balik :) belom belajar buat itu",
        });
        clearInterval(timerId);
      } else {
        this.setState({
          message: `Page not found, Redirecting you back to the home page in ${countDown} seconds.`,
        });
        countDown -= 1;
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <>
      <NewNav/>
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">We can't find that page.</p>
          <h1 className="mb-4 text-4xl font-bold text-gray-800 text-center">
            {this.state.message}
          </h1>
          <Link
            href="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      
      </>
    );
  }
}

export default Custom404;
