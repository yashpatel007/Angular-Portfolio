import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentProviderService {

  name: String = "Yash Patel"
  roles_array: Array<string> = ["A", "B", "C"];
  about_content = "I am a software engineer highly skilled at creating scalable web applications. My area of expertise is back-end development and deployment, I also have experties in front end development with mordern JS Frameworks as well as passion for design."
  resume_link = "https://google/com";
  skills = {
    front_end: ['Angular', 'React', 'Node.js', 'Vue'],
    back_end: ['Spring', 'Django', 'Jawa Swing', 'R', 'SQL/NoSQL'],
    deployment: ['AWS', '']
  }
  experience = [
    {
      companyTitle: 'Vantage Labs LLC',
      company: 'VantageLabs',
      link: 'https://www.vantage.com',
      type: 'Full Time',
      position: 'Software Developer',
      location: 'New Hope, PA',
      start: 'July 2020',
      end: 'Present',
      roles: [
        'Work on development, enhancements, and operation of web based software services as a full-stack web developer within a dedicated, produst based system',
        'Participate in specification, design, implementation and support of the product, as well as improve existing features and product performance.',
        'Integrate, design and optimize scalable API solutions for the service'
      ]
    },
    {
      companyTitle: 'Agzeit/ValueAg LLC',
      company: 'Agzeit',
      link: 'https://www.agzeit.com',
      type: 'Internship',
      position: 'Lead Software Developer',
      location: 'Binghamton, NY',
      start: 'June 2019',
      end: 'August 2019',
      roles: [
        'Designed and developed a flexible web-portal for supporting local businesses',
        'Programmed a mobile application (similar to Pokemon Go) for engaging users for web-portal',
        'Got a good peak at Angular, SQL, PHP, Objective C'
      ]

    }
  ]

  social = {
    github: 'https://github.com/yashpatel007',
    linkedin: 'https://www.linkedin.com/in/yashpatel007',
    youtube: 'https://www.youtube.com/channel/UCEOtoOm8KSqf3sISe3LwvCA'
  }

  constructor() { }
}
