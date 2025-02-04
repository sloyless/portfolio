import { Component } from '@angular/core';
import { AboutTabs, Skill, PortfolioCard } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio of Sean Loyless';
  aboutActive = 1;

  readonly items: AboutTabs[] = [
    {
      id: 1,
      title: 'Top Skills',
      detail: [
        {
          title: 'Full Stack/Application Developer',
          subtitle: 'Development',
          text: 'Over 20 years of professional programming experience in website and mobile app development.',
        },
        {
          title: 'Application Architecture',
          subtitle: 'UX/UX',
          text: 'Enterprise, large scale applications, and design system planning and development.',
        },
        {
          title: 'Lead Developer Roles',
          subtitle: 'Leadership',
          text: 'Able to manage small and large teams of local and offshore developers to meet project goals.',
        },
        {
          title: 'Accessibility and Responsive Design',
          subtitle: 'a11y',
          text: 'Supporting a11y standards and mobile-first design in all projects from the start.',
        },
      ],
    },
    {
      id: 2,
      title: 'Awards',
      detail: [
        {
          title: 'Winner of IBM Hackathon Challenge',
          subtitle: '48in48',
          text: 'Participated in the October 2020 48in48 Hackathon challenge supporting Black-owned charities.',
        },
        {
          title: 'Financial Innovation Awards',
          subtitle: 'Digital Evolution Program',
          text: 'San Antonio Chamber of Commerce website',
        },
      ],
    },
    {
      id: 3,
      title: 'Experience',
      detail: [
        {
          title: 'Lead Software Engineer',
          subtitle: 'The Walt Disney Company',
          text: '2025 - Current',
        },
        {
          title: 'Senior Application Developer',
          subtitle: 'IBM Consulting - iX',
          text: '2016 - 2025',
        },
        {
          title: 'Presentation Layer Engineer',
          subtitle: 'Razorfish',
          text: '2012 - 2016',
        },
      ],
    },
    {
      id: 4,
      title: 'Education',
      detail: [
        {
          title: 'Art Institute of Houston',
          subtitle: 'Bachelors of Applied Science - Multimedia',
          text: '2001',
        },
        {
          title: 'Magnolia High School',
          subtitle: 'Magnolia, TX',
          text: '1996',
        },
      ],
    },
  ];

  readonly skills: Skill[] = [
    {
      title: 'Website Development',
      icon: 'bi-code-square',
      text: 'Full-stack programming and markup including HTML, SCSS/CSS, JavaScript, Angular, React, PHP, MySQL.',
    },
    {
      title: 'Graphic Design',
      icon: 'bi-images',
      text: 'I spent the beginning of my career (2001-2005) as a Graphic Designer before moving into web development, which has served me well in working with other designers.',
    },
    {
      title: 'Mobile App Development',
      icon: 'bi-phone-vibrate',
      text: 'Creating cross-platform mobile applications in React Native.',
    },
    {
      title: 'Application Architecture',
      icon: 'bi-server',
      text: 'Create Enterprise-level website or mobile applications from top to bottom. Scoping, discovery, and design systems.',
    },
    {
      title: 'Accessibility First',
      icon: 'bi-eye',
      text: 'Every site or application I develop places a strong emphasis on meeting accessibility (a11y) requirements, particularly for individuals with visual impairments.',
    },
    {
      title: 'Marketing & Reporting',
      icon: 'bi-bar-chart-line',
      text: 'Experience with Analytics and reporting tools.',
    },
  ];

  readonly portfolioItems: PortfolioCard[] = [
    {
      id: 202010,
      date: '2020',
      title: 'United Cargo',
      client: 'IBM iX',
      image: '/assets/portfolio/unitedcargo.jpg',
    },
    {
      id: 202003,
      date: '2020',
      title: 'Kichler Lighting',
      client: 'IBM iX',
      image: '/assets/portfolio/kichler.jpg',
    },
    {
      id: 201807,
      date: '2018',
      title: 'P-TECH Academy',
      client: 'IBM iX',
      image: '/assets/portfolio/ptech.jpg',
    },
    {
      id: 201803,
      date: '2018',
      title: 'Childrens Defense Fund',
      client: 'IBM iX',
      image: '/assets/portfolio/cdf.jpg',
    },
    {
      id: 201707,
      date: '2017',
      title: 'United Airlines',
      client: 'IBM iX',
      image: '/assets/portfolio/united.jpg',
    },
    {
      id: 201504,
      date: '2015',
      title: 'AT&T Small Business',
      client: 'Razorfish',
      image: '/assets/portfolio/attcircle.jpg',
    },
    {
      id: 201404,
      date: '2013',
      title: 'Blackberry',
      client: 'Razorfish',
      image: '/assets/portfolio/blackberry.jpg',
    },
  ];
}
