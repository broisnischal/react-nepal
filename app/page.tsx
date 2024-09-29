import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Award,
  Calendar,
  MapPin,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReactNepal() {
  const speakers = [
    {
      name: "Aaditya Thapa",
      role: "Senior React Developer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Binita Sharma",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Chandra Dangol",
      role: "Full Stack Developer",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  // const sponsors = [
  //   {
  //     name: "RONT",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDz5ECw1gcllCjAYQXo75qW6gnuvJmSFk6lQ&s",
  //   },
  //   {
  //     name: "Kathmandu IT",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wAdrBfysUvWN8O554diHTZSdb14KOH2yeQ&s",
  //   },
  //   {
  //     name: "Nepal Innovates",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/en/5/54/Tribhuvan_University_logo.svg",
  //   },
  //   {
  //     name: "Nepal Innovates",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/en/5/54/Tribhuvan_University_logo.svg",
  //   },
  // ];

  return (
    <div className="  w-full items-center flex flex-col min-h-screen">
      <header className=" items-center justify-center w-full m-auto top-0 z-50 ">
        <div className="flex  justify-center h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Zap className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                React Nepal
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#workshops"
              >
                Workshops
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#conference"
              >
                Conference
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#speakers"
              >
                Speakers
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#sponsors"
              >
                Sponsors
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <section
        className=" py-12 md:py-24 lg:py-32 xl:py-4 xl:min-h-[50vh] flex items-center justify-center space-y-10 bg-no-repeat h-full w-full bg-center bg-cover"
        //  className="flex flex-col items-start space-y-4 bg-no-repeat bg-cover h-full w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?cs=srgb&dl=pexels-souvenirpixels-1531660.jpg&fm=jpg)`,
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex items-center justify-center text-center">
          <div className="px-4 md:px-6 ">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                React Nepal | {new Date().getFullYear()}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Join us for the biggest React conference in Nepal. Learn,
                connect, and innovate with the best in the industry.
              </p>
            </div>
            <div className="space-x-4 mt-2 ">
              <Button variant="secondary">Get Tickets</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="workshops" className="w-full py-12 md:py-24 lg:py-32">
        <div className="m-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Workshops
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">React Fundamentals</h3>
                <p className="text-sm text-muted-foreground">
                  Master the basics of React and build your first app.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>June 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">Advanced React Patterns</h3>
                <p className="text-sm text-muted-foreground">
                  Dive deep into advanced React patterns and optimization
                  techniques.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>June 16, 2024</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">
                  React Native for Beginners
                </h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to build mobile apps with React Native.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>June 17, 2024</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Pre-Event Hangout
          </h2>
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Join us for a casual meetup before the main event. Network with
              fellow developers, speakers, and organizers.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="w-4 h-4" />
              <span>June 18, 2024 | 6:00 PM - 9:00 PM</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Thamel, Kathmandu</span>
            </div>
            <Button>RSVP Now</Button>
          </div>
        </div>
      </section>
      <section id="conference" className="w-full py-12 md:py-24 lg:py-32">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Conference Day
          </h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">Main Conference</h3>
                <p className="text-sm text-muted-foreground">
                  A full day of inspiring talks, panel discussions, and
                  networking opportunities.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>June 19, 2024 | 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Hyatt Regency, Kathmandu</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">After Party</h3>
                <p className="text-sm text-muted-foreground">
                  Celebrate with fellow attendees, speakers, and sponsors at our
                  exclusive after-party.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>June 19, 2024 | 7:00 PM - 11:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Hyatt Regency, Kathmandu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className=" px-4 md:px-6">
          <br />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 text-center">
              <Users className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold">Networking Opportunities</h3>
              <p className="text-sm text-muted-foreground text-balance">
                Connect with React developers from all over Nepal and beyond.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Zap className="w-12 h-12 text-primary text-balance" />
              <h3 className="text-xl font-bold">Hands-on Workshops</h3>
              <p className="text-sm text-muted-foreground text-balance">
                Gain practical skills with our interactive workshops led by
                industry experts.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Award className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold">Open Source Awards</h3>
              <p className="text-sm text-muted-foreground text-balance">
                Recognizing outstanding contributions to the React ecosystem in
                Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="speakers" className="w-full py-12 md:py-24 lg:py-32">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Speakers
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground">{speaker.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Stay Updated
          </h2>
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Subscribe to our newsletter for the latest updates about React
              Nepal 2024.
            </p>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className=" px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Ticket Prices
          </h2>
          <p className="text-center">Donate a bit for nepals growth.</p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Tech Discussions
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">Future of React in Nepal</h3>
                <p className="text-sm text-muted-foreground">
                  Join our expert panel as they discuss the future of React
                  development in Nepal.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>Open Discussion</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">
                  Building a Tech Community
                </h3>
                <p className="text-sm text-muted-foreground">
                  Participate in a roundtable discussion on fostering a thriving
                  tech community in Nepal.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="w-4 h-4" />
                  <span>Interactive Session</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold flex items-center justify-center tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            <Award className="w-12 h-12 text-primary" />
            Open Source Awards
          </h2>
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Recognizing outstanding contributions to the React ecosystem in
              Nepal. Nominate projects or individuals who have made a
              significant impact.
            </p>
            <Button>Nominate Now</Button>
          </div>
        </div>
      </section>
      {/* <section
        id="sponsors"
        className="w-full border-t py-12 md:py-24 lg:py-32 "
      >
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Sponsors
          </h2>
          <div className="grid gap-2 lg:grid-cols-4">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg"
              >
                <Image
                  className="bg-blend-color-burn"
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Community />
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 React Nepal. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function Community() {
  return (
    <section className=" gap-2 w-full flex flex-col items-center px-8 bg-black text-white py-20">
      <div className="max-w-4xl flex flex-col gap-8">
        <div>
          <div className="flex flex-col gap-2 justify-center w-full items-start">
            <div className="inline-flex items-start">
              <h1 className="tracking-tight inline font-semibold text-4xl lg:text-5xl">
                Community
              </h1>
              &nbsp;&nbsp;
            </div>
          </div>
          <p className="w-full my-2 text-lg lg:text-xl font-normal text-default-500 max-w-full md:w-full items-start">
            Get involved in our community. Everyone is welcome!
          </p>
          <br />
          <span
            aria-hidden="true"
            className="w-px h-px block"
            // style="margin-left: 0.25rem; margin-top: 3rem;"
          ></span>
          <div className="grid *:border grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
            <div
              className="flex border flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 text-white data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
              role="button"
            >
              <div className="flex  p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center text-pink-500 bg-transparent">
                  <svg
                    height="32"
                    viewBox="0 0 24 24"
                    width="32"
                    className="text-[#00ACEE]"
                  >
                    <path
                      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="text-base font-semibold">Twitter</p>
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="18"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="18"
                  className="text-white"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </div>
              <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased pt-0">
                <p className="font-normal text-base text-default-500">
                  For announcements, tips and general information.
                </p>
              </div>
            </div>
            <button
              className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 text-white  backdrop-blur-lg backdrop-saturate-[1.8]"
              type="button"
              role="button"
            >
              <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center text-pink-500 bg-transparent">
                  <svg
                    height="32"
                    viewBox="0 0 24 24"
                    width="32"
                    className="text-[#7289DA]"
                  >
                    <path
                      d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="text-base font-semibold">Discord</p>
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="18"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="18"
                  className="text-white"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </div>
              <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased pt-0">
                <p className="font-normal text-base text-default-500">
                  To get involved in the community, ask questions and share
                  tips.
                </p>
              </div>
            </button>
            <button
              className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 text-white dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
              type="button"
              role="button"
            >
              <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center text-pink-500 bg-transparent">
                  <svg
                    height="32"
                    viewBox="0 0 24 24"
                    width="32"
                    className="text-[#E7E7E7] dark:text-[#E7E7E7]"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-base font-semibold">Github</p>
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="18"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="18"
                  className="text-white"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </div>
              <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased pt-0">
                <p className="font-normal text-base text-default-500">
                  To report bugs, request features and contribute to the
                  project.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
