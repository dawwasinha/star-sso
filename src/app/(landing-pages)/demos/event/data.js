import speaker1 from '@/assets/images/landing/event/speakers/1.jpg';
import speaker2 from '@/assets/images/landing/event/speakers/2.jpg';
import speaker3 from '@/assets/images/landing/event/speakers/3.jpg';
import speaker4 from '@/assets/images/landing/event/speakers/4.jpg';
import avatar1 from '@/assets/images/avatars/img-1.png';
import avatar2 from '@/assets/images/avatars/img-2.png';
import avatar3 from '@/assets/images/avatars/img-3.png';
import avatar4 from '@/assets/images/avatars/img-4.png';
import avatar8 from '@/assets/images/avatars/img-8.png';
import directory1 from '@/assets/images/landing/directory/directory/1.jpg';
import directory2 from '@/assets/images/landing/directory/directory/2.jpg';
import directory3 from '@/assets/images/landing/directory/directory/3.jpg';
import directory4 from '@/assets/images/landing/directory/directory/4.jpg';
export const events = [{
  date: '01 January 2020',
  title: 'Designers Meeting',
  sessions: [{
    time: '09:00 am - 11:00 am',
    description: 'Nam libero not tempore that is cum soluta omnis us repellendus is as temporibus autem quibusdam.'
  }, {
    time: '02:00 pm - 04:00 pm',
    description: 'Sed ut perspiciatis unde omnis iste natus doloremque laudantium as aperiam inventore quasi.'
  }, {
    time: '06:00 pm - 08:30 pm',
    description: 'Itaque earum as tenetur sapiente delectus aut reiciendis voluptatibus maiores perferendis.'
  }]
}, {
  date: '13 February 2020',
  title: 'Workshops',
  sessions: [{
    time: '09:00 am - 11:00 am',
    description: 'Temporibu autem quibusdam et aut officiis debitis a rerum necessitatibus saepe repudiandae.'
  }, {
    time: '02:00 pm - 04:00 pm',
    description: 'At vero eos et accusamus us dignissimos qui blanditiis praesentium voluptatum deleniti quas.'
  }, {
    time: '06:00 pm - 08:30 pm',
    description: 'The wise a therefore always holds in these principle selection a rejects pleasures greater pains.'
  }]
}, {
  date: '24 June 2020',
  title: 'Prestation',
  sessions: [{
    time: '09:00 am - 11:00 am',
    description: 'These casese are perfectly simple and easy untrammelled when nothing prevents we like best, every.'
  }, {
    time: '02:00 pm - 04:00 pm',
    description: 'On the other we denounce with righteous men are beguiled and demoralized of pleasure.'
  }, {
    time: '06:00 pm - 08:30 pm',
    description: 'No one rejects, dislikes, or avoids pleasure but because those who do not know extremely painful.'
  }]
}];
export const eventSpeakers = [{
  name: 'John Smith',
  avatar: speaker1,
  role: 'Singer'
}, {
  name: 'Lenny Morton',
  avatar: speaker2,
  role: 'Motivational Speaker'
}, {
  name: 'Jessica Parker',
  avatar: speaker3,
  role: 'Organizer'
}, {
  name: 'Leon Erickson',
  avatar: speaker4,
  role: 'Event Manager'
}];
export const ticketPricing = [{
  name: 'John Smith',
  avatar: avatar1,
  title: 'Digital Conference Event Intro',
  description: "Digital Conference Event Intro. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
  price: 8,
  features: [{
    icon: 'lucide:badge-check',
    name: '2 person',
    variant: 'text-primary'
  }, {
    icon: 'lucide:badge-x',
    name: 'free for age under 18',
    variant: 'text-red-500'
  }, {
    icon: 'lucide:badge-x',
    name: 'vip pass',
    variant: 'text-red-500'
  }]
}, {
  name: 'Lenny Morton',
  avatar: avatar2,
  title: 'Digital Conference Event Intro',
  description: "Digital Conference Event Intro. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
  price: 28,
  features: [{
    icon: 'lucide:badge-check',
    name: '4 person',
    variant: 'text-primary'
  }, {
    icon: 'lucide:badge-check',
    name: 'free for age under 18',
    variant: 'text-primary'
  }, {
    icon: 'lucide:badge-x',
    name: 'vip pass',
    variant: 'text-red-500'
  }],
  isPopular: true
}, {
  name: 'Amanda Erickson',
  avatar: avatar8,
  title: 'Digital Conference Event Intro',
  description: "Digital Conference Event Intro. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
  price: 48,
  features: [{
    icon: 'lucide:badge-check',
    name: '8 person',
    variant: 'text-primary'
  }, {
    icon: 'lucide:badge-check',
    name: 'free for age under 18',
    variant: 'text-primary'
  }, {
    icon: 'lucide:badge-check',
    name: 'vip pass',
    variant: 'text-primary'
  }]
}];
export const eventSchedules = [{
  day: 'First Day',
  events: [{
    title: 'Singing event intro',
    description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    date: 16
  }, {
    title: 'Conference On User Interface',
    description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    date: 16
  }, {
    title: 'Business Conference for professional',
    description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    date: 16
  }, {
    title: 'Business World Event Intro',
    description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    date: 16
  }, {
    title: 'Digital world event intro',
    description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    date: 16
  }]
}, {
  day: 'Second Day',
  events: [{
    title: 'Business World Event Intro',
    description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    date: 17
  }, {
    title: 'Digital world event intro',
    description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    date: 17
  }]
}, {
  day: 'Third Day',
  events: [{
    title: 'Conference On User Interface',
    description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    date: 18
  }, {
    title: 'Business Conference for professional',
    description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    date: 18
  }, {
    title: 'Singing event intro',
    description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    date: 16
  }]
}];
export const blogs = [{
  title: 'The Langham-Chicago',
  description: 'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
  price: 49,
  avatar: avatar1,
  name: 'Gina Sanchez',
  image: directory1,
  rating: 4
}, {
  title: 'Primland - Meadows of Dan',
  description: 'At vero eos et accusamus et iusto dignissimos ducimus blanaitiis praesentium voluptatum.',
  price: 69,
  avatar: avatar2,
  name: 'Joseph Cohen',
  image: directory2,
  rating: 5
}, {
  title: 'The Hay-Adams-Washington',
  description: 'Et harum quidem rerum facilis set et expedita distinctio. Nam lidero tempore cum soluta nobis.',
  price: 69,
  avatar: avatar3,
  name: 'Aaron Johnson',
  image: directory3,
  rating: 4
}, {
  title: 'Montage Deer Valley-Utah',
  description: 'Nemo enim ipsam voluptatem aut odit us fugit sed quia magni dolores aut odit us fugit magni dolores.',
  price: 49,
  avatar: avatar4,
  name: 'Sharom Donato',
  image: directory4,
  rating: 5
}];
export const navLinks = [{
  label: 'Home',
  link: '#home'
}, {
  label: 'About',
  link: '#about'
}, {
  label: 'Schedule',
  link: '#schedule'
}, {
  label: 'Speakers',
  link: '#speakers'
}, {
  label: 'Pricing',
  link: '#price'
}, {
  label: 'Blog',
  link: '#blog'
}];