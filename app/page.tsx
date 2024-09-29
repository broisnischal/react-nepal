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

  const sponsors = [
    {
      name: "RONT",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDz5ECw1gcllCjAYQXo75qW6gnuvJmSFk6lQ&s",
    },
    {
      name: "Kathmandu IT",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wAdrBfysUvWN8O554diHTZSdb14KOH2yeQ&s",
    },
    {
      name: "Nepal Innovates",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/54/Tribhuvan_University_logo.svg",
    },
    {
      name: "Nepal Innovates",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/54/Tribhuvan_University_logo.svg",
    },
  ];

  return (
    <div className="w-full items-center flex flex-col min-h-screen">
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
      <section
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
      </section>

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
