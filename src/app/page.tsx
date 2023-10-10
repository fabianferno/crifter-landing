import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/videocall.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <div className="mt-24 bg-neutral-950 pb-12 pt-2">
      <SectionIntro
        invert
        title="Offline Cohorts"
        className="mt-5 sm:mt-32 lg:mt-40"
      >
        <p>
          Imagine, you are traveling for 15 days together with your favorite
          content creator learning by creating stuff. Here’s a interesting
          opportunity for you. Learn the art of creating content from your
          favorite creators in-person.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-zinc-800 transition hover:bg-neutral-900 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <div className="">
                      <Image
                        src={caseStudy.logo}
                        alt={caseStudy.client}
                        className="h-48 w-full object-cover"
                        unoptimized
                      />
                    </div>
                  </Link>
                </h3>

                <p className="mt-6 font-display text-2xl font-semibold text-zinc-100">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-500">
                  {caseStudy.description}
                </p>
                <p className="mt-6 flex gap-x-2 text-sm text-zinc-400">
                  {/* <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time> */}
                  <span>{caseStudy.duration}</span>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Rs. {caseStudy.pricing}/-</span>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Admit: {caseStudy.admit}</span>
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Exclusive Access!"
        title="Personalised 1-1 calls with your favorite creators"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Check out the creators onboard and get a chance to have a conversation
          with your favorite creator.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Corporate chronicle">
              Venkat is a renowned Finfluencer with over half a decade of
              experience in Personal finance and Wealth management. In this
              cohort, you get to travel with Venkat for a week in person and
              learn the art of becoming a Finance content creator from scratch
            </ListItem>
            <ListItem title="Master Mind Maddy">
              Maddy is an Infotainment content creator with over half a decade
              of experience in content creation. He was a part of the Core team
              of the renowned Tamil YouTube channel “ Nee Yaruda Komali “. Maddy
              talks about entrepreneurship, business, education and finance. You
              will learn to create content , research and analyze the market and
              what not from him. Join now.
            </ListItem>
            <ListItem title="Jeni MJ">
              Jeni is a renowned content creator who creates entertaining
              content across socials predominantly in youtube and instagram. She
              has a collective follower base of over 5 million and she’s the
              brand ambassador of Youtube shorts for Tamilnadu. In this cohort,
              you get to travel with Jeni and learn from her about the ways
              through which she is creating content and how she is attracting
              brand collaborations
            </ListItem>
            <ListItem title="Akshay partha">
              Akshay Partha is famous for his entertaining videos with his
              Grandma on Instagram Reels. Akshay Partha has more than 310K
              Followers on Instagram (as in October 2021). He has huge fan
              following on Instagram due to his amazing personality and handsome
              looks.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Want to become a full time content creator or influencer?
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Your favorite creators are here to help you with that!
          </p>
        </FadeIn>
      </Container>

      {/* <Clients /> */}

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Crifter team helped me in my dream. Insert more testmonial here.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
