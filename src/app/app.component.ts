import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio of Sean Loyless';
  aboutActive = 1;

  readonly items: readonly any[] = [
    {
      id: 1,
      title: 'Top Skills',
      detail: [
        {
          title: 'Full Stack/Application Developer',
          subtitle: 'Development',
          text: 'Over 20 years of professional programming experience in website and mobile app development.'
        },
        {
          title: 'Application Architecture',
          subtitle: 'UX/UX',
          text: 'Enterprise, large scale applications, and design system planning and development.'
        },
        {
          title: 'Lead Developer Roles',
          subtitle: 'Leadership',
          text: 'Able to manage small and large teams of local and offshore developers to meet project goals.'
        },
        {
          title: 'Accessibility and Responsive Design',
          subtitle: 'a11y',
          text: 'Supporting a11y standards and mobile-first design in all projects from the start.'
        },
      ]
    },
    {
      id: 2,
      title: 'Awards',
      detail: [
        {
          title: 'Winner of IBM Hackathon Challenge',
          subtitle: '48in48',
          text: 'Participated in the October 2020 48in48 Hackathon challenge supporting Black-owned charities.'
        },
        {
          title: 'Financial Innovation Awards',
          subtitle: 'Digital Evolution Program',
          text: 'San Antonio Chamber of Commerce website'
        }
      ]
    },
    {
      id: 3,
      title: 'Experience',
      detail: [
        {
          title: 'Application Developer',
          subtitle: 'IBM Consulting - iX',
          text: '2016 - Current'
        },
        {
          title: 'Presentation Layer Engineer',
          subtitle: 'Razorfish',
          text: '2012 - 2016'
        }
      ]
    },
    {
      id: 4,
      title: 'Education',
      detail: [
        {
          title: 'Art Institute of Houston',
          subtitle: 'Associate of Science - Multimedia',
          text: '2001'
        },
        {
          title: 'Magnolia High School',
          subtitle: 'Magnolia, TX',
          text: '1996'
        }
      ]
    },
  ];

  readonly skills: readonly any[] = [
    {
      title: 'Website Development',
      icon: 'bi-code-square',
      text: 'Full-stack programming and markup including HTML, SCSS/CSS, JavaScript, Angular, React, PHP, MySQL.'
    },
    {
      title: 'Graphic Design',
      icon: 'bi-images',
      text: 'I spent the beginning of my career (2001-2005) as a Graphic Designer before moving into web development, which has served me well in working with other designers.'
    },
    {
      title: 'Mobile App Development',
      icon: 'bi-phone-vibrate',
      text: 'Creating cross-platform mobile applications in React Native.'
    },
    {
      title: 'Application Architecture',
      icon: 'bi-server',
      text: 'Create Enterprise-level website or mobile applications from top to bottom. Scoping, discovery, and design systems.'
    },
    {
      title: 'Accessibility First',
      icon: 'bi-eye',
      text: 'Every site or application I build has heavy consideration on a11y requirements for people with visual disabilities.'
    },
    {
      title: 'Marketing & Reporting',
      icon: 'bi-bar-chart-line',
      text: 'Experience with Analytics and reporting tools.'
    },
  ]
}
